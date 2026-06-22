const prompt = require("prompt-sync")();

let angka = parseInt(prompt("Masukkan angka: "));

if(angka > 0) {
    if(angka % 4 === 0) {
        console.log("Bilangan kelipatan 4");
    } else {
        console.log("bukan bilangan kelipatan 4");
    }
} else {
    console.log("Bukan bilangan positif")
}