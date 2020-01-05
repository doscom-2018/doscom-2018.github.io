### **Mengakses Partisi Linux dari Windows**
_Diposting oleh Eligio Moniz do Rego di 10.18 . Rabu, 27 Mei 2009_
<br>
Label: File System, Linux, Tutorial

<div align="center">
	<img src="./posts/2009-05-27-mengakses-partisi-linux-dari-windows/1.jpg" height="150px" alt="img">
</div> 

Saat menggunakan sistem operasi Linux untuk mengakses partisi Windows (FAT, FAT16, FAT32 dan NTFS), tentunya tidak ada masalahkan, sebab Linux dengan senang hati akan me-mouting partisi windows tersebut untuk Anda.

Tetapi sebaliknya, jika Anda ingin mengakses partisi Linux (ext2 dan ext3) dari Windows, tentunya memerlukan bantuan software pihak ketiga seperti [Ext2Fsd](http://ext2fsd.sourceforge.net/).
Ext2Fsd merupakan software berbasis Open Source yang dapat dijalankan di sistem operasi Windows NT, 2K, XP, VISTA dan Seven . Mampu mengakses partisi Linux secara read dan write.
Versi terakhir Ext2Fsd sejak artikel di tulis adalah 0.46, dapat Anda download di sini: [Donwload](http://nchc.dl.sourceforge.net/sourceforge/ext2fsd/Ext2Fsd-0.46.exe)

Sekarang mari simak langkah-langkah menggunakan Ext2Fsd untuk mengakses partisi Linux berikut ini:

1. Install Ext2Fsd dan jalankan aplikasi tersebut.
    <div align="center">
        <img src="./posts/2009-05-27-mengakses-partisi-linux-dari-windows/2.png" height="350px" alt="img">
    </div> 
1. Pilih menu `Tool –> Service Management`
    <div align="center">
        <img src="./posts/2009-05-27-mengakses-partisi-linux-dari-windows/3.png" height="250px" alt="img">
    </div> 
1. Tekan tombol “`Start`”, kemudian pilih drop down menu “`SERVICE_SYSTEM_START`” setelah itu pilih tombol "`Apply`"
    <div align="center">
        <img src="./posts/2009-05-27-mengakses-partisi-linux-dari-windows/4.png" height="300px" alt="img">
    </div> 
    <br>
    **Catatan:**
    Secara default Ext2Fsd hanya mendukung modus read only, jika ingin mengaktifkan modus write, beri centang pada check box "`Enable writing support for ext3 volumes`" .
    <div align="center">
        <img src="./posts/2009-05-27-mengakses-partisi-linux-dari-windows/5.png" height="100px" alt="img">
    </div> 
1. Pilih partisi Linux (Ext2 atau Ext3) yang hendak di mount, lalu pilih menu `Tools –> Mountpoint Management`.
    <div align="center">
        <img src="./posts/2009-05-27-mengakses-partisi-linux-dari-windows/6.png" height="350px" alt="img">
    </div> 
1. Tekan tombol “`Add`”
    <div align="center">
        <img src="./posts/2009-05-27-mengakses-partisi-linux-dari-windows/7.png" height="200px" alt="img">
    </div> 
1. Pilih nama drive pada drop down menu "`Enter or select s new drive letter`" (sesuai keinginan anda, yang penting nama drive tersebut belum digunakan), lalu centang "`Create a permanent MountPoint via Session Manager`" setelah itu tekan tombol "`Ok`"
    <div align="center">
        <img src="./posts/2009-05-27-mengakses-partisi-linux-dari-windows/8.png" height="300px" alt="img">
    </div> 

1. Restart sistem Windows Anda, setelah itu buka Windows Explorer dan lihat hasilnya.
    <div align="center">
        <img src="./posts/2009-05-27-mengakses-partisi-linux-dari-windows/9.png" height="350px" alt="img">
    </div> 
    <br>
    <div align="center">
        <img src="./posts/2009-05-27-mengakses-partisi-linux-dari-windows/10.png" height="350px" alt="img">
    </div> 

Cukup sekian dulu ya....sampai ketemu di posting selanjutnya.

<div align="center">
    <b>-----------Open Your Mind With Open Source Software------------</b>
</div>