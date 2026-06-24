// soal 9
// Tanggal :  23 juni 2026
// Pembuat : Algy Alif Basyar

const prompt = require("prompt-sync")();

let p = parseInt(prompt("Masukkan panjang: "));
let l = parseInt(prompt("Masukkan lebar: "));

let luas =  p * l;
let keliling = 2 * (p + l);
console.log("Luas :" , luas); 
console.log("keliling =", keliling);