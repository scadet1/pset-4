const readlineSync = require("readline-sync");

MIN = 0;
MAX = Number.MAX_SAFE_INTEGER;
let nonNegativeInteger;
let sumOfDigits = 0;
let digit = 0;
let lastDigit = 0;
let digitsTester = 0;
let primeTester;

console.log();
do {
    nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
} while (nonNegativeInteger < MIN || nonNegativeInteger > MAX || Number.isNaN(nonNegativeInteger) || nonNegativeInteger != Math.floor(nonNegativeInteger));

for (let x = 2; x <= (nonNegativeInteger/2); x++) {
    if (nonNegativeInteger % x == 0) {
        primeTester = 1;
    }
}

if (nonNegativeInteger == 0) {
    console.log("\nNot prime.");
} else if (primeTester == 1) {
    console.log("\nNot prime.");
} else {
    console.log("\nPrime.");
}

console.log();
