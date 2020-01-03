### **Cara Menampilkan Menu Designer phpMyAdmin di Ubuntu**
_Posted by rendy amdani on Nov 4, 2011 in Tutorial | 8 comments_

Salam Opensource…

Pada kesempatan kali ini saya ingin share sedikit pengalaman saya saat berkutat dengan dengan phpMyAdmin di [Ubuntu](http://www.ubuntu.com/).. Dulu waktu saya menggunakan paket [XAMPP](http://www.apachefriends.org/en/xampp.html) di jendela kayaknya di tabmenu phpMyAdmin ada yang namannya menu designer.. Nak ketika saya memakai phpMyAdmin di distro kesayangan [TeaLinuxOS](http://tealinuxos.org/) kok gak ada menu designernya.. Oh ya sebelumnya menu designer ini digunakan untuk melihat atau membuat relasi antar tabel dalam database.. Screenshotnya  seperti ini…
<div align="center">
	<img src="./posts/2011-11-04-cara-menampilkan-menu-designer-phpmyadmin-di-ubuntu-2/1.png" height="250px" alt="designer phpmyadmin">
    <p>designer phpmyadmin</p>
</div> 

Nah setelah saya browsing kesana – kemari (kayak nyari alamat palsu aja ya).. :D Akhirnya nemu juga ni cara munculin menu designernya..

1. Buka Terminal (Aplication->Accessories->Terminal)
    ```
    $ sudo su
    ```
    Login sebagai root
    ```
    # gedit /etc/phpmyadmin/config.inc.php
    ```
    Edit file config.inc.php saya menggunakan gedit.. Cari baris di bawah ini.
    ```
    $cfg['Servers'][$i]['pmadb'] = $dbname;
    $cfg['Servers'][$i]['designer_coords'] = 'pma_designer_coords';
    ```
    Ganti `$dbname` dengan salah satu nama database diphpmyadmin anda
    <br>
    Ganti `pma_designer_coords` dengan salah satu nama table didatabase
    <br>
    example :
    ```
    $cfg['Servers'][$i]['pmadb'] = dbpenjualan;
    $cfg['Servers'][$i]['designer_coords'] = 't_barang';
    ```
    Kalo uda di save ya

2. Logout phpMyAdmin anda (Klick menu exit di kanan atas dekat home)

3. Login kembali di phpMyAdmin
    <br>
    Klick salah satu database yang ada di phpmyadmin anda, maka akan tampil tab designer di phpMyAdmin anda.

<div align="center">
	<img src="./posts/2011-11-04-cara-menampilkan-menu-designer-phpmyadmin-di-ubuntu-2/2.png" height="250px" alt="tabdesigner phpmyadmin">
    <p>tabdesigner phpmyadmin</p>
</div> 

Selamat mencoba.. Semoga bermanfaat.. Salam Opensource..

[Referensi](http://laelamadjnun.blogspot.com/2011/06/memunculkan-tab-designer-phpmyadmin-di.html)