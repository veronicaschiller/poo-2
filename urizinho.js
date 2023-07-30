var input = require('fs').readFileSync('valores.txt', 'utf8');
var lines = input.split('\n');

const valor1 = +lines[0];
const valor2 = +lines[1];

const valor = valor1 / valor2 -1;

console.log(valor.toFixed());