// soal 16
// Tanggal :  24 juni 2026
// Pembuat : Algy Alif Basyar

const prompt = require("prompt-sync")();

let angka = prompt("Masukkan juara (1)(2)(3): ");

if (angka == 1) {
    console.log("Selamat Anda Juara Utama");
} else if (angka == 2) {
    console.log("Selamat Anda Runner Up");
} else if (angka == 3) {
    console.log("selamat Anda Juara Ketiga");
} else {
    console.log("Inputan anda salah !");
}