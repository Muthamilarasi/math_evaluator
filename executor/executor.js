/*
@type data: OBJECT = {
  operator: '+' | '-' | '*' | '/' | '%'
  operand: NUMBER[]
}
*/
const execute = data => {
  if (data.operator == "+") {
    return data.operand
      .map(e => parseInt(e))
      .reduce((accumulator, value) => accumulator + value, 0);
  } else if (data.operator == "*") {
    return data.operand
      .map(e => parseInt(e))
      .reduce((accumulator, value) => accumulator * value, 1);
  } else if (data.operator == "-") {
    return data.operand
      .map(e => parseInt(e))
      .reduce((accumulator, value) => accumulator - value);
  } else if (data.operator == "/") {
    return data.operand
      .map(e => parseInt(e))
      .reduce((accumulator, value) => accumulator / value);
  }
  return data;
};

console.log(execute({ operator: "-", operand: ["5"] }));

module.exports = {
  execute
};
