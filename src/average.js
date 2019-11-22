const readlineSync = require("readline-sync");

MIN = 0;
MAX = Number.MAX_SAFE_INTEGER;
let nonNegativeInteger;
let numOfIntegersEntered = 0;
let sum = 0;
let average = 0;

console.log();
do {
    nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
    if (nonNegativeInteger >= MIN && nonNegativeInteger < MAX) {
        numOfIntegersEntered++;
        sum += nonNegativeInteger;
    }
} while ((nonNegativeInteger >= MIN && nonNegativeInteger < MAX) || nonNegativeInteger > MAX || Number.isNaN(nonNegativeInteger) || sum == 0);

average = sum/numOfIntegersEntered;

average = average.toLocaleString("en", {minimumFractionDigits: 3, maximumFractionDigits: 3 });
console.log("\n" + average + ".");

console.log();
