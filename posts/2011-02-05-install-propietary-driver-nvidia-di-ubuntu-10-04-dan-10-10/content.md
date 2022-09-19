### **Install Propietary Driver nvidia di ubuntu 10.04 dan 10.10**
_Posted by masasdani on 05/02/2011_

<p align="center">
	<img src="./posts/2011-02-05-install-propietary-driver-nvidia-di-ubuntu-10-04-dan-10-10/nvidia_logo_3d-1024x768.jpg" height="350px" alt="img1">
</p> 

Sebelumnya saya sama sekali tidak memiliki kesulitan menginstall driver ATI maupun NVIDIA di ubuntu 9.10 ato TeaLinux 2.0. Karena anda bisa menggunakan third party software seperti Envyng. Namun, software envyng tersebut tidak bisa di install di ubuntu versi terbaru seperti 10.04 dan 10.10.

Setelah kampir sebulan yg lalu saya membeli PC yang berchipset NVIDIA, maka sangat tidak nyaman rasanya jika PC saya tidak dapat menampilkan tampilan compiz yang bagus, dan memainkan game-game 3d yang ada di linux.

Jadi seperti ini. Secara default, ubuntu 10.04 dan ubuntu 10.10 menggunakan driver nouveau yang merupakan open source driver untuk nvidia, permasalahannya, nouveau tersebut belum support sama Open GL. Jadi vitur 3d yang ada di Nvidia belum bisa berjalan. pertamakali download driver nvidia disini. Sesuaikan dengan tipe card yang anda miliki. untuk mengecek tipe vga anda, anda bisa membuka teminal dan mengetikkan :

```
lspci

```

setelah mendapatkan driver yang anda download di situs resmi nvidia tersebut.. selanjutnya anda harus meremove nouveau dengan cara (masih di terminal)

```
sudo apt-get purge xserver-xorg-video-nouveau

```

setelah itu restart.

jika anda sebelum masuk ke desktop ubuntu anda di hadapkan kepada peringatan ubuntu missing driver. maka anda langsung saja pilih console login. jika anda lansung menuju desktop. masuk ke console login dengan menekan

`ctrl+alt+f1`

login dengan user dan password..

matikan service gdm

```
sudo su
/etc/init.d/gdm stop
```

masuk ke direktory tempat driver tersebut.. misal jika ada di folder download

cd Download/

jalankan drivernya dengan

```
./NVIDIA-Linux-x86-260.19.29.run

```

ikuti proses instalasi sampai sukses.

daftarkan modulnya

```
modprobe nvidia
update setting Xorg.conf
nvidia-xconfig
reboot
```

setelah itu masuk ke desktop yang baru dan driver anda sudah dapat di jalankan. cek dengan mengaktifkan fitur visual effect atau anda dapat mengkonfigurasi nvidia anda dengan nvidia-setting.

nah setelah anda selesai menginstall driver nvidia, anda bisa menjalankan game game 3d yang ada di linux seperti sauerbraten, glest, urbanterror, warzone2100, dan lain-lain..

salam open source

Written by [masas dani](http://mexez.wordpress.com/). [Here](http://mexez.wordpress.com/2011/02/05/solved-install-propietary-driver-nvidia-di-ubuntu-10-04-dan-10-10/).
