#### Mencoba Firefox OS di Linux
_Posted by Reza Faiz A Rahman on Jul 28, 2012_
<br>
in Aplikasi, News, Operating System, Tutorial | 2 comments	

Buat yang bosan “oprek” Android, kita bisa mencoba OS Smartphone yang satu ini, FirefoxOS. Walaupun belum beredar, kita bisa mencobanya lebih dahulu di Linux.

Lebih lanjut tentang FirefoxOS bisa baca disini <http://www.mozilla.org/en-US/b2g/>

Untuk mencoba, Pertama kita unduh dulu FirefoxOS nya di <http://ftp.mozilla.org/pub/mozilla.org/b2g/nightly/latest-mozilla-central/> pilih versi terakhir. Misal “b2g-17.0a1.en-US.linux-i686.tar.bz2″.

Kemudian extract, akan muncul folder baru bernama “b2g”. Masuk ke folder tersebut
```
$ tar -xjvf b2g-17.0a1.en-US.linux-i686.tar.bz2
$ cd b2g
```

untuk menginstall gaia (emulator untuk menjalankan FirefoxOS) ketik:
```
$ git clone git://github.com/mozilla-b2g/gaia
$ make -C gaia profile
```

Untuk proses ini di perlukan bandwith “dewa” :D, karena akan mendownload paket-paket sekitar 500MB :D

Setelah selesai jalankan dengan perintah:
```
$ /path/to/your/b2gfolder/b2g -profile gaia/profile
```

atau
```
$ ./b2g -profile gaia/profile
```

berikut beberapa Screenshots dari FirefoxOS yang saya coba di Ubuntu 12.04
<p align="center">
	<img src="./posts/2012-07-28-mencoba-firefox-os-di-linux/1.png" height="400px" alt="img1">
    <br>
    Home Screen
</p> 


<p align="center">
	<img src="./posts/2012-07-28-mencoba-firefox-os-di-linux/2.png" height="400px" alt="img2">
    <br>
    Menu
</p> 


<p align="center">
	<img src="./posts/2012-07-28-mencoba-firefox-os-di-linux/3.png" height="400px" alt="img3">
    <br>
    Messaging
</p> 


<p align="center">
	<img src="./posts/2012-07-28-mencoba-firefox-os-di-linux/4.png" height="400px" alt="img4">
    <br>
    Marketplace
</p> 


Lebih lanjut

- <https://wiki.mozilla.org/Gaia/Hacking>

- <https://developer.mozilla.org/en/Mozilla/Boot_to_Gecko/Preparing_for_your_first_B2G_build>