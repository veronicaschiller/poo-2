var input = require('fs').readFileSync('valores.txt', 'utf8');
var lines = input.split('\n');
/*const valor1 = +lines[0];
const valor2 = +lines[1];
const valor3 = +lines[2];
const valor4 = +lines[3];
const valor5 = +lines[4];
let par = 0;
let impar = 0


  if(valor1 % 1 === 0){
impar++
  }else if(valor2 % 2 === 0){
    par++
  }else if(valor3 % 1 === 0){
    impar++
  }  else if(valor4 % 2 === 0){
    par++
  }else if(valor5 % 1 === 0){
    impar++
  }
  const total = par - impar

  console.log(`${total} valores pares`) */
  let par = 0

  for(let i = 0; i <lines.length; i++){
    if(lines[i] % 2 === 0){
par++
    }
  }
console.log(`${par} valores pares`)
