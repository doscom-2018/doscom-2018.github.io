#### Repo Lokal Ubuntu
_Posted by Masbudi.Net on Oct 23, 2012 in Distro, Repository, Tutorial, Ubuntu | 0 comments_

Sebenarnya Artikel2 semacam ini sudah banyak termasuk di archieve doscom.org, hanya saja yang ingin saya coba share disini, ketika kita menggunakan DVD repo lebih dari 8 buah, karena yang [masbudi](http://masbudi.net/) gunakan disini menggunakan Ubuntu 12.04 LTS yang memiliki DVD Repository sebanyak 11 buah ukuran file berkisa 43GB. mantebs kan gan..

langsung saja gan, pertama2 yang kita lakukan ialah memounting iso DVD repository tersebut menjadi sebuah direktory sehingga isi dari DVD tersebut bisa digunakan. tetapi sebelum ke arah situ kita harus mengedit sedikit grub loader. kenapa??
karena secara default ubuntu hanya bisa membuat device loop(ing) sebanyak 8 buah (0-7), bisa dilihat di file /dev/loop. dan untuk menambahnya kita harus mengatur grub melalui cara berikut
```
$sudo nano /etc/default/boot
```

pada CMD line ditambahan max_loop=24. bisa diatur sesuai kebutuhan

sebelum
```
GRUB_CMDLINE_LINUX_DEFAULT=”quiet splash”
```

sesudah
```
GRUB_CMDLINE_LINUX_DEFAULT=”quiet splash max_loop=24“
```

setelah selesai jalankan
```
$sudo update-grub
$sudo reboot
```

setelah reboot saatnya memounting ISO DVD
buat 11 direktory untuk memounting dengan perintah
```
$sudo su
#mkdir /mnt/disk1
#mkdir /mnt/disk2
#mkdir /mnt/disk3
#mkdir /mnt/disk4
#mkdir /mnt/disk5
#mkdir /mnt/disk6
#mkdir /mnt/disk7
#mkdir /mnt/disk8
#mkdir /mnt/disk9
#mkdir /mnt/disk10
#mkdir /mnt/disk11
```

Setelah selesai, mounting iso DVD ke direktori diatas
```
#mount -o loop -t iso9660 ubuntu-12.04-repository-i386-1_contrib.iso /mnt/disk1/
#mount -o loop -t iso9660 ubuntu-12.04-repository-i386-2_contrib.iso /mnt/disk2/
#mount -o loop -t iso9660 ubuntu-12.04-repository-i386-3_contrib.iso /mnt/disk3/
#mount -o loop -t iso9660 ubuntu-12.04-repository-i386-4_contrib.iso /mnt/disk4/
#mount -o loop -t iso9660 ubuntu-12.04-repository-i386-5_contrib.iso /mnt/disk5/
#mount -o loop -t iso9660 ubuntu-12.04-repository-i386-6_contrib.iso /mnt/disk6/
#mount -o loop -t iso9660 ubuntu-12.04-repository-i386-7_contrib.iso /mnt/disk7/
#mount -o loop -t iso9660 ubuntu-12.04-repository-i386-8_contrib.iso /mnt/disk8/
#mount -o loop -t iso9660 ubuntu-12.04-repository-i386-9_contrib.iso /mnt/disk9/
#mount -o loop -t iso9660 ubuntu-12.04-repository-i386-10_contrib.iso /mnt/disk10/
#mount -o loop -t iso9660 ubuntu-12.04-repository-i386-11_contrib.iso /mnt/disk11/
```

setelah selesai tinggal mengupdate /etc/apt/sources.list
```
#mv /etc/apt/sources.list /etc/apt/sources.list_backup
#nano /etc/apt/sources.list
```

isi dengan sources.list seperti berikut
```
deb file:///mnt/disk1 precise main multiverse restricted universe
deb file:///mnt/disk2 precise main multiverse restricted universe
deb file:///mnt/disk3 precise main multiverse restricted universe
deb file:///mnt/disk4 precise main multiverse restricted universe
deb file:///mnt/disk5 precise main multiverse restricted universe
deb file:///mnt/disk6 precise main multiverse restricted universe
deb file:///mnt/disk7 precise main multiverse restricted universe
deb file:///mnt/disk8 precise main multiverse restricted universe
deb file:///mnt/disk9 precise main multiverse restricted universe
deb file:///mnt/disk10 precise main multiverse restricted universe
deb file:///mnt/disk11 precise main multiverse partner restricted universe
```

setelah selesai, tinggal reload dengan perintah
```
apt-get update
```

tunggu sampe proses update list selesai, maka repository menggunakan iso DVD pun sudah dapat di gunakan…

nb: perlu di inget proses mounting ini hanya bersifat temporary, artinya apabila PC di restart maka proses mounting pun akan kembali normal, untuk itu juga ingin membuat secara otomatis bisa menambahkan mounting otomatis di file /etc/rc.local atau /etc/fstab

semoga bermanfaat..

<br>
<br>
<br>
thank’s to :
Motaro irhaby yang telah  memberi tahu cara menambah device looping yang tadinya maximal 8 looping menjadi lebih

artikel ini juga diterbitkan di : <http://www.masbudi.net/repo-lokal-iso-dvd-ubuntu/>

<br>
<br>
“Sharing Knowledge is fun”. :)