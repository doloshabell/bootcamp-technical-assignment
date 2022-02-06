// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama

/*Answer
1. Synchronous adalah kegiatan yang berlangsung harus diselesaikan dahulu sebelum pindah ke kegiatan yang lain
2. Asynchronous adalah kegiatan yang dapat berlangsung tanpa harus menunggu kegiatan lain yang belum selesai
3. Kita dapat menerapkan konsep asynchronous pada browser
4. console.log pertama menampilkan urutan angka dari 1-5 , dan console.log kedua menampilkan angka 6 sebanyak 5 kali
5. pada console.log kedua memiliki method setTimeout yang dimana hanya untuk mengeksekusi sekali saja sehingga seterusnya dia hanya mengulang value output yang
sama dari iterasi yang terjadi sebanyak 5 kali
6. for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    clgKedua(i);
  }

function clgKedua(iteration){
    setTimeout(() => console.log("second log: ", iteration), 100); // 02 - Kedua
}

*/
for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }