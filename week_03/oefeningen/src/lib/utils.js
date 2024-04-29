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
 * Sort students by first name
 * @param {array} students 
 */
export const sortStudentsByFirstName = (students) => {
  return students.sort((a, b) => {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  });

}