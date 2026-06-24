const prompt = require('prompt-sync')();

let jarak = Number(prompt("Masukkan jarak dalam cm:"));

let km = Math.floor(jarak / 100000);
jarak = jarak % 100000;

let m = Math.floor(jarak / 100);
let cm = jarak % 100;

console.log(km + " km + " + m + " m + " + cm + " cm");