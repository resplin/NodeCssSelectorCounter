# CSS Selector Counter

A simple Node.js script to fetch a webpage and count the occurrences of a specified CSS selector within its content. This can be useful for web scraping, analyzing page structure, or quickly checking the presence of elements on a remote URL.

---

## ✨ Features

* **Lightweight:** Built with `axios` for HTTP requests and `cheerio` for fast, jQuery-like DOM parsing.
* **Easy to Use:** Straightforward command-line interface.
* **Reusable:** The core functionality is exposed as a module for integration into larger Node.js applications.
* **Error Handling:** Includes basic error handling for invalid inputs and network issues.

---

## 🚀 Installation

To use this script, you need Node.js installed on your system.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/resplin/NodeCssSelectorCounter.git
    cd NodeCssSelectorCounter
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## 📖 Usage

### Command Line Interface (CLI)

You can run the script directly from your terminal:

```bash
node index.js <URL> <CSS_SELECTOR>
```