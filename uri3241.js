var input = require('fs').readFileSync('valores.txt', 'utf8');
var lines = input.split('\n');
lines.shift();
for (let i = 0; i < lines.length; i++) {
  let parts = lines[i].split('+');
  let n1 = +parts[0];
  let n2 = +parts[1];
  let soma = n1 + n2;
  if (lines[i] <= 'n') {
    console.log(soma);
  } else {
    console.log('skipped');
  }
}
