### **Mengembalikan boot loader GRUB sehabis install ulang OS Windows**
_Diposting oleh Dinus Open Source Community di 22.14 . Senin, 05 Mei 2008_
<br>
Label: Boot Loader, Tutorial

Trik yang akan dibahas dibawah ini hanya berlaku pada boot loader GRUB, bagi yang menggunakan boot loader LILO ditunggu ya artikel selanjutnya.

Para calon linuxer yang baru terjun ke dunia GNU/Linux, kebanyakan selama ini masih menggunakan dua operasi sistem yaitu Windows (alasannya masih terikat MOU pembajakan :p) dan sistem operasi GNU/Linux. GNU/Linux hanya dipake sebagai pembelajaran “hit and run” (istilah kerennya anak-anak DOSCOM) yang mana para calon pengantin (eh…. sorry calon linuxer :D) tersebut akan kembali ke default penggunaan sistem operasinya bilamana mengalami kebingungan dalam mengoperasikan GNU/Linux.

Terkadang yang paling membingungkan lagi pada saat mengistall ulang sistem operasi Windows yang sedang mengalami trouble, default boot loader GRUB yang ada secara otomatis tertimpa dengan boot loadernya Windows sehingga pada saat booting akan langsung masuk ke sistem operasi Windows.

Dengan kondisi seperti yang sudah dijelaskan diatas, kebanyakan para calon linuxer tersebut menjadi putus asa dan kepengen gantung diri (just kidding :D). Tanpa mau berpikir panjang lalu mengambil jalan pintas yaitu menginstall ulang juga sistem operasi GNU/Linuxnya. Padahal ada triknya loh untuk mengembalikan boot loader GRUB yang hilang tersebut.

Mari kita simak langkah-langkahnya:

* Bootinglah sistem komputer anda dengan menggunakan distro live cd GNU/Linux
* (bisa Ubuntu, PcLinuxOS, Knoppix ataupun live cd GNU/Linux lainnya).
* Tetapi dalam trik ini, penulis menggunakan distro Ubuntu.

* setelah masuk ke desktop Ubuntu, buka aplikasi `”terminal”` yang terdapat di
* menu: `Applications > Accessories > Terminal
`
* Ketikkan perintah ”`sudo su`” (tanpa tanda petik)

* Kemudian ketik ”`grub`”

* Pada menu grub ketik ”`root (hd0,1)`” dan tekan enter.
* Yang harus di perhatikan:

    * Angka 1 sehabis parameter hd0, merupakan letak partisi ubuntu penulis. Maka dari itu, sebelumnya pastikan dulu dimana letak partisi GNU/Linux anda.

    * Didalam boot loader GRUB umunnya angka partisi harddisk akan dikurangi 1
    * seperti: `(hd0,1)` yang mana hd0 merupakan pemetaan dari hda sebagai harddisk primary.
    * Sedangkan angka `1` diakhir `hd0`, adalah pemetaan dari partisi ke dua yang sudah dikurangi 1. Jadi, apabila GNU/Linux anda di install pada partisi 5 maka akan di identifikasi GRUB sebagai partisi `(hd0,4)`, dan ini berlaku untuk semua partisi lainnya.

* Lalu masukkan perintah ”`setup (hd0)`” dimana secara otomatis akan mengistall
* boot loader GRUB pada Master Boot Record.

* Kemudian ketik ”`quit`” lalu boot ulang PC anda dan lihat hasilnya.

Semoga artikel ini dapat membantu para calon linuxer yang mengalami masalah pada boot loader GRUBnya.

VIVA Open Source Software