const Texts = require("../lib/text.js");

describe("Texts", () => {
  describe("Instantiate", () => {
    it("should be an instance of Texts class", () => {
      const text = new Texts();

      expect(text).toBeInstanceOf(Texts);
    });
  });
});

module.exports = Texts;
