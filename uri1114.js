var input = require('fs').readFileSync('valores.txt', 'utf8');
var lines = input.split('\n');

lines = [2200, 1020, 2022, 2002]
for (let i = 0; i < lines.length; i++) {
if(2002 == lines[i]){
  console.log('Acesso Liberado')

}else{
  console.log('senha invalida');
}
};