const paranthes = require("./parantheses");

describe("paranthes", () => {
  it("should expose execute function", () => {
    expect(paranthes.lParantheses).toBeDefined();
    expect(typeof paranthes.lParantheses).toBe("function");
    expect(paranthes.rParantheses).toBeDefined();
    expect(typeof paranthes.rParantheses).toBe("function");
  });
  it("should accept a expression object and returns evaluated result", () => {
    //Arrange
    const expression = "(+ 1 2)";
    const expectedOutput = {
      result: { type: "LPARAN", value: "(" },
      remainder: "+ 1 2)"
    };
    // Act
    const result = paranthes.lParantheses(expression);
    // Assert
    expect(result).toMatchObject(expectedOutput);
  });
  it("should accept a expression object and returns evaluated result", () => {
    //Arrange
    const expression = ")";
    const expectedOutput = {
      result: { type: "RPARAN", value: ")" },
      remainder: ""
    };
    // Act
    const result = paranthes.rParantheses(expression);
    // Assert
    expect(result).toMatchObject(expectedOutput);
  });
});
