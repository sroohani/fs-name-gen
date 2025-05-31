/**
 * Returns a random integer number between min and max
 * @param {number} min The lower bound of the range
 * @param {number} max The upper bound of the range
 * @param {boolean} maxInclusive Whether or not the upper bound should be inclusive
 * @returns {number}
 */
export const randInt = (
  min: number,
  max: number,
  maxInclusive: boolean = false
) => {
  return Math.floor(Math.random() * (max - min + (maxInclusive ? 1 : 0)) + min);
};

/**
 * Returns a random number between min and max
 * @param {number} min The lower bound of the range
 * @param {number} max The upper bound of the range
 * @param {boolean} maxInclusive Whether or not the upper bound should be inclusive
 * @returns {number}
 */
export const rand = (
  min: number,
  max: number,
  maxInclusive: boolean = false
): number => {
  return Math.random() * (max - min + (maxInclusive ? 1 : 0)) + min;
};
