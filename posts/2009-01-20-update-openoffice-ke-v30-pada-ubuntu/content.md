#### Update OpenOffice ke v3.0 pada Ubuntu 8.10
_Diposting oleh Eligio Moniz do Rego di 10.41 . Selasa, 20 Januari 2009_
<br>
Label: Open Office, Tutorial, Ubuntu

Pengen tahu cara mengupdate OpenOffice versi 2.4 ke versi 3.0 pada Ubuntu 8.10 Intrepid Ibex.

Ikuti langkah-langkahnya dibawah ini:

1. Buka menu `System > Administration > Software Sources`
    <div align="center">
        <img src="./posts/2009-01-20-update-openoffice-ke-v30-pada-ubuntu/1.jpg" height="250px" alt="img">
    </div> 
1. Pilih tab "`Third-Party software`" lalu pilih tombol “`Add`” kemudian masukkan baris dibawah ini:
    <br>
    **Code:**
    ```
    deb http://ppa.launchpad.net/openoffice-pkgs/ubuntu intrepid main

    ```
    <div align="center">
        <img src="./posts/2009-01-20-update-openoffice-ke-v30-pada-ubuntu/2.png" height="350px" alt="img">
    </div> 
    <br>
    <div align="center">
        <img src="./posts/2009-01-20-update-openoffice-ke-v30-pada-ubuntu/3.png" height="200px" alt="img">
    </div> 
1. Pilih "`Add Source`" untuk menambahkan baris yang sudah di ketik tadi, kemudian tutup aplikasi `Software Source` dan setelah itu akan tampil jendela konfirmasi update, lanjutkan dengan memilih "`Reload`".
1. Sekarang anda dapat melihat icon update yang berada di atas panel. Double klik icon tersebut untuk membuka jendela `Update Manager`.
    <div align="center">
        <img src="./posts/2009-01-20-update-openoffice-ke-v30-pada-ubuntu/4.png" height="350px" alt="img">
    </div> 

1. Pilih `Install Update` untuk memperbaharui segala sesuatu yang ada.
    <div align="center">
        <img src="./posts/2009-01-20-update-openoffice-ke-v30-pada-ubuntu/5.png" height="250px" alt="img">
    </div> 

<br>
**Referensi:**

<http://ubuntu.imoka.net/>
