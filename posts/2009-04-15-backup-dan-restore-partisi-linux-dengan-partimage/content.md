#### Backup dan Restore Partisi Linux dengan Partimage
_Diposting oleh Eligio Moniz do Rego di 21.44 . Rabu, 15 April 2009_
<br>
Label: File System, Tools Partisi, Tutorial

Ketika Anda mengalami masalah pada sistem komputer Anda, baik di Linux maupun di Windows, seperti file system error, kena virus, manipulation error, dan lain-lain. Apa yang Anda pikirkan saat itu?

Menginstalasi ulang sistem operasinya atau ditinggalkan begitu saja!
Tidak mungkin anda melakukan hal yang terakhir yaitu “meninggalkan begitu saja”, pastinya Anda mencari jalan keluarnya dengan menginstall ulang sistem operasi.
Menginstalasi ulang sistem operasi serta aplikasi-aplikasi pendukung lainnya tentunya bukan hal yang mudah juga, karena harus membutuhkan waktu yang cukup lama dan kesabaran yang tinggi untuk melakukan hal itu.

Solusi untuk mengantisipasi masalah di atas adalah dengan membackup sistem berserta aplikasi yang masih bekerja normal dan telah di setting secara optimal. Sehingga apabila suatu saat sistem komputer mengalami trouble seperti yang sudah disebutkan, kita tinggal merestorenya kembali.

Dalam dunia **Free & Open Source Software**, ada sebuah utilitas yang bernama [Partimage](http://www.partimage.org/), gunanya untuk menyimpan partisi menjadi image file. Cara kerjanya hanya meng-copy blok data yang digunakan oleh partisi dan blok yang tidak digunakan tidak akan di simpan dalam image file.

Sejak artikel ini di tulis, versi Partimage sudah mencapai 0.6.7 dengan lisensi **Free Software [GPL 2](http://www.blogger.com/www.gnu.org/licenses/) (General Public License)**.

Keuntungan menggunakan Partimage:

* Dapat me-restore kembali partisi Linux, MacOS, Windows maupun file system lainnya jika terjadi masalah dengan sistem yang ada tersebut.
* Bisa membackup image file melalui jaringan
* Dengan hanya membackup 1 image file, dapat digunakan untuk semua komputer yang identik.
* Mendukung banyak file system (lihat tabel di bawah)
<div align="center">
	<img src="./posts/2009-04-15-backup-dan-restore-partisi-linux-dengan-partimage/Filesystem.png" height="250px" alt="img">
</div> 

Beberapa Distro Linux sudah menyertakan paket Partimage, misalnya [SystemRescueCD](http://www.sysresccd.org/) dan [Knoppix](http://www.knoppix.org/), sehingga Partimage dapat dijalankan secara LiveCD.

Pada kesempatan kali ini, penulis akan menunjukkan bagaimana caranya mem-backup dan me-restore sistem Linux Anda dengan menggunakan Partimage. Distro yang dipakai penulis adalah SystemRescueCD versi 1.1.5.

Silakan download artikel dalam format PDF disini : [Download](http://www.ziddu.com/download/4294196/Partimage.pdf.html)