const prompt = require('prompt-sync')();

const dose1 = Number(prompt("nph: "));
const complemento = Number(prompt("complemento: "));
const dose2 = Number(prompt("lispro: "));


let soma = dose1 + complemento ;
let total = soma + dose2 ;

console.log("-".repeat(10));
console.log(`valor total de insulina: ${total}`);
