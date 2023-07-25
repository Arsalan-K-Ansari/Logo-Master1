const Shape = require("../assets/Shape");
const Triangle = require("../assets/Triangle");

describe("Triangle", () => {
  describe("render", () => {
    it("should render a red Triangle with white text", () => {
      const text = "TRD";
      const textColor = "white";
      const shapeColor = "red";

      const shape = new Triangle(text, textColor, shapeColor);

      expect(shape.render()).toContain(
        `<polygon points="50 15, 100 100, 0 100" fill="${shapeColor}" />`
      );
    });
  });
});
