const executor = require("./executor");

describe("executor", () => {
  it("should expose execute function", () => {
    expect(executor.execute).toBeDefined();
    expect(typeof executor.execute).toBe("function");
  });
  it("should accept a expression object and returns evaluated result", () => {
    //Arrange
    const expression = {
      operator: "-",
      operand: ["6", "3"]
    };
    // Act
    const result = executor.execute(expression);
    // Assert
    expect(result).toBe(3);
  });
});
