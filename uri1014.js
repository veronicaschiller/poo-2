var input = require('fs').readFileSync('valores.txt', 'utf8');
var lines = input.split('\n');
 const  km = +lines[0];
 const gas = +lines[1];

 const valor = km  / gas 

 console.log(`${valor.toFixed(3)} km/l`);