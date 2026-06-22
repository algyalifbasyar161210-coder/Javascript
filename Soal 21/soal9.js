// soal 9
// Tanggal :  30 Mei 2026
// Pembuat: Muhammad Rijam Malik

const prompt = require("prompt-sync")();

let p = parseInt(prompt("Masukkan panjang: "));
let l = parseInt(prompt("Masukkan lebar: "));

let luas =  p * l;
let keliling = 2 * (p + l);
console.log("Luas :" , luas); 
console.log("keliling =", keliling);