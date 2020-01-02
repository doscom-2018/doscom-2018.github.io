### **Manage Partisi LVM di Linux**
_Posted by mazumam on Sep 28, 2011 in Partisi, Tools, Tutorial, Ubuntu | 3 comments_

Saya akan coba menulis langkah-langkah men-setup [LVM](http://en.wikipedia.org/wiki/Logical_Volume_Manager_%28Linux%29) (Logical Volume Manager) pada Ubuntu 10.10 Maverick Meerkat. [LVM](http://www.mazumam.web.id/2011/09/manage-lvm-di-linux-ubuntu.html) ini saya gunakan untuk membuat Shared File Server di SAN (Storage Area Network)

Sebelum masuk ke langkah berikutnya, sedikit me-review istilah-istilah yang perlu diketahui berhubungan dengan [LVM](http://www.mazumam.web.id/2011/09/manage-lvm-di-linux-ubuntu.html) ini:

**Physical Volume (pv)**= Satuan Partisi atau Hard Disk yang akan digabungkan.
**Volume Group (vg)**= Gabungan dari beberapa satuan Physical Volume.
**Logical Volume (lv)**= Partisi atau Hard Disk hasil dari Volume Group.
Berikut, perhatikan dan ikuti baik-baik :)

Persiapan:

Saya membangun SAN ini pada:
```
CPU Intel Core 2 Duo

RAM 2 GHz

Hard Disk 3×20GB

System Ubuntu 10.10 Maverick Meerkat
```

System yang ingin saya bangun adalah :

* 1 buah HD untuk System Linux
* Gabungan dari 2 buah Hard Disk sebagai Logical Volume yang dijadikan sebagai tempat folder yang akan dishare ke server yang lain. 2 HD ini akan digabungkan secara logic sehingga sistem akan membacanya sebagai 1 buah HD dengan kapasitas 2×20GB=40GB menggunakan LVM.

Langkah-langkahnya :Pastikan paket lvm2 dan clvm sudah terinstall, jika belum ada, install dengan perintah:
```
$ sudo apt-get install lvm2 clvm
```

Cek skema Hard Disk menggunakan perintah: fdisk
```
$ sudo fdisk -l
```
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

Hasilnya, terlihat ada 3 buah Hard Disk yang terbaca oleh sistem dengan rincian:

/dev/sda = Hard Disk #1 (20GB) yang terdiri dari:

- /dev/sda1 = Partisi sistem root “/”
- /dev/sda2 = Partisi Extended
- /dev/sda5 = Partisi Swap

/dev/sdb = Hard Disk #2 (20GB) belum dipartisi

/dev/sdc = Hard Disk #3 (20GB) belum dipartisi

setelah mengetahui skema instalasi Hard Disk di atas, selanjutnya saya akan buat /dev/sdb dan/dev/sdc sebagai Physical Volume, dengan perintah: pvcreate
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

Untuk mengecek Physical Volume yang sudah dibuat, gunakan perintah: pvs
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

kemudian, saya akan menggabungkan 2 buah Physical Volume tadi menjadi 1 buah Volume Group dengan nama DATA, dengan perintah: vgcreate
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

Untuk mengeek Volume Group yang sudah dibuat, gunakan perintah: vgs
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

Sampai disini, saya sudah membuat sebuah Volume Group dengan nama **/dev/DATA** yang berukuran 40GB. Selanjutnya, saya akan membuat Volume Group tadi menjadi Logical Volume.

> catatan : Logical Volume adalah bagian “/” partisi dari sebuah Volume Group, dimana dalam sebuah Volume Group dapat berisi lebih dari 1 buah Logical Volume.

Saya akan hanya membuat 2 buah Logical Volume dengan nama **DATA_SAMBA** pada Volume Group ini yang berukuran 30GB dan **DATA_WWW** dengan ukuran 10GB. Dengan perintah: lvcreate
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

> catatan : `-l 100%FREE` pada lvcreate yg kedua maksudnya adalah menggunakan seluruh sisa volume group untuk logical volume DATA_WWW

Untuk melihat hasil dari pembuatan Logical Volume di atas, gunakan perintah: lvs
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

Setelah selesai membuat Logical Volume seperti langkah di atas, selanjutnya adalah mem-Format Logical Volume `/dev/DATA/DATA_SAMBA` dan `/dev/DATA/DATA_WWW` agar dapat dibaca dan digunakan untuk menyimpan dan mengoperasikan file/data di dalamnya, dalam contoh ini saya mem-format `DATA_WWW` menggunakan `EXT4`, dan `DATA_SAMBA` menggunakan `NTFS`. Dengan perintah-perintah sebagai berikut:
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

> catatan: Pemilihan jenis File System yang akan di-Format-kan ke dalam Logical Volume bisa disesuaikan dengan kebutuhan

setelah diformat, maka kita harus menyiapkan direktory untuk mounting Logical Volume yang sudah kita buat tadi. caranya
```
$ sudo mkdir -p /data/samba
$ sudo mkdir -p /data/www
```

kemudian mount kedua Logical Volume tadi ke direktory yang sudah disiapkan
```
$ sudo mount /dev/DATA/DATA_SAMBA /data/samba
$ sudo mount /dev/DATA/DATA_WWW /data/www
```

selesai..

sumber <http://mazumam.web.id>