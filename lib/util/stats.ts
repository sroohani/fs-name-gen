import * as numberUtil from "./number";

/**
 * Accepts an array and returns the distribution curve based on Zipf's law
 * Essentially, this means that the item at level n has double the weight as item n+1
 * https://en.wikipedia.org/wiki/Zipf%27s_law
 *
 * @param {Array<T>} a Input array
 * @returns {Array<T>}
 */
export const getZipfDistribution = <T>(a: T[]): number[] => {
  const res = Array<number>(a.length);

  for (var i = 0; i < a.length; i++) {
    res[i] = 1 / (i + 1);
  }

  return res;
};

/**
 * Returns a random element from an Array based on a distribution curve
 * @param {Array<T>} list The Array to pick from
 * @param {Array<number>} weight Array of numbers e.g [1, 0.5, 0.33, 0.1666]
 * @returns {T}
 */
export const getRandomItem = <T>(list: T[], weight: number[]): T => {
  const totalWeight = weight.reduce((prev: number, cur: number): number => {
    return prev + cur;
  });

  const randomNum = numberUtil.rand(0, totalWeight);
  let weightSum = 0;
  let res: T | undefined = undefined;

  for (let i = 0; i < list.length; i++) {
    weightSum += weight[i];
    weightSum = +weightSum.toFixed(2);

    if (randomNum <= weightSum) {
      res = list[i];
      break;
    }
  }

  if (!res) {
    return getRandomItem(list, weight);
  }

  return res;
};
