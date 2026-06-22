const prompt = require("prompt-sync")();

const angka = parseInt(prompt("Masukkan angka: "))

if(angka > 0) {
    console.log("Bilangan Positif");
} else if(angka < 0) {
    console.log("Bilangan Negatif");
} else {
    console.log("Bilangan Nol");
}