Transforming an array of objects with duplicate objects into single objects with an array of duplicate data as elements of objects

![npm](https://img.shields.io/npm/v/mask-text)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/mask-text/0.1.0)
![licence (MIT)](https://img.shields.io/npm/l/mask-text)

### usage 
- [Usage](#usage-1)
      - [maskText](#masktext)

# Usage

#### maskText

```js
const textMask = require('mask-text');
// or
const { maskText } = require('mask-text');

// Text to mask
const originalText = "johndoe@example.com";

// Percentage of text to unmask
const unmaskTextPercentage = 20;

const result = maskText(
  originalText,
  unmaskTextPercentage
);

console.log(result);

//Output

"johxxxxxxxxxxxxxcom"
```