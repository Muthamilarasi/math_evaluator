const number = value => {
  const rx = new RegExp(/[\d+\s]+/);
  if (rx.test(value)) {
    return {
      result: {
        type: "NUMBER",
        value: value[0]
      },
      remainder: value.slice(1)
    };
  }
};

console.log(number("1 2)"));

module.exports = {
  number
};
