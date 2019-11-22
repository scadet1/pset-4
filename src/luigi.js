const readlineSync = require("readline-sync");

MIN = 1;
MAX = 24;
let height;
let rowLength;
let hashtagNum;

console.log();
do {
    height = Number(readlineSync.question("Height: "));
} while (height < MIN || height > MAX || Number.isNaN(height) || height != Math.floor(height));

rowLength = height + 1;
hashtagNum = 2;

console.log();

for (let x = 0; x < height; x++) {

    let print = "";
    let spaces = 1;
    let hashtags = 1;

    while (spaces <= rowLength - hashtagNum) {
        print = print + " ";
        spaces++;
    }

    while (hashtags <= hashtagNum) {
        print = print + "#";
        hashtags++;
    }

    print = print + "  ";
    spaces = 1;
    hashtags = 1;

    while (hashtags <= hashtagNum) {
        print = print + "#";
        hashtags++;
    }

    console.log(print);
    hashtagNum++;
}

console.log();
