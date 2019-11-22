const readlineSync = require("readline-sync");

MIN = 1;
MAX = Number.MAX_SAFE_INTEGER;
let posInteger;
let reverse = "";
let digit;

console.log();
do {
    posInteger = Number(readlineSync.question("Positive integer: "));
} while (posInteger < MIN || posInteger > MAX || Number.isNaN(posInteger) || posInteger != Math.floor(posInteger));

while (posInteger !== 0) {
    digit = posInteger % 10;
    posInteger = Math.floor(posInteger/10);
    if (posInteger !== 0) {
        reverse = reverse + digit + ", ";
    } else {
        reverse = reverse + digit + ".";
    }
}

console.log("\n" + reverse);

console.log();
