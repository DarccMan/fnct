const F = require("./");
const fs = require("fs");
const path = require("path");

(async () => {
  while (true) {
    str = await F.input("> ");
    if (str.startsWith("node")) {
      process.exit();
    }
    try {
      console.log(eval(str));
    } catch (err) {
      console.log(err);
    }
  }
})();