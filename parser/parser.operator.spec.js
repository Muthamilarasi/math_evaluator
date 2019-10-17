const operators = require("./parser.operator");

describe("operators", () => {
  it("should expose execute function", () => {
    expect(operators.operator).toBeDefined();
    expect(typeof operators.operator).toBe("function");
  });
  it("should accept a expression object and returns evaluated result", () => {
    //Arrange
    const expression = "+ 1 2)";
    const expectedOutput = {
      result: { type: "OPERAND", value: "+" },
      remainder: " 1 2)"
    };
    // Act
    const result = operators.operator(expression);
    // Assert
    expect(result).toMatchObject(expectedOutput);
  });
  it("should accept a expression object and returns evaluated result", () => {
    //Arrange
    const expression = "- 1 2)";
    const expectedOutput = {
      result: { type: "OPERAND", value: "-" },
      remainder: " 1 2)"
    };
    // Act
    const result = operators.operator(expression);
    // Assert
    expect(result).toMatchObject(expectedOutput);
  });
  it("should accept a expression object and returns evaluated result", () => {
    //Arrange
    const expression = "* 1 2)";
    const expectedOutput = {
      result: { type: "OPERAND", value: "*" },
      remainder: " 1 2)"
    };
    // Act
    const result = operators.operator(expression);
    // Assert
    expect(result).toMatchObject(expectedOutput);
  });
  it("should accept a expression object and returns evaluated result", () => {
    //Arrange
    const expression = "/ 1 2)";
    const expectedOutput = {
      result: { type: "OPERAND", value: "/" },
      remainder: " 1 2)"
    };
    // Act
    const result = operators.operator(expression);
    // Assert
    expect(result).toMatchObject(expectedOutput);
  });
});
