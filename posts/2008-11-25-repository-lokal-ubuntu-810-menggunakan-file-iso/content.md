#### Repository Lokal Ubuntu 8.10 Menggunakan file ISO
_Diposting oleh Eligio Moniz do Rego di 18.17 . Selasa, 25 November 2008_
<br>
Label: Repository, Tutorial, Ubuntu

Kemarin penulis mengisi acara `“Ubuntu 8.10 Intrepid Ibex Release Party“` sebagai salah satu pemateri, dimana penulis diminta membawakan materi `“Membangun Repository Lokal”`. Penulis mendemokan cara membuat repository lokal Ubuntu 8.10 Intrepid Ibex dari image DVD yang masih berbentuk file ISO.
Penulis sengaja tidak membahas bagaimana menggunakan DVD Repository ataupun Server Repository di Internet, karena sudah banyak artikel yang membahasnya.

Nah..! sesuai dengan janji penulis kepada para peserta, berikut ini adalah langkah demi langkah membangun repository Lokal Ubuntu 8.10 Menggunakan file ISO dari materi yang penulis sampaikan kemarin ....silakan disimak.

* Menggunakan Terminal
    1. Buka terminal lalu login sebagai root
        ```
        #sudo su

        ```
    1. Kemudian buatlah 6 direktori di folder /mnt
        ```
        #mkdir -p /mnt/repository/DVD1 dan seterusnya sampai DVD6

        ```
    1. Masuk ke direktori tempat file ISO berada, lalu mount repository ISO ke direktori yang sudah dibuat tadi
        ```
        #mount -o loop -t iso9660 ubuntu-8.10-repository-i386-1r2_contrib.iso /mnt/repository/DVD1

        ```
    1. Tambahkan baris berikut di /etc/apt/sources.list
        ```
        #gedit /etc/apt/sources.list

        ```
        Ketikkan semua baris dibawah ini:
        ```
        deb file://mnt/repository/DVD1 intrepid main restricted
        deb file://mnt/repository/DVD2 intrepid main restricted multiverse
        deb file://mnt/repository/DVD3 intrepid universe
        deb file://mnt/repository/DVD4 intrepid universe
        deb file://mnt/repository/DVD5 intrepid universe
        deb file://mnt/repository/DVD6 intrepid universe
        ```
    1. Sekarang cobalah menginstall sebuah paket ubuntu
        ```
        #apt-get install xmms

        ```

* Menggunakan Synaptic Package Manager:
    1. Buka menu: `System -> Administration -> Synaptic Package Manager`
    1. Pilih menu: `Settings -> Repositories`
    1. Pilih tab `“Third-Party Software”`
    1. Pilih `“Add”`
    1. Masukkan baris seperti yang sudah dibahas di atas
        ```
        deb file://mnt/repository/DVD1 intrepid main restricted
        ```
    1. Klik `“Add”` lagi, lalu isikan baris berikutnya. Lakukan langkah ini hingga semua baris tersebut selesai anda masukkan.
    1. Klik `“Close”`
    1. Klik `“Reload”` pada ikon di sebelah kiri atas untuk mengindeks paket, setelah itu anda dapat menginstall paket yang diperlukan.
    1. Setelah selesai menginstall paket yang ada, jangan lupa untuk meng-umount file ISOnya.
        <br>
        `#umount /mnt/repository/DVD1` dan seterusnya sampai selesai.

Good Luck....