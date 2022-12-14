#### Mengamankan Boot Loader
_Diposting oleh Eligio Moniz do Rego di 15.00 . Kamis, 04 September 2008_
<br>
Label: Boot Loader, Tutorial

Halo Linuxer! kali ini saya akan memberikan trik bagaimana mengamankan Boot Loader dengan password. Boot Loader digunakan untuk memanggil konfigurasi program untuk dijalankan sewaktu booting. Pada Sistem Operasi Linux, terdapat dua boot loader yang cukup terkenal yaitu GRUB dan LILO.
Alasan untuk apa mengamankan Boot Loader adalah untuk membatasi user jahil mencuri password root serta mengacak-acak sistem anda. Demi alasan tersebut di atas, maka perlu sekali kita memproteksi boot loader sistem kita agar terhindar dari upaya jahil user yang tidak bertanggung jawab tersebut.

Berikut ini akibat yang akan terjadi apabila boot loader kita tidak diproteksi :

* User jahil bisa masuk dengan modus single user.
    Single user di sini maksudnya seorang yang login pertama kali, maka otomatis akan menjadi root. Dengan hanya mengetikkan linux -s atau single pada prompt boot loader, maka user tersebut otomatis menjadi root.
* User jahil bisa saja masuk ke opsi booting yang lain. Apabila pada komputer anda menggunakan dual boot (Windows atau lainnya) maka bisa saja user yang tidak bertanggung dapat masuk ke sistem operasi lain (misalnya Windows), sehingga dapat mengacak-acak komputer (tetunya dengan bantuan program yang lain).


Untuk itu lebih baik kita mewaspadai lebih dini.

Mari kita simak langkah-langkah mengamankan Boot Loader yang penulis praktekan dengan distro Ubuntu 8.04 (Hardy Heron).

<br>
**Memberi Password pada GRUB.**

Untuk memberi password pada GRUB.

1. Buka terminal atau konsol (kalau di ubuntu bisa dibuka melalui `Applications -> Accessories -> Terminal`). 
2. kemudian ketikkan perintah berikut
    <br>
    ```
    sudo grub-md5-crypt                 (Perintah untuk membuat password)
    [sudo] password for ebix:          (Masukkan password login)
    password:                                   (Masukkan password yang akan dibuat)
    retype password:                        (Masukkan password sekali lagi)
    $1$7W1vd$EIWmCdI03mb5ggydiP/t.. (Password hasil enkripsi)
    password yang penulis gunakan adalah rahasia. Password tersebut akan dienkripsi menggunakan algoritma MD5 sehingga menjadi $1$7W1vd$EIWmCdI03mb5ggydiP/t..
    ```

3. Salin hasil enkripsi tersebut ke editor teks misal vim, lalu buka file konfigurasi GRUB dengan perintah seperti di bawah ini:
    <br>
    ```
    vim /boot/grub/menu.lst
    
    ```
    tambahkan sebuah baris berikut dibawah baris "`timeout=10`" :
    ```
    password --md5 $1$7W1vd$EIWmCdI03mb5ggydiP/t.. (Password hasil enkripsi).

    ```
    simpan hasil perubahan tersebut dengan menekan tombol "esc" pada keyboard anda diikuti dengan perintah `:wq`.
4. Jika semua konfigurasi sudah dilalukan dengan benar, reboot komputer anda.
    Ketika GRUB tampil waktu booting, coba ketik huruf "e" terlebih dahulu. Coba lihat apakah GRUB meminta anda untuk memasukkan password. Jika iya! ketikkan huruf "p" kemudian masukkan password untuk masuk ke editor GRUB.


Namun, pengamanan seperti diatas masih tidak cukup karena bisa saja user masuk ke opsi booting yang lain yaitu masuk ke opsi booting Windows jika menggunakan dual boot. Agar user tidak dapat masuk ke Windows, tambahkan kata 'lock' di bawah chainloader +1 seperti contoh dibawah ini :
    ```
    title Windows XP
    root (hd0,0)
    savedefault
    makeactive
    chainloader +1
    lock
    ```
Reboot kembali pc Anda. Pada menu GRUB, pindah kursor ke Windows, maka proses booting akan terhenti sebelum anda menekan tombol 'p' pada GRUB dan memasukkan password. Jika hanya memasukkan kata lock saja, maka untuk masuk ke windows harus menggunakan password yang dipakai untuk mengedit GRUB.
Untuk membuat agar waktu masuk ke Windows menggunakan password yang berbeda dengan password yang dipakai untuk masuk kedalam editor GRUB, buatlah password terpisah dengan memanfaatkan perintah grub-md5-crypt seperti langkah-lagkah yang sudah dibahas diatas, dan tambahkan argumen password --md5 (password yang dienkripsi) di bawah `chainloader +1` pada file konfigurasi GRUB yang terletak di `/boot/grub/menu.lst` tersebut.
Lihat contoh dibawah ini:
```
title
root (hd0,0)
savedefault
makeactive
chainloader +1
password --md5 $1$HEFvd$rS5cAybU1RM.Da.TpMrqT.
```

Kemudian simpan file konfigurasi GRUB dan reboot kembali pc anda, setelah itu coba masuk ke dalam sistem operasi Windows.

<br>
**Password pada LILO**

1. Buka file /etc/lilo.conf dengan menggunakan editor vim.
2. Tambahkan baris "password" dibawah image=/boot/vmlinux- :
    <br>
    ```
    password=(password_anda)
    restricted

    ```
3. Setelah anda mengedit file lilo.conf, jalankan perintah `/sbin/lilo -v`


Semoga trik ini dapat sedikit membantu dalam mengamankan sistem komputer Anda...!!!


<br><br>

---------------------------------------------------------------------------------------
<div align="center">
    <b>***Open Your Mind Use Open Source Software***</b>
</div>
------------------------------------------------------------------------------------------