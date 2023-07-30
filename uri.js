var input = require('fs').readFileSync('valores.txt', 'utf8');
var lines = input.split('\n');
let contador = 0;
const palavra = lines[0];
palavra.toLowerCase;
for (let i = 0; i < palavra.length; i++) {
  if (palavra[i] != ' ') {
    contador++;
  }
}
if (contador >= 10) {
  console.log('palavrao');
} else {
  console.log('palavrinha');
}
