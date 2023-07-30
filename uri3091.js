var input = require('fs').readFileSync('valores.txt', 'utf8');
var lines = input.split('\n');
let contador = 0;
let contador2 = 0;
const valor = +lines[0];

for(let  i = 0; i < lines.length; i++) {
contador++;
}
if(valor === contador) {
  for(let i= 0; i < lines.length; i++) {
  contador2 ++
  console.log(contador2)
  }
  
}




