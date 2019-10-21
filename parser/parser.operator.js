const operator = value => {
  if (value[0] == "+") {
    return {
      result: {
        type: "OPERAND",
        value: value[0]
      },
      remainder: value.slice(1)
    };
  } else if (value[0] == "-") {
    return {
      result: {
        type: "OPERAND",
        value: value[0]
      },
      remainder: value.slice(1)
    };
  } else if (value[0] == "*") {
    return {
      result: {
        type: "OPERAND",
        value: value[0]
      },
      remainder: value.slice(1)
    };
  } else if (value[0] == "/") {
    return {
      result: {
        type: "OPERAND",
        value: value[0]
      },
      remainder: value.slice(1)
    };
  }
};

console.log(operator("- 1 2)"));

module.exports = {
  operator
};
