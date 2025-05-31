import _ from "lodash";
import * as stringUtil from "./util/string";
import * as statsUtil from "./util/stats";
import * as numberUtil from "./util/number";
import * as g from "./generators";

/**
 * Weighted array of available character generators based on Zipf's distribution curve
 * The highter a generator is on the list, the more likely it is to be used.
 */
const generators = [
  g.getTopic,
  g.getCountry,
  g.getCelebrity,
  g.getWord,
  g.getCapital,
  g.getSize,
  g.getDate,
  g.getNumbers,
  g.getPlacement,
];

const distributionCurve = statsUtil.getZipfDistribution(generators);

/**
 * Returns a random weighted list with a random number of contents generators
 * @returns {Array<g.GeneratorFunction>}
 */
const getGenerators = (): g.GeneratorFunction[] => {
  const res: g.GeneratorFunction[] = [];
  const numPresets = numberUtil.rand(2, generators.length);

  for (let i = 0; i < numPresets; i++) {
    res.push(statsUtil.getRandomItem(generators, distributionCurve));
  }

  return _.uniq(res);
};

export class NaturalNameGenerator {
  /**
   * Generates a random filename
   * @param {string} extension The file extension e.g 'jpg'
   * @returns {string}
   */
  generate(extension: string): string {
    let seperator = g.getWordSeperator();

    const res: string[] = [];
    let ext = extension || "";

    // ext = ext.replace(".", "");

    const generators = getGenerators();

    for (let i = 0; i < generators.length; i++) {
      const generator = generators[i];
      let part = stringUtil.cleanText(
        stringUtil.dasherize(generator.call(null))
      );

      if (i < generators.length - 1) {
        part += seperator;
      }

      res.push(part);
    }

    return res.join("") + (ext ? "." + ext : "");
  }
}
