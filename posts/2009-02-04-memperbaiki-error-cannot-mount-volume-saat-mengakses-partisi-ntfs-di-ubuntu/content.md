#### Memperbaiki Error "Cannot mount volume" Saat Mengakses Partisi NTFS di Ubuntu
_Diposting oleh Eligio Moniz do Rego di 14.31 . Rabu, 04 Februari 2009_
<br>
Label: Tutorial, Ubuntu

Pernahkah suatu waktu saat rekan-rekan hendak mengakses partisi yang berfilesystem NTFS pada Ubuntu, muncul pesan error seperti pada gambar dibawah ini:
<div align="center">
	<img src="./posts/2009-02-04-memperbaiki-error-cannot-mount-volume-saat-mengakses-partisi-ntfs-di-ubuntu/1.png" height="200px" alt="img">
</div> 
<br>
<div align="center">
	<img src="./posts/2009-02-04-memperbaiki-error-cannot-mount-volume-saat-mengakses-partisi-ntfs-di-ubuntu/2.png" height="350px" alt="img">
</div> 

Jika ya! Berarti partisi tersebut mengalami unclean shutdown, dengan kata lain saat proses shutdown sistem di Windows tidak “`Safely Remove Hardware`”, yang diakibatkan karena mati lampu saat menjalankan sistem, lupa menutup file yang sedang digunakan pada partisi berfilesystem NTFS ataupun karena virus (kata developer Ubuntunya sih).

Untuk solusi masalah tersebut, lakukan langkah-langkah berikut:

1. Buka Terminal melalui `Applications → Accessories → Terminal`
1. Ketik `sudo su`
1. Buatlah sebuah direktori di /mnt dengan perintah `mkdir /mnt/repair`
1. Mount partisi yang mengalami error dengan perintah
    ```
    mount -t ntfs-3g /dev/sda1 /mnt/repair -o force

    ```
    > **catatan:**
    > /dev/sda1 merupakan letak partisi penulis yang akan diperbaiki, saat melakukannya sesuaikan dengan letak partisi anda.
1. Umount kembali partisi tersebut `umount /mnt/repair`
1. Coba sekarang buka kembali partisi NTFS tersebut melalui File Browser