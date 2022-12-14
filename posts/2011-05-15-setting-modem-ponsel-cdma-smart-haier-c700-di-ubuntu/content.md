#### Setting Modem Ponsel CDMA Smart Haier C700 di Ubuntu
_Jolt | 15/05/2011 | 6 comments_

<div align="center">
	<img src="./posts/2011-05-15-setting-modem-ponsel-cdma-smart-haier-c700-di-ubuntu/1.png" height="250px" alt="img">
</div> 

Modem Smart Haier C700 merupakan modem ponsel CDMA yang hadir di Indonesia. Dengan pemasaran dan paket internet yang tergolong murah, smart cukup dapat menguasai pasar di Indonesia. Ya, saya juga memakai modem ini untuk koneksi internet pribadi saya. Dan modem ini memang bisa diandalkan hanya saja kekurangannya dalam hal sinyal yang sedikit sulit.

Baiklah, langsung saja, tutorial ini berisi bagaimana mensetting modem Smart Haier C700 di linux. Linux yang saya pakai adalah Ubuntu 10.04. Oke, tanpa basa-basi langsung saja menuju langkahnya.

Langkah pertama setelah modem terpasang ke komputer adalah mengeceknya dengan cara menjalankan perintah,
```
haris-eka@Fixer-Prime:~$ lsusb
Bus 008 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 007 Device 002: ID 0a12:0001 Cambridge Silicon Radio, Ltd Bluetooth Dongle (HCI mode)
Bus 007 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 006 Device 004: ID 05c6:9004 Qualcomm, Inc.
Bus 006 Device 002: ID 046d:c058 Logitech, Inc.
Bus 006 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 005 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 04f2:b071 Chicony Electronics Co., Ltd 2.0M UVC Webcam / CNF7129
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
haris-eka@Fixer-Prime:~$
```

Dari langkah tersebut kita dapatkan dua informasi penting,
```
Bus 006 Device 004: ID 05c6:9004 Qualcomm, Inc.
```

Qualcomm, Inc. adalah nama perusahaan pembuat modemnya. Nah, informasi pentingnya adalah kode 05c6:9004. Kode 05c6 adalah vendor ID, sedangkan 9004 adalah product ID.

Seperti kita ketahui, modem ini tidak bisa terdeteksi langsung oleh sistem. Maka dari itu dua ID inilah yang kita perlukan untuk mengenalkan modem kepada sistem yaitu dengan menjalankan perintah,
note: perintah ini dijalankan setiap kali kita menyalakan komputer
```
haris-eka@Fixer-Prime:~$ sudo modprobe usbserial -v vendor=0x05c6 product=0×9004
```

Sampai disini modem kita sudah dikenali oleh sistem dan siap digunakan. Langkah selanjutnya yang perlu kita lakukan adalah mensetting dialer. Ada dua cara yang bisa kita lakukan yaitu dengan menggunakan wvdial atau menggunakan dialer yang disediakan pada setting Network Connection. Saya akan coba jelaskan menggunakan keduanya.

Yang pertama melalui network connection

1. Masuk ke System -> Preference -> Network Connections.
2. Pilih tab “Mobile Broadband”, lalu klik “add” untuk menambah koneksi baru.
3. Jika modem sudah terdeteksi dengan benar seharusnya disini terdeteksi “Smart CDMA Technologies MSM”, kemudian pilih “Forward”.
4. Pilihan negara pilih Indonesia.
5. Pada pemilihan Provider Pilih pada bagian “I can’t find my provider….” lalu ketikkan “smart” pada box provider.
6. Selesai dan klik “Aplly”, akan muncul “smart connection 1″ pada tab mobile broadband.
7. Selanjutnya setting username dan password untuk dial up. Pilih “smart connection 1″ dan klik “edit”.
8. Isikan “smart” tanpa tanda kutip, pada kolom username dan password. Selanjutnya klik “Apply”. Semua setting sudah selesai. Tinggal mengkoneksikan modem ke internet. Caranya klik icon network pada system notification, kemudian pilih “smart connection 1″, tunggu beberapa saat dan, anda telah terhubung ke internet.

<div align="center">
	<img src="./posts/2011-05-15-setting-modem-ponsel-cdma-smart-haier-c700-di-ubuntu/2.png" height="350px" alt="img">
</div> 
<br>
<div align="center">
	<img src="./posts/2011-05-15-setting-modem-ponsel-cdma-smart-haier-c700-di-ubuntu/3.png" height="300px" alt="img">
</div> 