import { randInt } from "./number";
/**
 * Shuffles an array
 * @param {Array<T>} a The array to be shuffled
 */
export const shuffle = <T>(a: T[]) => {
  if (!a) {
    return;
  }

  let randIdx: number;
  let temp: T;
  for (let i = 0; i < a.length; ++i) {
    randIdx = randInt(i + 1, a.length);
    temp = a[i];
    a[i] = a[randIdx];
    a[randIdx] = temp;
  }

  return;
};

/**
 * Returns a random element from a Array
 * @param {Array<T>} a
 * @returns {T|null}
 */
export const random = <T>(a: T[]): T | null => {
  if (!a) {
    return null;
  }
  return a[randInt(0, a.length)];
};
