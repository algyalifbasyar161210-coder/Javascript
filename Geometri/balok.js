const prompt = require("prompt-sync")({signit: true});

// Volume balok
console.log("=== Volume Balok ===");
let p = parseFloat(prompt("Masukkan panjang balok: "));
let t = parseFloat(prompt("Masukkan tinggi balok: "));
let l = parseFloat(prompt("Masukkan lebar balok: "));
let v = p * t * l;
console.log("Volume balok adalah: " + v);

// Luas permukaan balok
console.log("\n=== Luas Permukaan Balok ===");
let panjang = parseFloat(prompt("Masukkan panjang balok: "));
let tinggi = parseFloat(prompt("Masukkan tinggi balok: "));
let lebar = parseFloat(prompt("Masukkan lebar balok: "));
let lp = 2 * ((panjang * tinggi) + (panjang * lebar) + (lebar * tinggi));
console.log("luas permukaan balok adalah: " + lp);

// Keliling balok
console.log("\n=== Keliling Balok ===");
let pjg = parseFloat(prompt("Masukkan panjang balok: "));
let tgi = parseFloat(prompt("Masukkan tinggi balok: "));
let lbr = parseFloat(prompt("Masukkan lebar balok: "));
let keliling = 4 * (pjg + tgi + lbr);
console.log("luas permukaan balok adalah: " + keliling);