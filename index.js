const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Fetches a webpage and extracts the count of a CSS selector on the pages content.
 *
 * @param {string} url             The URL of the webpage to fetch.
 * @param {string} selector        The CSS selector to apply to the webpage content.
 * @returns {Promise<number|null>} A promise that resolves with the count of the CSS selector, or null if invalid request.
 */
async function getSelectorValue(url, selector) {
    if (!url) {
        console.error('No URL provided to getSelectorValue()');
        return null;
    }

    if (!selector) {
        console.error('No selector provided to getSelectorValue()');
        return null;
    }

    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const element = $(selector);

        return element.length;
    } catch (error) {
        console.error(`Error fetching or parsing URL (${url}) with selector (${selector}):`, error.message);
        return null;
    }
}

// CLI support
// node index.js <url> <selector>
if (require.main === module) {
    const args = process.argv.slice(2);
    const url      = args[0];
    const selector = args[1];

    if (!url || !selector) {
        console.log('Usage: node index.js <URL> <CSS_SELECTOR>');
        console.log('Example: node index.js https://www.example.com h1');
        process.exit(1);
    }

    (async () => {
        console.log(`Fetching: ${url}`);
        console.log(`Using selector: "${selector}"`);
        const value = await getSelectorValue(url, selector);

        console.log(`Count: ${value}`);
    })();
}

module.exports = {
    getSelectorValue
};
