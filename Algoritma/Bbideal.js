const prompt = require("prompt-synt")();

let beratAktual = parseInt(prompt("Masukan berat badan Aktual: "));
let beratIdeal =  parseInt(prompt("Masukan berat badan Ideal"));

let selisih = Math.abs(beratAktual - beratIdeal);

if (selisih <= 2) {
    console.log("Berat badan Ideal")
} else {
    console.log("Berat badan tidak Ideal")
}