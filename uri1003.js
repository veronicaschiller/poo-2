
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n')

const number1 = +lines[0];
const number2 = +lines[1];

var result = number1 + number2;

console.log("soma = ",result)