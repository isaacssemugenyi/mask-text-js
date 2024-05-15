Mask text

![npm](https://img.shields.io/npm/v/mask-text-js)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/mask-text-js/0.1.0)
![licence (MIT)](https://img.shields.io/npm/l/mask-text-js)

### usage 
- [Usage](#usage-1)
      - [maskText](#masktext)

# Usage

#### maskText

```js
const textMask = require('mask-text-js');
// or
const { maskText } = require('mask-text-js');

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

 <!-- https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/ -->