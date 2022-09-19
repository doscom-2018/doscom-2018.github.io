### **Installasi OpenOffice.org 3.0 pada Ubuntu 8.10 Intrepid Ibex**
_Diposting oleh Eligio Moniz do Rego di 22.42 . Rabu, 17 Desember 2008_
<br>
Label: Open Office, Tutorial, Ubuntu

<div align="center">
	<img src="./posts/2008-12-17-installasi-openofficeorg-30-pada-ubuntu/Ooo3-proposal-splash4.png" height="250px" alt="img">
</div> 

Pastinya sudah banyak yang tahu bahwa Openoffice.org bawaan dari Ubuntu 8.10 Intrepid Ibex adalah Openoffice.org 2.4. Sedangkan versi terbarunya adalah Openoffice.org 3.0.
Jika rekan-rekan ingin menggunakan versi terbaru Openoffice.org 3.0, ikuti langkah instalasinya di bawah ini:

1. Download OpenOffice.org 3.0 [disini](http://repo.ugm.ac.id/ekstra/office/openoffice/3.0.0/OOo_3.0.0_LinuxIntel_install_en-US_deb.tar.gz)
1. Buka `terminal Applications->Accessories->Terminal`
1. Pada terminal ketik `sudo su` dan masukkan password root
1. Uninstall OpenOffice yang lama, dengan mengetik
    ```
    # sudo apt-get remove openoffice.org-core

    ```
1. Ekstrak paket OpenOffice.org 3.0 yang sudah didownload
    ```
    # tar -Zxvf OOo_3.0.0_LinuxIntel_install_en-US_deb.tar.gz

    ```
1. Masuk ke direktory hasil ekstrak, dengan mengetik
    ```
    # cd OOo_3.0.0_LinuxIntel_install_en-US_deb/DEBS

    ```
1. Install paket dengan perintah
    ```
    # dpkg –install –force-overwrite ooobasis3.0_8.deb desktop- interation/openoffice.org3.0-debian-menus_3.0-9354_all.deb

    ```
1. Tutup terminal dan Openoffice.org 3.0 telah siap digunakan