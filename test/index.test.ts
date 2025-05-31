import { NaturalNameGenerator } from "../lib/index";

describe("Natural filename generator", () => {
  let generator: NaturalNameGenerator;

  beforeAll((done) => {
    generator = new NaturalNameGenerator();
    done();
  });

  describe("generate", () => {
    it("should instantiate", (done) => {
      expect(generator).toBeInstanceOf(NaturalNameGenerator);
      done();
    });

    it("should generate 100 names", (done) => {
      var res: string[] = [];

      for (var i = 0; i < 100; i++) {
        res.push(generator.generate("jpg"));
      }

      expect(res.length).toBe(100);
      done();
    });
  });
});
