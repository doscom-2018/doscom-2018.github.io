### **Goohost, Aplikasi untuk Ekstrak Domain dan Subdomain**
_Posted by bebekgoreng on 26/05/2011_

**Goohost**, adalah sebuah shell script sederhana yang ditulis oleh Watakushi untuk mengekstrak host / subdomain, ip dan email untuk domain tertentu dengan pencarian Google. Oke, pertama siapkan dulu alat dan bahannya ya,

<br>
**Alat dan bahan**
1. sudah menginstall aplikasi terminal
2. sudah menginstall aplikasi wget,
3. penulis memakai distro bt5 sebagai percobaan

Untuk no.1 aplikasi terminal, “biasanya” suda ada sewaktu anda menginstall “distro” apapun. Bagi yang belum menginstall wget install dulu melalui terminal.
```
$ sudo apt-get install wget
masukkan password
```

Cara install nya, pertama, masuk sebagai root lalu buatlah sebuah direktori untuk instalasi
```
$ mkdir -p /xxx/xxxx
```

Contoh punya saya di lokasi `”/pentest/enumeration/google/goohost“`

Kemudian pindah direktori ke direktori target instalasi,

Contoh punya saya di lokasi `“/pentest/enumeration/google/goohost“`
maka perintahnya,
```
$ cd /pentest/enumeration/google/goohost
```

Download aplikasinya, dengan aplikasi wget*,
```
$ wget http://dl.dropbox.com/u/10761700/goohost.sh
```

Ubah permissionnya
```
$ chmod +x goohost.sh
```

Nah, aplikasi goohost sudah terinstal bro. Sekarang cara penggunaannya.

Masuk sebagai root, lalu pindah ke folder instalasi tadi. Kalau punya saya
```
cd /pentest/enumeration/google/goohost
```

syntax yang digunakan goohost yaitu
```
$ ./goohost.sh -t domain.tld [-m -p <1-20> -v]
```

<br>
**pilihan penggunaan**

* **-t**
    <br>
    misal $ ./goohost.sh -t domaintarget.xxx

* **-m** 
    <br>
    method:

    default nya adalah host

    host: raw google hosts and subdomains search

    ip: raw google hosts and subdomains search and performs a reverse DNS resolution

    mail: raw google email search

* **-p**
    <br>
    maximal jumlah halaman (1-20) untuk mendownload dari google

    defaultnya 5

* **-v**
    <br>
    verbosity

<br>
berikut ini beberapa contoh metode yang penulis lakukan

**untuk metode ip**
<div align="center">
	<img src="./posts/2011-05-26-goohost-aplikasi-untuk-ekstrak-domain-dan-subdomain/1.png" height="350px" alt="img">
</div> 
```
./goohost.sh -m ip -t doscom.org
```
lalu file nya akan tersimpan dgn nama *ini nomor report yang dialami penulis, hasil akan berbeda saat anda mencoba*
```
>> Results saved in file report-24313-doscom.org.txt
```

**untuk metode host**
<div align="center">
	<img src="./posts/2011-05-26-goohost-aplikasi-untuk-ekstrak-domain-dan-subdomain/2.png" height="350px" alt="img">
</div> 
```
$ ./goohost.sh -m host -t doscom.org
```
lalu file akan tersimpan dgn nama
```
>> Results saved in file report-18290-doscom.org.txt
```

Selamat mencoba :)
