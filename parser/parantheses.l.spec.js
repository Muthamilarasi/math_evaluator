const parserParantheses = require("./parantheses.l");

describe("parserParantheses", () => {
  it("should expose execute function", () => {
    expect(parserParantheses.parserParantheses).toBeDefined();
    expect(typeof parserParantheses.parserParantheses).toBe("function");
  });
  it("should accept a expression object and returns evaluated result", () => {
    //Arrange
    const expression = "(+";

    // Act
    const result = parserParantheses.parserParantheses(expression);
    // Assert
    expect(result).toBe();
  });
});
