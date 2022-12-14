#### Hotspot Lokal Dinus Open Source Community
_Diposting oleh Dinus Open Source Community di 16.15 . Senin, 28 Desember 2009_
<br>
Label: Repository, Tutorial

<div align="center">
	<img src="./posts/2009-12-28-hotspot-lokal-dinus-open-source/wifi.png" height="250px" alt="img">
</div> 

Jika rekan-rekan Linuxer yang ingin mendapatkan distro Linux dan repository Ubuntu 9.10, silakan datang dan download sendiri di Jaringan Hotspot lokal yang telah dibangun oleh kami. Lokasi kantin kampus Universitas Dian Nuswantoro Semarang.

Langkah-langkahnya sebagai berikut :


##### MENDOWNLOAD DISTRO LINUX

* Menggunakan Browser:

    1. Koneksikan wireless Anda ke HotSpot dengan ESSID "`DOSCOM1`"
    1. Kemudian buka aplikasi browser (Firefox / Chrome / Opera) dan masukkan alamat <http://www.doscom.net/src/iso>

* Menggunakan FTP:

    1. Koneksikan wireless Anda ke HotSpot dengan ESSID "`DOSCOM1`"
    1. Kemudian buka aplikasi FTP client ([Filezilla](http://filezilla-project.org/download.php)) dan masukkan alamat host = `ftp.doscom.net`, username = `anonymous`, password = `anonymous`, port = `21`

##### MENGGUNAKAN REPOSITORY LOKAL

* Synaptic Package Manager:

    1. Buka `System -> Administration -> Synaptic Package Manager`
    1. Pilih `Settings -> Repositories`
    1. Pilih tab “`Other Software`”
    1. Hilangkan centangan untuk sumber-sumber repository dari internet dan CD-ROM pada Tab `Other Software`.
    1. Pilih “`Add`”
    1. Masukkan baris dibawah ini:
        <br>
        Code:
        ```
        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo1  karmic main restricted
        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo2  karmic main restricted multiverse
        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo3  karmic universe
        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo4  karmic universe
        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo5  karmic universe
        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo6  karmic universe
        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo7  karmic universe

        ```

    1. Klik “`Add`” lagi, lalu isikan baris berikutnya. Lakukan langkah ini hingga semua baris tersebut selesai anda masukkan.
    1. Klik “`Close`”
    1. Klik “`Reload`” pada ikon di sebelah kiri atas
    <br>
    > Penjelasan:
    > <http://www.doscom.net> adalah alamat Web Server lokal DOSCOM. Anda juga bisa menggunakan alamat IP `172.16.10.1` sebagai alamat penganti DNS.

* Terminal

    1. Buka terminal lalu login sebagai root
        <br>
        Code:
        ```
        sudo su
        ```

    1. Sebelumnya backup dulu source.list dan buat dengan yang baru.
        <br>
        Code:
        ```
        mv /etc/apt/sources.list /etc/apt/source.list-backup
        touch /etc/apt/source.list
        ```

    1. Tambahkan baris berikut di /etc/apt/sources.list
        <br>
        Code:
        ```
        gedit /etc/apt/sources.list

        #Ketikkan semua baris dibawah ini:

        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo1  karmic main restricted
        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo2  karmic main restricted multiverse
        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo3  karmic universe
        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo4  karmic universe
        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo5  karmic universe
        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo6  karmic universe
        deb  http://www.doscom.net/src/repository/ubuntu/ubuntu9.10/repo7  karmic universe
        ```

Semoga berhasil kawan..!!!

> Informasi:
> Jaringan hotspot kami masih dalam proses pengembangan, untuk itu kami mohon kerjasamanya untuk merawat jaringan tersebut.
Kritik dan saran bisa di alamatkan ke `sekretariat@doscom.org` atau dengan meninggalkan komentar di posting ini.


##### Open Your Mind Use Open Source Software