const Shape = require("../assets/Shape");
const Square = require("../assets/Square.js");

describe("Square", () => {
  describe("render", () => {
    it("should render a yellow square with white text", () => {
      const text = "BOB";
      const textColor = "white";
      const shapeColor = "yellow";

      const shape = new Square(text, textColor, shapeColor);

      expect(shape.render()).toContain(
        `<rect width="160" height="160" fill="${shapeColor}" />`
      );
    });
  });
});
