var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const nome = linha.shift();
const salario = parsefloat(linha.shift());
const vendas = parsefloat(linha.shift());

const comissao = vendas * 0.15;
const salariofinal = salario + comissao;

console.log("TOTAL = R$ "+ salariofinal.tofixed(2));