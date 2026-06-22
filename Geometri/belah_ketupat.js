const prompt = require("prompt-sync")({signit: true});

// Luas belah ketupat 
console.log("=== luas belah ketupat ===");
let d1 = parseFloat(prompt("Masukkan diagonal 1: "));
let d2 = parseFloat(prompt("Masukkan diagonal 2: "));
let luas = 1/2 * d1 * d2;
console.log("luas belah ketupat adalah: " + luas);

// Keliling belah ketupat 
console.log("\n=== keliling belah ketupat ===");
let s = parseFloat(prompt("Masukkan panjang sisi: "));
let keliling = 4 * s;
console.log("luas belah ketupat adalah: " + keliling);