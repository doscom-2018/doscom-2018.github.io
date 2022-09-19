### **Anyremote untuk Remot Komputer**
_ulilupil | 25/04/2011 | 5 comments_

Ingin melakukan presentasi secara singlefighter? Tapi nggak usah repot bolak balik menuju laptop untuk mengganti slide.  Pada artikel ini penulis akan sharing dengan para pembaca setia doscom.org ini khususnya pecinta open sorce software tentang bagaimana cara meremote komputer desktop kita dengan hanya menggunakan sebuah handphone. Supaya gampang handphone kita sebut saja hp (bukan merk),

Senjata yang kita gunakan cukup bluetooth dan 2 buah aplikasi saja, tidak butuh nuklir, granat, atau sejenisnya, hehe.. :-). Bluetooth digunakan untuk mengoneksikan antara hp dan komputer kita. Sedangkan 2 aplikasi itu masing masing dipasang pada hp dan komputer. Sebelumnya penulis memperingatkan sekali lagi bahwa aplikasi yang digunakan adalah aplikasi yang open source dan menggunakan sistem operasi linux.

O iya, nama aplikasi yang digunakan adalah anyremote (dipasang pada hp) dan ganyremote (dipasang pada komputer)

oke, let’s play

pertama kita download aplikasi anyremote yang akan dipasang pada hape [disini](http://anyremote.sourceforge.net/dload.html).O iya hp yang digunakan jangan hape jadul apalagi hp itu layarnya masih monochrome dan monoponic, minimal yang sudah dapat diisi aplikasi java lah. Pada praktik ini, penulis menggunakan hp nokia 5730 XpressMusic dan sistem operasi Ubuntu 10.04. Jangan lupa file yang di download diinstall terlebih dahulu di hp.


langkah kedua yang dilakukan adalah mengistall anyremote yang bisa didapatkan di paket repository. Caranya cukup masuk ke terminal-console, masuk sebagai root dan install ganyremote dengan cukup mengetikkan “sudo apt-get install ganyremote” (tanpa tanda petik ya,,,)

Setelah semua terinstall pada masing2 device saatnya menjalankan program dan pamer kepada teman-teman.

Kalau masih belum tau cara menjalankannya mari kita lanjutkan pembahasannya

Buka semua aplikasi tadi yang sudah diinstall. aplikasi ganyremote dapat ditemukan di applications –> accessories –> ganyremote dan buka juga anyremote pada hp.
<p align="center">
	<img src="./posts/2011-04-25-anyremote-untuk-remot-komputer/anyremote.png" height="250px" alt="anyremote">
</p> 

Setelah aplikasi ganyremote dibuka akan muncul icon di sisi kanan atas.
<p align="center">
	<img src="./assets/noimg.jpg" height="250px" alt="ganyremote">
</p> 

klik icon ganyremote dan setting pengaturannya

Pengaturannya dengan mengklik Setup –> Preferences. Setelah terbuka kolom pengaturannya, pastikan pada bagian tulisan All tercentang.
<p align="center">
	<img src="./assets/noimg.jpg" height="250px" alt="centang all">
</p> 

Setelah klik OK akan muncul pilihan aplikasi yang akan di remote dari hp. Pilih aplikasi atau software yang pada kolom Mode bertuliskan Server. kemudian klik Start
<p align="center">
	<img src="./assets/noimg.jpg" height="250px" alt="noimg">
</p> 

Cara setting pengaturan pada hp yaitu dengan membuka anyremote kemudian pilih option –> ENTER BT address dan masukkan 12 digit alamat bluetooth komputer contohnya 00242CFEA592:19.

Cara melihat alamat bluetooth komputer dengan mengetikkan “sudo hcitool dev” (tanpa tanda petik) pada terminal-console.

oke selamat mencoba. dengan begini presentasi menjadi lebih mudah dan nyaman :)
