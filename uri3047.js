var input = require('fs').readFileSync('valores.txt', 'utf8');
var lines = input.split('\n');

const Idade1 =+lines[0];
const Idade2 =+lines[1];
const Idade3 =+lines[2];

const Idade4 = Idade1 - (Idade2 + Idade3);

let maiorIdade = 0;

if(Idade2 > Idade3 && Idade2 > Idade4) {
maiorIdade = Idade2
}
if(Idade3 > Idade2 && Idade3 > Idade4){
  maiorIdade = Idade3;
  }
if(Idade4 > Idade3 && Idade4 > Idade2){
  maiorIdade = Idade4;
  }

console.log(maiorIdade);
