var input = require('fs').readFileSync('valores.txt', 'utf8');
var lines = input.split('\n');

const totalNumbers = lines.shift( );
for(let i = 0; i < totalNumbers ; i++){
  //const Number = lines.shift( ).split(" ");//
  let totalLeds = 0;
  const numberString = lines.shift( ).split( );
  for(let i = 0; i < numberString.length; i++){
    switch(numberString[i]){
      case "1":
        totalLeds += 2;
        break;
        case "2":
          totalLeds += 5;
          break;
        case "3":
          totalLeds += 5;
          break;
        case "4":
          totalLeds += 4;
          break;
        case "5":
          totalLeds += 5;
          break;
        case "6":
          totalLeds += 6;
          break;
        case "7":
          totalLeds += 3;
          break;
        case "8":
          totalLeds += 7;
          break;
        case "9":
          totalLeds += 6;
          break;
        case "0":
          totalLeds += 6;
          break;
    }

  }
  console.log(`${totalLeds} leds`)
}