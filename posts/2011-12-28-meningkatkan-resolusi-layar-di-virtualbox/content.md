#### Meningkatkan Resolusi layar di VirtualBox
_Unix.abud | 28/12/2011 | 2 comments_

Langsung Aja ya gan.. Kemaren ane mo coba install Backtrack 5.0 di virtual box pada OS Window’s. mengapa ane pake virtual box?? karena pertama Wind0w$ ane Licensi Resmi, Kedua Ram + Proc Laptop ane sudah mumpuni untuk virtualisai (intel Core i3 & ram 4GB DDR3), dan yang ketiga semakin banyak tool yang bisa kepake, karena terkadang banyak tool hacking & security yang tidak ada di linux tapi bisa jalan diwindow$ ataupun sebaliknya bisa jalan di linux tetapi tidak bisa jalan di window$
<p align="center">
	<img src="./posts/2011-12-28-meningkatkan-resolusi-layar-di-virtualbox/1.png" height="250px" alt="BT11">
</p> 

yang jadi kendala, hanya saja pada OS Backtrack dimana corenya ubuntu 10.04 hanya bisa mencapai resolusi 800 X 600 dan berlaku juga pada semua OS termasuk window$. sehingga akan terasa kurang nyaman apabila virtualisasinya menggunakan GUI.
<p align="center">
	<img src="./posts/2011-12-28-meningkatkan-resolusi-layar-di-virtualbox/2.png" height="250px" alt="Resolusi 800 X 600">
</p> 

untuk itu maka dengan menggunakan tutorial dibawah ini maka resolusi anda akan dapat menyesuaiakn sesuai ukuran layar virtualbox. langsung saja, berikut tutorialnya.. Install OS BackTrack anda pada virtual box. (Saya anggap sudah bisa), jika belum silahkan tanya pada simbah. Setelah Install Selesai, `reboot` lalu jalankan OSnya

edit file source.lst dengan mengetik
```
nano /etc/apt/source.lst
```

tambahkan baris berikut
```
deb http://archive.ubuntu.com/ubuntu lucid main universe restricted multiverse
```

simpan dengan cara klik `ctrl + x` lalu tekan `Y`, setelah itu update source list dengan mengetik
```
apt-get update

apt-get install dkms build-essential linux-headers-generic

reboot
```

setelah OS Virtualisasi kembali aktif, masuk login OS BackTrack lalu ketik `startx`

untuk masuk modus GUI. setelah selesai, Pilih menu `Device` pada virtual box lalu

klik install `Guest Addition` sehingga akan keluar log `CD VBOXADDITION`
<p align="center">
	<img src="./posts/2011-12-28-meningkatkan-resolusi-layar-di-virtualbox/3.png" height="250px" alt="img">
</p> 

setelah itu akan muncul autorun system klik `run` untuk menjalankan script instalasi,lalu tunggu proses. jika selesai maka otomatis OS virtualisasi akan reboot.

setelah OS kembali jalan silahkan login dan masuk modus GUI BackTrack anda, dan #engingeng maka resolusi OS virtualisasi akan mengikuti ukuran layar anda..
<p align="center">
	<img src="./posts/2011-12-28-meningkatkan-resolusi-layar-di-virtualbox/4.png" height="250px" alt="resolusi 1024 X 768 (standard beberapa monitor)">
</p> 

<p align="center">
	<img src="./posts/2011-12-28-meningkatkan-resolusi-layar-di-virtualbox/5.png" height="250px" alt="resolusi 1366 x 674 (menyesuaikan ukuran)">
</p> 


Untuk membuat menjadi fullscreen tekan CTRL + F, maka seakan2 OS BackTrack Anda akan terinstall penuh di komputer Anda.
<p align="center">
	<img src="./posts/2011-12-28-meningkatkan-resolusi-layar-di-virtualbox/6.jpg" height="300px" alt="modus Fullscreenn">
</p> 


**Note** : jika proses auto run tidak berhasil, maka anda bisa menggunakan cara berikut. lakukan instalasi dkms build-essential linux-headers-generic seperti cara diatas

lalu buka terminal masuk kedirektori pada CD tersebut.
```
cd /media/VBOXAddition (sesuaikan pada PC masing2)

sh ./VBoxLinuxAdditions.run
```

tunggu proses instalisasi, lalu klik **yes** setelah selesai, **reboot**


<br>
source : <http://cektkp.com/doscom1>

<br>
<br>
“Share Knowledge is fun”