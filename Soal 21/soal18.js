// soal 18
// Tanggal :  24 juni 2026
// Pembuat : Algy Alif Basyar

const prompt = require("prompt-sync")();

let angka = prompt("Masukkan angka: ");

if (angka % 7 == 0) {
    console.log("bilangan merupakan kelipatan 7");
} else {
    console.log("Anda belum beruntung");
}