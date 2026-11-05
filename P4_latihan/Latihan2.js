
// Fungsi untuk menghitung luas segitiga
function hitungLuas(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

// Menghitung luas pertama
let luas1 = hitungLuas(10, 6);
console.log("Luas segitiga pertama: " + luas1);

// Menghitung luas kedua
let luas2 = hitungLuas(8, 5);
console.log("Luas segitiga kedua: " + luas2);

// Menampilkan hasil
document.getElementById("hasil").innerHTML =
    "Luas segitiga pertama: " + luas1 + "<br>" +
    "Luas segitiga kedua: " + luas2;
