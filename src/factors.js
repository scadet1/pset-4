const readlineSync = require("readline-sync");

MIN = 1;
MAX = Number.MAX_SAFE_INTEGER;
let posInteger;
let otherFactor = 0;
let print = "";

console.log();
do {
    posInteger = Number(readlineSync.question("Positive integer: "));
} while (posInteger < MIN || posInteger > MAX || Number.isNaN(posInteger) || posInteger != Math.floor(posInteger));

for (let x = 1; x <= (Math.sqrt(posInteger)); x++) {
    if (posInteger % x == 0) {
        otherFactor = posInteger / x;

        if (x == 1) {
            if (Math.pow(x, 2) == posInteger) {
                x = String(x);
                print = print + x;
                x = Number(x);
                x = posInteger;
            } else if (x == otherFactor) {
                x = String(x);
                print = print + x;
                x = Number(x);
                x = posInteger;
            } else {
                otherFactor = String(otherFactor);
                print = print + x + ", " + otherFactor;
            }

        } else {
            print = print + ", ";

            if (Math.pow(x, 2) == posInteger) {
                x = String(x);
                print = print + x;
                x = Number(x);
                x = posInteger;
            } else if (x == otherFactor) {
                x = String(x);
                print = print + x;
                x = Number(x);
                x = posInteger;
            } else {
                otherFactor = String(otherFactor);
                print = print + x + ", " + otherFactor;
            }
        }
    }
}

console.log("\n" + print + ".");

console.log();
