const readlineSync = require("readline-sync");

MIN = 1;
MAX = Number.MAX_SAFE_INTEGER;
let posInteger;
let sum = 0;
let digit;

console.log();
do {
    posInteger = Number(readlineSync.question("Positive integer: "));
} while (posInteger < MIN || posInteger > MAX || Number.isNaN(posInteger) || posInteger != Math.floor(posInteger));

while (posInteger > 0) {
    digit = posInteger % 10;
    posInteger = Math.floor(posInteger/10);
    switch (digit) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
          sum += digit;
          break;
        default:
          sum += 0;
          break;
    }
}

console.log("\n" + sum + ".");

console.log();
