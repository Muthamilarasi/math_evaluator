const lParantheses = value => {
  if (value[0] == "(") {
    return {
      result: {
        type: "LPARAN",
        value: value[0]
      },
      remainder: value.slice(1)
    };
  }

  throw console.error("this syntax is invalid");
};

console.log(lParantheses("(+ 1 2)"));

const rParantheses = value => {
  if (value[0] == ")") {
    return {
      result: {
        type: "RPARAN",
        value: value[0]
      },
      remainder: ""
    };
  }

  throw console.error("this syntax is invalid");
};

console.log(rParantheses(")"));

module.exports = {
  lParantheses,
  rParantheses
};
