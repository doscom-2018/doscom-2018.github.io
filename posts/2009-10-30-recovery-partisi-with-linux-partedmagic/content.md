### **Recovery Partisi With Linux PartedMagic LiveUSB**
_Diposting oleh Dinus Open Source Community di 15.40 . Jumat, 30 Oktober 2009_

<div align="center">
	<img src="./posts/2009-10-30-recovery-partisi-with-linux-partedmagic/1.jpg" height="250px" alt="img">
</div> 

Terkadang kita ceroboh dalam melakukan pemartisian, sehingga partisi yang kita punya tanpa sadar telah hilang/terformat. Hal ini tentunya akan membuat kita panik, apalagi jika terdapat file - file penting seperti tugas kuliah, skripsi, ataupun foto - foto pribadi.

Tetapi dengan adanya suatu aplikasi `testdisk` yang terdapat pada linux semua masalah tersebut akan lenyap.

Untuk mempermudah kita karena ukuran linux ini berkisar antara 80MB maka akan kita install didalam flashdisk, sehingga dapat dibawa kemanapun dengan mudah. Langkah-langkahnya sebagai berikut :

**Membuat Linux Live Usb**

1. unduh Linux parted magic [disini](http://downloads.partedmagic.com/32/pmagic-usb-3.2.zip)
1. Format flashdisk menjadi ext2 / ext3, dapat dilakukan dengan partition magic (windows) atau Gparted (Linux).
1. extract hasil download lalu kopikan semua file kedalam flashdisk

**Menjalankan Parted Magic dan MereSize Flashdisk**

tujuan dari meresize flashdisk adalah agar flahsdisk dapat digunakan untuk menyimpan data lain dan bisa terbaca pada windows.

1. Set bios agar dapat mem-boot usb pertama kali, lalu `save` dan `restart`
1. pada pilihan `boot`, pilih menu yang paling atas
1. setelah masuk kedalam halaman desktop pilih ikon `Gparted`
1. pilih menu `Gparted -> Devices -> /dev/sdb` (sdb = alamat flasdisk)
1. pilih `Resize /Move` , atur ukuran pada sdb1 menjadi sekecil mungkin lalu OK
1. akan muncul `Unallocated` dibawah sdb1, klik dan pilih new
1. pilih filesystem `fat32` agar bisa terbaca pada di windows dan tekan add
1. pilih `edit -> apply` dan tunggu beberapa saat maka flasdiskpun bisa mulai digunakan

**Mengembalikan partisi yang telah keformat**

1. pilih ikon `utilities -> Testdisk`
1. Pilih `Create N' New` (gambar 1)
1. Pilih Hardisk yang telah terformat, pilih `Proceed` lalu Enter (gambar 2)
1. Pilih `Intel` lalu Enter, (gambar 3)
1. pilih `analyse` lalu Enter, (gambar 4)
1. Pilih `Quick Search` lalu Enter, (gambar 5)
1. tekan `y`, (gambar 6)
1. pilih jenis partisi yang ditemukan (gambar 7)
1. lalu pilih `Write` dan Enter partisi yang saat ini digunakan (gambar 8)
1. Pilih `yes` (gambar 9)
1. pilih `OK` (gambar 10)
1. pilih `Quit` (gambar 11)
1. Pilih `Quit` (gambar 12)

**Keterangan Gambar :**

<br>
<div align="center">
	<img src="./posts/2009-10-30-recovery-partisi-with-linux-partedmagic/2.png" height="350px" alt="img">
	<p>gambar 1</p>
</div> 

<br>
<div align="center">
	<img src="./posts/2009-10-30-recovery-partisi-with-linux-partedmagic/3.png" height="350px" alt="img">
	<p>gambar 2</p>
    <p>keterangan : untuk jenis partisi linux, ataupun windows bisa gunakan intell, sedangkan yang lainnya menyesuaikan</p>
</div> 

<br>
<div align="center">
	<img src="./posts/2009-10-30-recovery-partisi-with-linux-partedmagic/4.png" height="350px" alt="img">
	<p>gambar 3</p>
</div> 

<br>
<div align="center">
	<img src="./posts/2009-10-30-recovery-partisi-with-linux-partedmagic/5.png" height="350px" alt="img">
	<p>gambar 4</p>
    <p>keterangan : jenis tabel partisi yang muncul merupakan tabel partisi yang saat ini sedang digunakan.</p>
</div> 


<br>
<div align="center">
	<img src="./posts/2009-10-30-recovery-partisi-with-linux-partedmagic/6.png" height="350px" alt="img">
	<p>gambar 5</p>
    <p>keterangan : untuk jenis partisi yang ditulis menggunakan OS Window$$ Vi$ta ketik "Y", sedangkan yang lainnya ketik "N"</p>
</div> 

<br>
<div align="center">
	<img src="./posts/2009-10-30-recovery-partisi-with-linux-partedmagic/7.png" height="350px" alt="img">
	<p>gambar 6</p>
    <p>keterangan : partisi yang muncul merupakan tabel partisi lama yang telah ditemukan. apabila jenis partisi sesuai dengan sebelumnya. dapat dipilih lalu tekan ENTER</p>
</div> 

<br>
<div align="center">
	<img src="./posts/2009-10-30-recovery-partisi-with-linux-partedmagic/8.png" height="350px" alt="img">
	<p>gambar 7</p>
    <p>keterangan : hasil tabel partisi yang telah dikembalikan. pilih write untuk menulis ke hardisk</p>
</div> 

<br>
<div align="center">
	<img src="./posts/2009-10-30-recovery-partisi-with-linux-partedmagic/9.png" height="350px" alt="img">
	<p>gambar 8</p>
</div> 

<br>
<div align="center">
	<img src="./posts/2009-10-30-recovery-partisi-with-linux-partedmagic/10.png" height="350px" alt="img">
	<p>gambar 9</p>
</div> 

<br>
<div align="center">
	<img src="./posts/2009-10-30-recovery-partisi-with-linux-partedmagic/11.png" height="350px" alt="img">
	<p>gambar 10</p>
</div> 

<br>
<div align="center">
	<img src="./posts/2009-10-30-recovery-partisi-with-linux-partedmagic/12.png" height="350px" alt="img">
	<p>gambar 11</p>
</div> 

<br>
<div align="center">
	<img src="./posts/2009-10-30-recovery-partisi-with-linux-partedmagic/13.png" height="350px" alt="img">
	<p>gambar 12</p>
</div> 

Semoga Sukses N Gudlack :-)

Nb:

* **Tulisan ini dibuat untuk menyukseskan [Lomba Blog Open Source](http://www.informatika.lipi.go.id/seminar/lombablog/) P2I-LIPI dan [Seminar Open Source](http://www.informatika.lipi.go.id/seminar/) P2I-LIPI 2009.**

* **Artikel ini juga di posting di [forum DOSCOM](http://forum.doscom.org/viewtopic.php?f=10&t=34)**