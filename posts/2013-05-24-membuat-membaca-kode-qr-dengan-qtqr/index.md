### **Membuat & Membaca Kode QR Dengan QtQR**
_Posted by Eligio Moniz do Rego on May 24, 2013_
<br>
in Tools, Tutorial | 1 comment	

**‘QR‘** (Quick Response) kode merupakan barcode dua dimensi yang terdiri dari objek berbentuk kotak hitam pada latar belakang putih. Kode QR biasanya berisi URL, teks, nomer telepon, dan sms yang dapat digunakan pada majalah, surat kabar, iklan, kartu nama ataupun media lainnya.
QR dikembangkan oleh [Denso Wave](http://www.denso-wave.com/), dari divisi **Denso Corporation** yang merupakan sebuah perusahaan Jepang dan dipublikasikan pada tahun 1994.
Dibawah ini merupakan contoh gambar kode QR.
<p align="center">
	<img src="./posts/2013-05-24-membuat-membaca-kode-qr-dengan-qtqr/1.png" height="150px" alt="Quick Response Code">
</p> 

Begitu banyak aplikasi yang dapat membantu Anda untuk menghasilkan kode QR, salah satunya dengan memanfaatkan QtQR untuk membuat sekaligus membaca kode QR tersebut.
QtQR adalah aplikasi berbasis open source yang dibuat dengan bahasa pemrograman Python & Qt. Memiliki fitur seperti menciptakan kode QR yang berisi URL, teks, email, SMS serta nomor telepon. QtQR juga dilengkapi dengan fitur ‘decoding‘ sehingga Anda dapat menggunakan webcam untuk memecahkan kode QR (misalnya, yang Anda temukan di koran) ataupun gambar kode QR yang sudah terdapat didalam media storage Anda.

> Catatan:
> Praktek ini penulis menggunakan Linux Ubuntu 12.10. Sedangkan untuk melakukan proses instalasi QtQR, terlebih dahulu pastikan Anda terhubung ke Internet atau DVD repositori Ubuntu 12.10.

<br>
Langkah-langkahnya sebagai berikut:

1. Buka Terminal dari menu: `Applications -> Accessories -> Terminal`
2. Kemudian ketik perintah dibawah ini:
    <br>
    ```
    $ sudo apt-add-repository ppa:qr-tools-developers/qr-tools-stable
    $ sudo apt-get update
    $ sudo apt-get install qtqr

    ```
3. Jalankan aplikasi QtQR melalui menu: `Applications -> Graphics -> QtQR`
4. Untuk membuat kode QR, silakan sesuaikan dengan tipe data serta parameter yang ada seperti pada contoh gambar dibawah ini:
<p align="center">
	<img src="./posts/2013-05-24-membuat-membaca-kode-qr-dengan-qtqr/2.png" height="250px" alt="Screenshot-1">
</p>
Setelah itu klik tombol “Save QRCode” untuk menyimpan hasil kode QR buatan Anda.

5. Jika Anda ingin membaca kode QR (misal dari koran atau majalah) melalui webcam, klik pada tombol `“Decode”` kemudian pilih `“Decode From Webcam”` atau bisa juga dengan menekan tombol kombinasi `CTRL + W` pada keyboard Anda.
6. Lalu dekatkan kode QR pada webcam tunggu sampai muncul garis berwarna hijau (lihat contoh gambar).
<p align="center">
	<img src="./posts/2013-05-24-membuat-membaca-kode-qr-dengan-qtqr/3.png" height="250px" alt="Screnshot-2">
</p> 
    
7. Kemudian tutup jendela webcam dan lihat hasilnya.
<p align="center">
	<img src="./posts/2013-05-24-membuat-membaca-kode-qr-dengan-qtqr/4.png" height="250px" alt="Screenshot-3">
</p> 
    
Semoga berhasil kawan ;)

<br>
**Referensi:**

<http://id.wikipedia.org/wiki/Kode_QR>

<http://code.google.com/p/qtqr/>
