const prompt = require("proomt-sync")();

let a = parseInt(prompt("masukan bilangan pertama"));
let b = parseInt(prompt("masukan bilangan kedua"));
let c = parseInt(prompt("masukan bilangan ketiga"));

if (a > b) {
    temp = a;
    a = b;
    b = temp;
}

if (a > c) {
    temp = a;
    a = c;
    c = temp;
}

if (b > c) {
    temp = b;
    b = c;
    c = temp;
}

console.log("urutan naik");
console.log(a, b, c);