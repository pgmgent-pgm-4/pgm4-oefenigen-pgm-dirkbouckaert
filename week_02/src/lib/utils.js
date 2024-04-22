/**
 * Get a random color in hexadecimal notation.
 * Source: https://css-tricks.com/snippets/javascript/random-hex-color/
 * 
 * @returns {string} a random hexadecimal color (including the # symbol)
 */
export function getRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export function checkColor(color) {
  if (color == '#ffffff' || color.length !== 7) {
    color = getRandomHexColor();
    return checkColor(color);
  }
  return color;
}