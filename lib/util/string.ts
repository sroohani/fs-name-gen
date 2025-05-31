/**
 * Replace spaces with dashes and lowercase the result
 * @param s
 * @returns {string}
 */
export const dasherize = (s: string): string => {
  return s.replace(/[-\s]+/g, "-").toLowerCase();
};

/**
 * Only allow for alphanumeric characters
 * @param s
 * @returns {atring}
 */
export const cleanText = (s: string): string => {
  if (!s) return "";
  return s.replace(/[^a-zA-Z0-9-]/g, "");
};
