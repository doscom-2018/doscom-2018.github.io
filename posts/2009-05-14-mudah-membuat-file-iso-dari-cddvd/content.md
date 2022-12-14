#### Mudah Membuat file ISO dari CD/DVD dengan Terminal/Konsol
_Diposting oleh Eligio Moniz do Rego di 19.45 . Kamis, 14 Mei 2009_
<br>
Label: Fedora, File System, Tutorial, Ubuntu

Apakah rekan-rekan ingin mengetahui bagaimana cara membuat file .ISO dari CD/DVD di Linux?
Caranya cukup gampang, ikut saja langkah-langkahnya berikut ini:

* Masukkan CD/DVD yang hendak dibuat file ISO-nya ke drive CD/DVD-ROM.
* Buka Terminal/Konsol
    * Ubuntu:
        ```
        Applications -> Accessories -> Terminal
        ```
    * Fedora:
        ```
        Applications -> System Tools -> Terminal
        ```
* Lalu masukkan perintah berikut ini:
    <br>
    contoh:
    ```
    dd if=/dev/cdrom of=/home/ebyx84/backup.iso
    ```

* Tunggu hingga proses backup-nya selesai.

    **Catatan:**
    ```
    /dev/cdrom = Lokasi drive CD/DVD-ROM
    /home/ebyx84 = Merupakan folder/direktori letak file ISO yang akan di simpan. Sesuaikan dengan letak direktori Anda.
    backup.iso = Nama file beserta ekstensinya.
    ```

* File ISO yang sudah dibuat tersebut dapat di burning ke CD/DVD kapanpun Anda mau.

Semoga trik singkat ini bermanfaat.