#### Install GFX GRUB di Ubuntu
_Diposting oleh Eligio Moniz do Rego di 15.07 . Kamis, 04 September 2008_
<br>
Label: Boot Loader, Tutorial

Ingin membuat boot menu GRUB anda tampil menarik? Ikuti langkah-langkah dibawah ini dan niscaya trik ini dapat merubah boot menu GRUB anda yang jelek menjadi lebih ciamik dan enak dipandang mata.

Sebelumnya download dulu paket GFX Grub disini

[~Download GFX Grub~](http://cavanera.googlepages.com/grub-gfxboot_0.97-5_i386.deb)

dan jangan lupa themes disini

[~Download Themes~](http://cavanera.googlepages.com/GFXGrub.tar.gz)

Setelah semuanya sudah selesai di download, simak langkah-langkahnya dibawah ini :

1. Hapus Grub lama anda dengan menggunakan Terminal
    dengan mengklik pada `Applications -> Accessories -> Terminal`.
    Kemudian masukkan perintah berikut :
    ```
    sudo apt-get remove grub
    ```

1. Install GFX Grub yang sudah di download
    ```
    sudo dpkg -i grub-gfxboot_0.97-5_i386.deb
    ```

1. Ekstrak paket themesnya
    ```
    tar -zxvf GFX_Grub.tar.gz
    ```
    Kemudian masuk ke direktori hasil ekstrak tadi
    ```
    cd GFX_Grub
    ```
    Lalu salin themes yang ingin anda tampilkan di boot menu grub ke direktori /boot/grub.
    ```
    sudo cp message.ububrown /boot/grub/
    ```

1. Edit menu.lst anda dengan editor vim (jangan lupa backup menu.lstnya)
    ```
    vim /boot/grub/menu.lst
    ```
    Masukkan sintaks dibawah ini di atas kata “`default 0`”
    ```
    gfxmenu /boot/grub/message.ububrown
    ```
    simpan hasil edit tersebut dengan menekan tombol shift + : + wq pada keyboard anda

    penjelasan: (w=write dan q=quit) berarti simpan sekaligus keluar dari aplikasi vim.

    demikian penjelasan singkat dari penulis. Dan penulis cukup malu untuk menjelaskan apa arti dari huruf w dan q kepada anda hehehe.

1. Pada langkah 1 penulis telah serakah mengajarkan anda untuk menghapus Grub pada sistem anda, dan sakarang penulis akan memperbaiki kesalah penulis dengan mengajarkan cara merestore Grub (GFX Grub) kembali.
    <br>
    Masih tetap menggunakan Terminal, masukkan perintah-perintah dibawah ini :
    ```
    sudo grub
    grub> find /boot/grub/stage1
    (hdx,y) #merupakan hasil output sektor partisi diharddisk
    grub> root (hdx,y)
    grub> setup (hdx)
    grub> quit
    ```
    "x dan y" disini pemetaan dari sektor harddisk dan partisi, untuk lebih jelasnya silakan melihat posting penulis yang membahas tentang

    "[Mengembalikan boot loader GRUB sehabis install ulang OS Windows](http://avancalinux.blogspot.com/2008/05/mengembalikan-boot-loader-grub-sehabis.html)"


Reboot ulang linux anda, dan "`Simsalabim abrakadabra`" GRUB anda yang tampilannya dulu jelek kini sudah berubah menjadi cantik dan menarik.