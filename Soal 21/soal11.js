// soal 11
// Tanggal :  23 juni 2026
// Pembuat :  Algy Alif Basyar

const prompt = require("prompt-sync")();

let rpl1 = parseInt(prompt("Masukkan jumlah siswa kelas X-RPL 1: "));
let rpl2 = parseInt(prompt("Masukkan jumlah siswa kelas X-RPL 2: "));
let tkj1 = parseInt(prompt("Masukkan jumlah siswa kelas X-TKJ 1: "));
let tkj2 = parseInt(prompt("Masukkan jumlah siswa kelas X-TKJ 2: "));

let total = rpl1 + rpl2 + tkj1 + tkj2;
console.log("Total siswa adalah :", total);