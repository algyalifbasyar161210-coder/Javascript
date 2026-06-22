// soal 16
// Tanggal :  30 Mei 2026
// Pembuat: Muhammad Rijam Malik

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