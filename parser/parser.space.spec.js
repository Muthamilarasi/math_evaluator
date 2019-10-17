const spaces = require("./parser.space");

describe("spaces", () => {
  it("should expose execute function", () => {
    expect(spaces.space).toBeDefined();
    expect(typeof spaces.space).toBe("function");
  });
  it("should accept a expression object and returns evaluated result", () => {
    //Arrange
    const expression = " 1 2)";
    const expectedOutput = {
      result: { type: "SPACE", value: " " },
      remainder: "1 2)"
    };
    // Act
    const result = spaces.space(expression);
    // Assert
    expect(result).toMatchObject(expectedOutput);
  });
});
