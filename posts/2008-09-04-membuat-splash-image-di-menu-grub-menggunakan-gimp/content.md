### Membuat Splash Image di menu GRUB Menggunakan GIMP
_Diposting oleh Eligio Moniz do Rego di 15.04 . Kamis, 04 September 2008_
<br>
Label: Boot Loader, Tutorial

Pernahkah anda berpikir bagaimana memberi Splash Image di menu GRUB saat booting?
Jika belum! Maka, penulis akan memberikan trik bagaimana memberikan Splah Image pada menu GRUB.
Yang harus di persiapkan adalah :

* Sebuah gambar digital entah itu gambar diri anda, pacar, selingkuhan maupun gundil-gundik anda, yang nantinya akan kita rubah ukurannya menjadi 640x480 serta kedalaman warna menjadi 14 warna.
* Aplikasi GIMP di Linux ataupun Photoshop jika anda mengedit gambar di sistem operasi windows.
* Kesabaran yang tinggi jika hasil konversi warnanya tidak memuaskan
* Secangkir kopi panas dan cemilan untuk memacu spirit anda hehehe


Setelah semua kebutuhan sudah tersedia, kita lanjutkan ke langkah berikutnya:

1. Buka aplikasi GIMP pada distro linux Anda, setelah itu buka file gambar yang mana ingin Anda edit sebagai splashimage lewat Menu `File → Open`.
    <div align="center">
        <img src="./posts/2008-09-04-membuat-splash-image-di-menu-grub-menggunakan-gimp/1.JPG" height="250px" alt="img">
        <p>Gambar 1</p>
    </div> 

1. Rubah kedalaman warna gambar tersebut dengan memilih pada menu bar `Image → Mode → Indexed`. Pastikan pilihannya adalah `Generate optimun palette` dan masukkan jumlah warnanya sebesar 14 di dalam box `Maximun numbers of colors` kemudian pilih tombol `Convert`. Lihat contoh gambar dibawah
    <div align="center">
        <img src="./posts/2008-09-04-membuat-splash-image-di-menu-grub-menggunakan-gimp/2.JPG" height="300px" alt="img">
        <p>Gambar 2</p>
    </div> 

1. Rubah ukuran gambar melalui menu bar `Image → Scale Image` dan masukkan ukuran lebar 640 dan tinggi 480 kedalam box `Width` dan `Height` kemudian pilih tombol scale.
    <div align="center">
        <img src="./posts/2008-09-04-membuat-splash-image-di-menu-grub-menggunakan-gimp/3.JPG" height="300px" alt="img">
        <p>Gambar 3</p>
    </div> 

1. Simpan gambar tersebut dengan nama (terserah) `splashimage.xpm.gz` melalui menu bar `file → Save a Copy`, di dalam texbox `name` masukkan nama berserta extensi seperti yang sudah disebutkan diatas dan tentukan lokasi gambar yang akan disimpan lewat combobox `save in folder`. Setelah gambar disimpan keluarlah dari Aplikasi GIMP dan lihat hasilnya.
    <div align="center">
        <img src="./posts/2008-09-04-membuat-splash-image-di-menu-grub-menggunakan-gimp/4.JPG" height="100px" alt="img">
        <p>Gambar 4</p>
    </div> 

1. Buka aplikasi konsol atau terminal, lalu login sebagai root.
    Salin gambar yang sudah di edit tersebut ke folder `/boot/grub`
    dengan perintah #`cp splashimage.xpm.gz /boot/grub/`

1. Kemudian editlah file konfigurasi GRUB yang terletak di `/boot/grub/menu.lst` dengan menggunakan editor vi/vim.
    Contoh :
    ```
    # vim /boot/grub/menu.lst
    ```
    untuk mengedit file tekan tombol 'insert' atau tombol 'i'

1. Tambahkan parameter `splashimage=(hd0,7)/boot/grub/splashimage.xpm.gz` di bawah kata “timeout”.
    yang harus diperhatikan adalah letak partisi sistem operasi linux anda.
    Parameter (hd0,7) merupakan letak partisi penulis, yang pastinya akan berbeda apabila rekan- rekan mengistall sistem operasi linux di partisi lain.
    Ok mari kita simak penjelasan berikut :
    
    * `hd0` = merupakan harddisk ke-1 atau primary master.
        Seandainya hd1 berarti harddisk tersebut adalah secondary master.

    * `7` = merupakan letak partisi sistem operasi linux di komputer penulis yang sebetulnya adalah partisi 8.
        Didalam boot loader GRUB setiap partisi akan diidentifikasi mulai dari angka 0. Jadi apabila anda mengistall linux di partisi 1, maka akan dikenal sebagai partisi 0. lebih lengkapnya (hd0,0).
        Demikian penjelasan singkat dari penulis, dan besar harapan penulis agar rekan-rekan dapat memahami penjelasan tersebut.

1. Simpan hasil editing file menu.lst anda dengan menekan tombol '`esc`' kemudian tekan `Shift : wq` (w=write, q=quit).

1. Reboot PC dengan menggunakan perintah:
    ```
    # reboot

    ```
    atau
    ```
    # init 6

    ```


Sampai disini dulu ya trik dari penulis...nantikan trik selanjutnya...

<br><br>

---------------------------------------------------------------------------------------
<div align="center">
    <b>***Open Your Mind Use Open Source Software***</b>
</div>
------------------------------------------------------------------------------------------