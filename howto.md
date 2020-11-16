# How to use Functions.js

## Installation

[How to install](https://github.com/DarccMan/fnct#installation)

## Usage

---

### String Functions

#### F.fillStr()

- Used to fill a string with a certain character

- Alias:

- - `"string".fill()`

- Example:

```js
F.fillStr(
  string, // The string to be formatted
  amount, // The minimum amount of characters (Default: 2)
  character, // The character to fill it with (Default: ' ')
  reverse // Fill string in reverse (Default: false)
)

F.fillStr("abc", 5, "%"); // "%%abc"
F.fillStr("abc", 7, "%", true); // "abc%%%%"

"def".fill(5, "$") // "%%def"
"def".fill(2, "$") // "def"
```

---

#### F.center()

- Used to center a string inside characters (similar to F.fillStr)

- Alias:

- - "string".center()

- Example:

```js
F.center(
  string, // The string to be formatted
  amount, // The minimum amount of characters (Default: 20)
  character, // The character to fill the LEFT side with (Default: ' ')
  character, // The character to fill the RIGHT side with (Default: ' ')
  priorityLeft // Decides which side to use for odd number (Default: false)
)

F.center("abc", 7, "%"); // "%%abc%%"
F.center("abc", 7, "%", "#"); // "%%abc##"
F.center("abcd", 7, "%", "#"); // "%abcd##"
F.center("abcd", 7, "%", "#", true); // "%%abcd#"

"def".center(5, "$") // "$def$"
"def".center(6, "$") // "$def$$"
```

---

#### F.isJSON()

- Checked if a string is correct JSON format


- Alias:

- - "string".isJSON()

- Example

```js
F.isJSON(
  string // The string to be checked
)

F.isJSON("{'a':1}") // true
F.isJSON("{:$*!") // false
F.isJSON("{}") // true
F.isJSON("abc") // false
F.isJSON({}) // false
F.isJSON({a: 1}) // false
```

#### F.chars

- A list of different characters

- Alias:

- - None

- Example

```js
F.chars // {"letters":["a","b","c","d","e","f"...

F.chars.letters // ["a","b","c","d","e","f","g","h","i","j"...
F.chars.symbols // ["!","@","#","$","%","^","&","*","(",")"...
```

- All lists

- - Letters (a, b, c...A, B, C...)
- - Lower (a, b, c...)
- - Upper (A, B, C...)
- - Vowels (a, e, i, o, u)
- - Consonants (b, c, d, f, g...)
- - Digits (1, 2, 3, 4...)
- - Digits2 (0, 1, 2, 3...)
- - Symbols (!, @, #, $, %...)
- - All (0, 1...a, b, c...@, #, $...)
- - Cursive (𝓪, 𝓫, 𝓬, 𝓭...)
- - Regional (🇦, 🇧, 🇨, 🇩...)
- - Emoji_digits (0️⃣, 1️⃣, 2️⃣, 3️⃣)