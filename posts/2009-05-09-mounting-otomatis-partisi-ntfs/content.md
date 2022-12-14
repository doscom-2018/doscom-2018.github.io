#### Mounting Otomatis Partisi NTFS
_Diposting oleh Eligio Moniz do Rego di 19.53 . Sabtu, 09 Mei 2009_
<br>
Label: File System, Linux, Tutorial

Jika sistem komputer Anda di buat dual booting Windows dan Ubuntu, secara default partisi NTFS tidak dapat di mount secara otomatis saat Anda ingin mengaksesnya dari desktop Ubuntu.
Untuk masuk ke dalam partisi NTFS, yang harus Anda lakukan adalah dengan membuka Nautilus (File Manager) dan klik pada partisi NTFS tersebut, lalu masukkan password untuk mengaksesnya.

Cara terbaik untuk bekerja di lingkungan desktop Ubuntu adalah dengan membuat partisi NTFS di mount secara otomatis pada waktu Ubuntu di boot. Untuk melakukan itu, yang perlu kita lakukan adalah mengedit file `fstab` yang terletak di direktori `/etc/`.

Let's start

1. Buka Terminal melalui menu: `Applications → Accessories → Terminal`
1. Cari tahu letak partisi NTFS
    ```
    $ sudo fdisk -l | grep NTFS

    /dev/sda1       *       1               3825        30724281       7       HPFS/NTFS
    /dev/sda8              7730         12828       40957686       7       HPFS/NTFS
    /dev/sda9              12829       16652       30716248+    7       HPFS/NTFS
    /dev/sda10            16653       19457       22531131       7       HPFS/NTFS
    ```
    yang tampil di atas terlihat bahwa letak partisi NTFS penulis berada di partisi `/dev/sda1, /dev/sda8, /dev/sda9, dan /dev/sda10`
1. Buat direktori untuk tujuan mounting partisi NTFS tersebut
    <br>
    misalnya:
    ```
    $ sudo  mkdir  /media/win_c
    $ sudo  mkdir  /media/win_d
    $ sudo  mkdir  /media/win_e
    $ sudo  mkdir  /media/win_f
    ```
1. Edit file /etc/fstab
    ```
    $ sudo gedit /etc/fstab

    ```
    Tambahkan baris berikut ini:
    ```
    /dev/sda1     /media/win_c       ntfs-3g     defaults,force      0     0
    /dev/sda8     /media/win_d      ntfs-3g     defaults,force      0     0
    /dev/sda9     /media/win_e      ntfs-3g     defaults,force      0     0
    /dev/sda10     /media/win_f     ntfs-3g     defaults,force      0     0

    ```
    > **Catatan:**
    > ntfs-3g adalah driver yang digunakan untuk bisa melakukan mounting read/write pada partisi dengan filesystem NTFS.
1. Simpan hasil editan tersebut, kemudian tutup aplikasi gedit. Kemudian restart PC dan lihat hasilnya.