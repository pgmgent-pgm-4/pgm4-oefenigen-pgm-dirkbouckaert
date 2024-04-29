import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind cn-function 
 * Combines clsx (conditional classes) and twMerge (merge Tailwind classes)
 * 
 * Source:
 * - https://www.znovandap.com/blog/post/cn-utility-function
 * - https://www.youtube.com/watch?v=re2JFITR7TI 
 * Installation
 * npm install -D clsx tailwind-merge
 */
export const cn = (...classes) => twMerge(clsx(classes));


/**
 * Get a random color in hexadecimal notation.
 * Source: https://css-tricks.com/snippets/javascript/random-hex-color/
 * 
 * @returns {string} a random hexadecimal color (including the # symbol)
 */
export function getRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
