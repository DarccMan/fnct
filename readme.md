# Functions.js
Functions.js is a javascript library for NodeJS and HTML. It is a compilation of various functions and classes that are very useful.

## Installation

### NodeJS

Use [Node Package Manager](https://www.npmjs.com/) to install

```bash
npm install fnct
```

Then add this line to your `index.js` file

```js
const F = require("fnct");
```

### HTML / Browser

Add this line into your `index.html` file
```html
<script type="text/javascript" src="https://fnctjs.github.io/index.js"></script>
```

Alternatively, just download [this](https://fnctjs.github.io/index.js) and add this line into your `index.html` file

```html
<script type="text/javascript" src="./functions.js"></script>
```

## Usage

```js
const F = require("fnct"); // NodeJS (HTML does not need this)

"Random Number: {number}".format({
  number: F.randomInt(2, 6)
}); // Formats the string with a random number between 2 and 6

(async () => {
  await F.sleep(1); // Sleeps for 1 second before continuing

  F.boolToBin(true, false, 1 == 2); // Returns "100";
})();
```
[View the docs](./howto.md#how-to-use-functionsjs) (not finished)

## Author
 - Darcy

## License
[MIT](https://choosealicense.com/licenses/mit/)