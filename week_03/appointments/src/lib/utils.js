import clsx from "clsx";
import { twMerge } from "tailwind-merge";


/**
 * Tailwind utility to write conditional classNames without conflicts
 * It combines twMerge and clsx
 * 
 * Source:
 * - https://www.znovandap.com/blog/post/cn-utility-function
 * - https://www.youtube.com/watch?v=re2JFITR7TI 
 *
 * Installation:
 * npm install clsx tailwind-merge
 */
export const cn = (...classes) => twMerge(clsx(classes));

/**
 * Sort appointments by date
 */
export const sortByDate = (appointments) => {
  return appointments.sort((a, b) => new Date(a.aptDate) - new Date(b.aptDate));
}