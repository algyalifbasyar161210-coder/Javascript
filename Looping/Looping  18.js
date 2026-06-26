const prompt = require("prompt-sync")();

let angka = parseInt(prompt("Masukkan angkanya: "));

for(let i = 1; i <= 10; i++) {
    console.log(`${angka} x ${i} = ${angka * i}`);
}