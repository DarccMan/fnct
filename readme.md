# Functions.js
Functions.js is a javascript library for NodeJS and html. It is a compilation of various functions and classes that are very useful.

## Installation

### NodeJS

Use [Node Package Manager](https://www.npmjs.com/) to install

```bash
npm install fnct
```

### HTML / Browser

<!-- Add this line into your `index.html` file -->
HTML support still in development
For now, just download [this](https://raw.githubusercontent.com/DarccMan/fnct/master/latest.js) file and add this line into your `index.html` file

```html
<script type="text/javascript" src="./functions.js"></script>
```

<!-- ```html
<script type="text/javascript" src="https://darccman.github.io/fnct/latest.js"></script>
``` -->

## Usage

```js
const F = require("fnct");

"Random Number: {number}".format({
  number: F.randomInt(2, 6)
}); // Formats the string with a random number between 2 and 6

(async () => {
  await F.sleep(1); // Sleeps for 1 second before continuing

  F.boolToBin(true, false, 1 == 2); // Returns "100";
})();
```

## Author
 - Darcy

## License
[MIT](https://choosealicense.com/licenses/mit/)