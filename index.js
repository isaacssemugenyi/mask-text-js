/**
 * @function maskText
 * @param { text, unmaskedTextPercentage}
 * @description text: Text to be masked
 * @example johndoe@gmail.com
 * @description unmaskedTextPercentage: the percent of text to be left unmasked, default is 10%
 * @example 20
 * @returns text
 * @example johxxxxxxxxxxxcom
 */

const maskText = (text, unmaskedTextPercentage = 10) => {
  if (typeof text !== 'string') {
    throw new Error('Text can only be a string johndoe@gmail.com');
  }

  if (
    typeof unmaskedTextPercentage !== 'number' ||
    unmaskedTextPercentage < 0 ||
    unmaskedTextPercentage > 100
  ) {
    throw new Error(
      'Percentage can only be a number from 0 to 100'
    );
  }

  let textValueArray = [...text];
  const lengthNumber = Math.trunc((text.length / 100) * unmaskedTextPercentage);
  textValueArray.fill('x', lengthNumber, textValueArray.length - lengthNumber);
  return textValueArray.join('');
};

module.exports = {
  maskText,
};
