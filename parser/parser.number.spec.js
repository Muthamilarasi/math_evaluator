const number = require("./parser.number");

describe("number", () => {
  it("should expose execute function", () => {
    expect(number.number).toBeDefined();
    expect(typeof number.number).toBe("function");
  });
  it("should accept a expression object and returns evaluated result", () => {
    //Arrange
    const expression = "1 2)";
    const expectedOutput = {
      result: { type: "NUMBER", value: "1" },
      remainder: " 2)"
    };
    // Act
    const result = number.number(expression);
    // Assert
    expect(result).toMatchObject(expectedOutput);
  });
});
