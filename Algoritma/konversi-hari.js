const prompt = require("prompt-sync")();

let totalhari = parseInt(prompt("Masukkan jumlah hari proyek: "));

let tahun = Math.floor(totalhari / 365);
sisa = totalhari % 365;

let bulan = parseInt(sisa / 30);
hari = sisa % 30;

console.log(`${tahun} tahun ${bulan} bulan ${hari} hari`);