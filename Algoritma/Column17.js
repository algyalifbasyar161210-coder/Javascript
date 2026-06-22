const prompt = require("prompt-sync")();

let nama = prompt("Masukkan Nama Karyawan: ");
let golongan = prompt("Masukkan Jenis Golongan (A/B/C/D): ").toUpperCase();
let jam = parseInt(prompt("Masukkan Jam kerja: "));

let upahperjam;
let gaji;

if(golongan === "A") {
    upahperjam = 4000;
}  else if(golongan === "B") {
    upahperjam = 5000;
} else if(golongan === "C") {
    upahperjam = 6000;
} else if(golongan === "D") {
    upahperjam = 7500;
} else {
    console.log("Tidak ada golongan tersebut");
    Process.exit();
}

if(jam <= 48) {
    gaji = jam * upahperjam;
} else {
    let lembur = jam - 48;
    gaji = (48 * upahperjam) + (lembur * 3000);
}

console.log("\n=== Data karyawan ===");
console.log("Nama karyawan :", nama);
console.log("Golongan      :", golongan);
console.log("Jam kerja     :", jam);
console.log("Gaji          : Rp" + gaji);