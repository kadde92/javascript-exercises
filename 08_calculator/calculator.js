const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function ([...a]) {
  const sumFunc = a.reduce(function (total, next) {
    return total + next
  }, 0);
  return sumFunc;
};

const multiply = function ([...a]) {
  const sumFunc = a.reduce(function (total, next) {
    return total * next
  }, 1);
  return sumFunc;
};

const power = function (a,b) {
  return a**b
};

const factorial = function (num) {
  if (num === 0 || num === 1)
  return 1;
for (let i = num - 1; i >= 1; i--) {
  num *= i;
}
return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
