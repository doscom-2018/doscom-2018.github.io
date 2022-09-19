### **Mewarnai Terminal**
_Haris Praba Aditya | 27/12/2011 | 2 comments_

<p align="center">
	<img src="./posts/2011-12-27-mewarnai-terminal/j01t@fixer-prime-_001.png" height="250px" alt="j01t@fixer-prime: ~$">
</p> 

Anda bekerja dengan Linux? Saya iya. Bagi banyak pengguna linux, terminal adalah hal yang sangat penting. Senjata pamungkas yang sangat sering digunakan karena sebagian pekerjaan kita dilakukan melalui terminal. Terminal adalah command line interface yang dimiliki oleh sistem operasi linux dan unix yang berisi semua perintah untuk menjalankan aplikasi apapun di komputer. Karena sebenarnya semua aktifitas yang kita lakukan berasal dari perintah di terminal.

Apa yang Anda bayangkan tentang terminal? Hitam-putih. Kebanyakan itu yang kita dengar. Tetapi tunggu dulu, kali ini saya akan share sedikit tips sederhana untuk membuat terminal di linux kita menjadi semakin ceria, mudah, berwarna, dan tentunya lebih enak di lihat.

Okelah, tanpa panjang lebar lagi mari kita menuju cara bagaimana mewarnai terminal. Mudah dan simple.

Pertama kita perlu merubah isi file .bashrc yang ada di home directory. Dengan perintah,
```
j01t@fixer-prime:~$ gedit .bashrc
```

untuk GUI, atau untuk CLI,
```
j01t@fixer-prime:~$ nano .bashrc
```

Kemudian cari kode,
```
#force_color_prompt=yes
```

kode tersebut masih diberi tanda # yang berarti sebuah komentar dan tidak akan dieksekusi oleh sistem. Cara untuk membuat terminal kita berwarna cukup kita hapus tanda hash (#) yang ada di depan kode, menjadi
```
force_color_prompt=yes
```

Silahkan save file tersebut. Kemudian silahkan buka terminal baru.

Diambil dari, <http://hope-hunter.blogspot.com/2011/12/mewarnai-terminal.html>