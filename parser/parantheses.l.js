const parserParantheses = value => {
  const string = value;
  const split = string.split("");

  //console.log("split", split);

  if (split[0] == "(") {
    if (split[1] == "+") {
      return {
        result: {
          type: "LPARAN",
          value: split[0]
        },
        remainder: split[1]
      };
    } else if (split[1] == "-") {
      return {
        result: {
          type: "LPARAN",
          value: split[0]
        },
        remainder: split[1]
      };
    } else if (split[1] == "*") {
      return {
        result: {
          type: "LPARAN",
          value: split[0]
        },
        remainder: split[1]
      };
    } else if (split[1] == "/") {
      return {
        result: {
          type: "LPARAN",
          value: split[0]
        },
        remainder: split[1]
      };
    }
    return {
      result: {
        type: "LPARAN",
        value: split[0]
      },
      remainder: ""
    };
  }
  throw console.error("this syntax is invalid");
};

console.log(parserParantheses(")))"));

module.exports = {
  parserParantheses
};
