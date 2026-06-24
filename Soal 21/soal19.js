// soal 19
// Tanggal :  24 juni 2026
// Pembuat : Algy Alif Basyar

const prompt = require("prompt-sync")();

let x = parseInt(prompt("Masukkan nilai X : "));
let y = parseInt(prompt("Masukkan nilai Y : "));
let z = parseInt(prompt("Masukkan nilai Z : "));

let terbesar = x;
let terkecil = x;

if (y > terbesar) {
    terbesar = y;
}
if (z > terbesar) {
    terbesar = z
}


if (y < terkecil) {
    terkecil = y
}
if (z < terkecil) {
    terkecil = z
}

console.log("Nilai terbesar =", terbesar);
console.log("Nilai terkecil =", terkecil);