type IText = string;
type IPercentage = number;

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
export declare function maskText(
  text: IText,
  unmaskedTextPercentage: IPercentage
): IText;