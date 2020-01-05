### **Instalasi Codec Audio & Video di Ubuntu 8.10**
_Diposting oleh Eligio Moniz do Rego di 00.24 . Rabu, 25 Februari 2009_
<br>
Label: Multimedia Linux, Tutorial, Ubuntu

Secara default, Ubuntu 8.10 Intrepid Ibex tidak menyertakan codec audio maupun video, dikarenakan codec audio/video seperti mp3, avi, mov dkk, masih bersifat proprietary (berbayar dan tidak gratis).

Solusi untuk masalah di atas, Anda hanya perlu menambahkan paket codec secara manual.
Paket codec tersebut dapat ditemukan didalam DVD repository ataupun repository online jika Anda terhubung dengan Internet.

Artikel ini saya tidak akan membahas bagaimana cara membuat repo lokal maupun online. Untuk repo lokal silahkan lihat [disini](http://avancalinux.blogspot.com/search/label/Repository)

Ikuti perintah-perintah berikut ini :


**I. Menginstall Codec MP3**

1. Buka menu : `Applications -> Accessories - > Terminal`
    <br>
    ```
    $ sudo su
    $ password: [Masukkan password Anda]

    ```
1. Ketikkan perintah berikut ini :
    <br>
    **Code:**
    ```
    # apt-get install gstreamer0.10-plugins-ugly
    gstreamer0.10-plugins-bad
    gstreamer0.10-plugins-ugly-multiverse
    gstreamer0.10-plugins-bad-multiverse

    ```
1. Setelah selesai menginstall codec MP3, kini Anda dapat memutar file audio MP3 kesayangan Anda dengan menggunakan `Rhythmbox`.

**II. Menginstall Codec Video**

1. Masih tetap menggunakan terminal yang sama, ketikkan perintah berikut ini:
    <br>
    **Code:**
    ```
    # apt-get install w32codecs libdvdcss2

    ```
1. Selesai....!!!

Selamat mencoba dan semoga berhasil..