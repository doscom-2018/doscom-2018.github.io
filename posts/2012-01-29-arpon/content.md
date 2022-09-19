### **ARPON**
_Posted by mazumam on Jan 29, 2012_
<br>
in Networking, Tools Networking, Tutorial | 0 comments

<br>
**Apa itu ARP ?**

ARP merupakan kependekan dari Address Resolution Protocol yang dalam istilah komputer networking nya adalah sebuah metode untuk menemukan suatu host pada sebuah jaringan yang menterjemahkan sebuah logical address ( IP = internet Protocol ) kedalam sebuah Hardware Address atau lebih dikenal dengan MAC ( Media Access Control ) Address untuk mendukung komunikasi di dalam sebuah jaringan.

Dengan adanya protocol tersebut setiap Hardware yang ada dalam sebuah jaringan ( biasanya dikenal dengan Network Interface Card ) dapat berkomunikasi satu sama lain.


<br>
**Apa itu ARP Poisoning ?**

ARP poisoning atau lebih populer di kenal ARP spoofing merupakan sebuah teknik penyerangan jaringan yang digunakan untuk mengacaukan jaringan atau sebuah routing didalam jaringan. Seorang yang melakukan ARP spoofing dapat mengintip data frame dalam sebuah jaringan , memanipulasi traffic , atau memberhentikan traffic atau routing.

secara simple dapat di ilustrasikan sebagai berikut :
<div align="left">
    <table>
        <td>
            <p align="center">
                <img src="./posts/2012-01-29-arpon/images.jpeg" height="100px" alt="img1">
            </p>
        </td>
        <td>
            Host A 
            <br>
            Halo..halo...saya adalah <b>192.168.1.1</b>
            <br>
            MAC <b>00:12:13:14:15:16</b>
        </td>
    </table>
</div>

<div align="right">
    <table>
        <td>
            <p align="center">
                <img src="./posts/2012-01-29-arpon/images.jpeg" height="100px" alt="img2">
            </p>
        </td>
        <td>
            Host C
            <br>
            <b>[ARP Poison Attacker]</b>
            <br>
            Halo..halo...saya adalah <b>192.168.1.1</b>
            <br>
            MAC <b>00:01:02:AA:09:3B</b>
        </td>
    </table>
</div>

<div align="left">
<table>
        <td>
            <p align="center">
                <img src="./posts/2012-01-29-arpon/images.jpeg" height="100px" alt="img3">
            </p>
        </td>
        <td>
            Host B
            <br>
            192.168.1.2
            <br>
            Yg bener mana nih?
            <br>
            MAC <b>00:01:02:AA:09:3B</b> atau MAC <b>00:12:13:14:15:16</b>?
            <br>
            <b>192.168.1.1</b> yg mana?
        </td>
    </table>
</div>

<br>
dari gambar ilustrasi di atas dapat kita lihat bahwa ada 3 buah komputer dalam sebuah jaringan, masing masing komputer A B dan C.

Komputer A dan B awal nya bisa saling berkomunikasi dengan baik satu sama lain , lalu muncullah Komputer C masuk dalam jaringan melakukan poisoning ARP / ARP Spoofing dan mengelabui jaringan, dan seolah olah ip 192.168.1.1 berada Di mac Address 00:01:02:AA:09:3B . Dengan teknik poisoning komputer C bisa mengelabui komputer B bahwa sebenarnya pemiliki ip address 192.168.1.1 yang benar adalah komputer C .

Hebat bukan ? dengan mengacaukan jaringan menggunakan posoning ARP attack sebuah sistem jaringan yang baik bisa di bodohi dengan sempurna.

Lalu Bagai mana caranya mencegah atau usaha apa yang bisa dilakukan agar tidak terpengaruh racun arp ini ?

<br>
**ARPON**

ARPON ini meng-claims dirinya mampu melakukan bloking terhadap teknik ARP spoofing seperti yang digunakan pada tool netcut. Tools ARPOn ini juga bisa melakukan pencegahan untuk Man In The Middle (MITM) melalui ARP Spoofing/Poisoning . Mendeteksi dan melakukan pencegahan misalnya Sniffing, Hijacking, Injection, Filtering, dsb.

Macam-macam fitur yang dimiliki ARPON:

* Mengelola setiap aspek dari protokol ARP
* Mendeteksi dan memblokir serangan ARP Poisoning/Spoofing pada jaringan statis (SARPI)
* Mendeteksi dan memblokir serangan ARP Poisoning/Spoofing pada jaringan dinamis / DHCP (DARPI)
* Mendeteksi dan memblokir serangan satu/dua arah

<br>
**Instalasi**

Masuk ke shell (terminal) , dan jalankan command berikut :
```
sudo apt-get install arpon
```

<br>
**Konfigurasi**

Sebelum diaktifkan, arpon harus dikonfigurasi dulu di /etc/default/arpon. caranya :
```
sudo nano /etc/default/arpon
```

akan terbuka file konfigurasi dari Arpon. perhatikan baik baik,

jika ip yang anda gunakan adalah IP Static, maka hilangkan tanda pagar pada baris berikut :
```
DAEMON_OPTS="-d -f /var/log/arpon/arpon.log -g -s"
```

jika ip yang anda gunakan adalah IP Dinamik (anda sebagai DHCP Client), maka hilangkan tanda pagar pada baris berikut :
```
DAEMON_OPTS="-d -f /var/log/arpon/arpon.log -g -y"
```

Selanjutnya ubah no menjadi yes pada bagian RUN
```
RUN="yes"
```

save dengan cara tekan CTRL+O
exit dengan cara tekan CTRL+X

Restart servicenya
```
sudo /etc/init.d/arpon restart
```


Selamat, anda sudah terlindung dari ancaman arp poisoning :)