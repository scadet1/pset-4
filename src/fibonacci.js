const readlineSync = require("readline-sync");

MIN = 1;
MAX = 78;
let fibonacciNumCounter;
let firstNum = 1;
let secondNum = 1;
let thirdNum = 0;
let counter = 0;

console.log();
do {
    fibonacciNumCounter = Number(readlineSync.question("Positive integer: "));
} while (fibonacciNumCounter < MIN || fibonacciNumCounter > MAX || Number.isNaN(fibonacciNumCounter) || fibonacciNumCounter != Math.floor(fibonacciNumCounter));

counter = fibonacciNumCounter;

while (counter > 2) {
    thirdNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = thirdNum;
    counter--;
}

firstNum = 1;
secondNum = 1;
thirdNum = thirdNum.toLocaleString("en");

if (fibonacciNumCounter == 1) {
    console.log("\n" + firstNum + ".");
} else if (fibonacciNumCounter == 2) {
    console.log("\n" + secondNum + ".");
} else {
    console.log("\n" + thirdNum + ".");
}

console.log();
