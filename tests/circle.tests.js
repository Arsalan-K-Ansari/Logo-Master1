const Shape = require("../assets/Shape");
const Circle = require("../assets/Circle.js");

describe("Circle", () => {
  describe("render", () => {
    it("should render a blue circle with white text", () => {
      const text = "duh";
      const textColor = "white";
      const shapeColor = "blue";

      const shape = new Circle(text, textColor, shapeColor);

      expect(shape.render()).toContain(
        `<circle cx="100" cy="100" r="80" fill="${shapeColor}" />`
      );
    });
  });
});
