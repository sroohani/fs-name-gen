import * as arrayUtil from "./util/array";
import * as numberUtil from "./util/number";
import Moment from "moment";
import data from "./data";

const dateFormats = ["YYYY-MM-DD", "YYYYMMDD", "YYMMDD", "YYYY", "YY"];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export type GeneratorFunction = () => string;

/**
 * Random data generators.
 * Will generate anything from topics, commonly used words, names, numbers, countries, letters, dates etc.
 */
export const getTopic = (): string => {
  return arrayUtil.random(data.topics) || "";
};

export const getCapital = (): string => {
  return arrayUtil.random(data.capitals) || "";
};

export const getCelebrity = (): string => {
  return arrayUtil.random(data.celebrities) || "";
};

export const getCountry = (): string => {
  return arrayUtil.random(data.countries) || "";
};

export const getWord = (): string => {
  return arrayUtil.random(data.words) || "";
};

export const getSize = (): string => {
  return arrayUtil.random(data.sizes) || "";
};

export const getPlacement = (): string => {
  return arrayUtil.random(data.placements) || "";
};

export const getDate = (): string => {
  return Moment().format(arrayUtil.random(dateFormats) || dateFormats[0]);
};

export const getNumbers = (): string => {
  let res = "";
  const len = numberUtil.rand(2, 8);

  for (let i = 0; i < len; i++) {
    res += arrayUtil.random(numbers);
  }

  return res;
};

export const getLetters = (): string => {
  let res = "";
  const len = numberUtil.rand(2, 8);

  for (let i = 0; i < len; i++) {
    res += arrayUtil.random(letters);
  }

  return res;
};

export const getWordSeperator = (): string => {
  return arrayUtil.random(["-", "_"]) || "-";
};
