#### Mengatur Repository pada White Tea
_Mauren Fitri I.D | 07/04/2011 | 1 comment_

Nah, karena sementara ini TeaLinuxOS masih belum punya repository sendiri maka dari itu kita numpang dulu ya pakai punya ubuntu. Dan karena repositorynya belum bisa dirubah melalui synaptic, kita pakai cara manual dulu ya.. :)

Masuk terminal, jalankan perintah berikut :
```
sudo gedit /etc/apt/sources.list
```
ganti semuanya yang ada didalam file sources.list dan dengan yang dibawah ini
```
deb http://dl2.foss-id.web.id/ubuntu/ maverick main restricted universe multiverse

deb-src http://dl2.foss-id.web.id/ubuntu/ maverick main restricted universe multiverse

deb http://dl2.foss-id.web.id/ubuntu/ maverick-updates main restricted universe multiverse

deb-src http://dl2.foss-id.web.id/ubuntu/ maverick-updates main restricted universe multiverse

deb http://dl2.foss-id.web.id/ubuntu/ maverick-security main restricted universe multiverse

deb-src http://dl2.foss-id.web.id/ubuntu/ maverick-security main restricted universe multiverse
```

Selanjutnya, save lalu exit.

Lalu jangan lupa update repositorynya. Yang ini harus online lhoh :)
```
sudo apt-get update
```

Nah, kalau sudah selesai baru temen2 bisa nginstall aplikasi dari synaptic atau pun terminal.

Sekian dari kami, doain repository kami bisa segera rilis ya temans :)