var input = require('fs').readFileSync('valores.txt', 'utf8');
var lines = input.split('\n');

const totalLines = +lines.shift();
let carrinhos = 0;
let bonecas = 0;
for (let i = 0; i < totalLines; i++) {
  if (lines.shift().split('  ')[1] === ' F ') {
    bonecas++;
  } else {
    carrinhos++;
  }
}
console.log(`${carrinhos} carrinhos`);
console.log(`${bonecas} bonecas`);
