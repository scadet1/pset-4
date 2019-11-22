const readlineSync = require("readline-sync");

const MIN = 1000000000000;
const MAX = 9999999999999999;

let creditCardNumber;
let creditCardNumberEvenDigit;
let creditCardNumberOddDigit;
let everyOtherDigit = 0;
let everyOtherDigitFloor = 0;
let everyOtherDigitSum = 0;
let everyOtherDigitFirst = 1;
let everyOtherDigitSecond = 0;
let everyOtherDigitTotal = 0;
let everyOtherDigitOdd = 0;
let everyOtherDigitOddSum = 0;
let sumOfAllDigits = 0;
let firstDigitsStart = 0;
let firstDigitsStartVisa = 0;
let isValid = true;
let cardNumberLength = 0;

console.log();
do {
    creditCardNumber = Number(readlineSync.question("Number: "));
} while (creditCardNumber < MIN || creditCardNumber > MAX || Number.isNaN(creditCardNumber) || creditCardNumber != Math.floor(creditCardNumber));

creditCardNumberEvenDigit = creditCardNumber;
creditCardNumberOddDigit = creditCardNumber;
creditCardNumber = String(creditCardNumber);
cardNumberLength = creditCardNumber.length;

while (creditCardNumberEvenDigit > 0) {
    everyOtherDigit = creditCardNumberEvenDigit % 100;
    everyOtherDigitFloor = Math.floor(everyOtherDigit * 0.1);
    everyOtherDigitSum = everyOtherDigitFloor * 2;
    if (everyOtherDigitSum >= 10) {
        everyOtherDigitSecond = everyOtherDigitSum % 10;
        everyOtherDigitTotal = everyOtherDigitTotal + everyOtherDigitFirst + everyOtherDigitSecond;
    } else {
        everyOtherDigitTotal = everyOtherDigitTotal + everyOtherDigitSum;
    }
    creditCardNumberEvenDigit = Math.floor(creditCardNumberEvenDigit/100);
}

while (creditCardNumberOddDigit > 0) {
    everyOtherDigitOdd = creditCardNumberOddDigit % 10;
    everyOtherDigitOddSum = everyOtherDigitOddSum + everyOtherDigitOdd;
    creditCardNumberOddDigit = Math.floor(creditCardNumberOddDigit/100);
}

sumOfAllDigits = everyOtherDigitTotal + everyOtherDigitOddSum;

if (sumOfAllDigits % 10 === 0) {
    isValid = true;
} else {
    isValid = false;
}

if (cardNumberLength == 15) {
    firstDigitsStart = Math.floor(creditCardNumber/10000000000000);
} else if (cardNumberLength == 16) {
    firstDigitsStart = Math.floor(creditCardNumber/100000000000000);
    firstDigitsStartVisa = Math.floor(creditCardNumber/1000000000000000);
} else if (cardNumberLength == 13) {
    firstDigitsStart = Math.floor(creditCardNumber/1000000000000);
} else {
    isValid = false;
}

if (isValid === false) {
    console.log("\nInvalid.");
} else if (cardNumberLength == 15 && (firstDigitsStart == 34 || firstDigitsStart == 37)){
    console.log("\nAmex.");
} else if (cardNumberLength == 16 && (firstDigitsStart == 51 || firstDigitsStart == 52 || firstDigitsStart == 53 || firstDigitsStart == 54 || firstDigitsStart == 55)) {
    console.log("\nMastercard.");
} else if ((cardNumberLength == 13 && firstDigitsStart == 4) || (cardNumberLength == 16 && firstDigitsStartVisa == 4)) {
    console.log("\nVisa.");
} else {
    console.log("\nInvalid.");
}

console.log();
