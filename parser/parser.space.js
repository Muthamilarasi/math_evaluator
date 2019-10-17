const space = string => {
  if ((string[0] = " ")) {
    return {
      result: {
        type: "SPACE",
        value: string[0]
      },
      remainder: string.slice(1)
    };
  }
};

console.log(space(" 1 2)"));

module.exports = {
  space
};
