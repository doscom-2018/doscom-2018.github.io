### **Routing Statis Dengan 3 Router Pada Packet Tracer**
_Posted by Arief Satriana Ulfa on Apr 17, 2013_
<br>
in Blogs, DOSCOM, Doscom University, IP dan Subnetting, Modul Pelatihan, Networking, Review, Tutorial | 3 comments	
Routing adalah sebuah cara untuk menghubungkan jaringan komputer satu dengan jaringan komputer lainnya yang berbeda network. Jenis Routing sendiri terdiri dari Routing Statis dengan Routing Dinamis. Disini saya akan membahas Routing Statis dengan 3 Router pada Packet Tracer.

Berikut adalah langkah-langkahnya :

1. Buatlah desain jaringan seperti gambar dibawah ini :  
<p align="center">
	<img src="./posts/2013-04-17-routing-statis-dengan-3-router-pada-packet-tracer/pkt1.png" height="350px" alt="pkt1">
</p> 

2. Buatlah rancangan IP Address pada setiap Router sesuai dengan keinginan berdasarkan interface yang terkoneksi :
    <br>
    Saya contohkan sebagai berikut :
    <br>
    ```
    Interface Se0/0/0 Router_JKT = 10.10.10.1/29
    Interface Se0/0/0 Router_SMG = 10.10.10.2/29
    Interface Se0/0/1 Router_SMG = 10.10.20.1/29
    Interface Se0/0/0 Router_SBY = 10.10.20.2/29
    Interface Fa0/0 Router_JKT = 192.168.10.1/28
    Interface Fa0/0 Router_SMG = 192.168.11.1/26
    Interface Se0/0/0 Router_JKT = 192.168.12.1/25

    ```

3. Konfigurasikan IP Address pada tiap Router lewat command line dengan cara :

    Klik Router_JKT
    Masuk ke bagian CLI
    Ketikkan command seperti dibawah ini :

    * ROUTER JKT
        <br>
        ```
        enable
        configure terminal
        interface se0/0/0
        ip address 10.10.10.1 255.255.255.248
        no shutdown
        exit
        interface fa0/0
        ip address 192.168.10.1 255.255.255.240
        no shutdown

        ```

    Klik Router_SMG
    Masuk ke bagian CLI
    Ketikkan Command seperti dibawah ini :

    * ROUTER SMG :
        <br>
        ```
        enable
        configure terminal
        interface se0/0/0
        ip address 10.10.10.2 255.255.255.248
        no shutdown
        exit
        interface se0/0/1
        ip address 10.10.20.1 255.255.255.248
        no shutdown
        exit
        interface fa0/0
        ip address 192.168.11.1 255.255.255.192
        no shutdown

        ```

    Klik Router_SBY
    Masuk Ke bagian CLI
    Ketikkan Command seperti dibawah ini :

    * ROUTER SBY :
        <br>
        ```
        enable
        configure terminal
        interface se0/0/0
        ip address 10.10.20.2 255.255.255.248
        no shutdown
        exit
        interface fa0/0
        ip address 192.168.12.1 255.255.255.128
        no shutdown

        ```

4. Konfigurasikan IP Address pada tiap PC dengan cara masuk ke bagian Desktop kemudian pilih IP Configurator lalu isikan IP Addressnya sesuai dengan Network masing-masing.

5. Jika semuanya sudah di konfigurasi maka langkah selanjutnya adalah membuat table routing pada tiap-tiap router dengan cara seperti dibawah ini :

    Klik Router JKT
    Masuk ke bagian CLI
    Ketikkan Command seperti dibawah ini :

    * ROUTER JKT :
        <br>
        ```
        enable
        configure terminal
        ip route 192.168.11.0 255.255.255.192 10.10.10.2
        ip route 10.10.20.0 255.255.255.248 10.10.10.2
        ip route 192.168.12.0 255.255.255.128 10.10.20.2

        ```

    Klik Router SMG
    Masuk ke bagian CLI
    Ketikkan Command seperti dibawah ini :

    * ROUTER SMG :
        <br>
        ```
        enable
        configure terminal
        ip route 192.168.10.0 255.255.255.240 10.10.10.1
        ip route 192.168.12.0 255.255.255.128 10.10.20.2

        ```

    Klik Router SBY
    Masuk ke bagian CLI
    Ketikkan Command seperti dibawah ini :

    * ROUTER SBY :
        <br>
        ```
        enable
        configure terminal
        ip route 192.168.11.0 255.255.255.192 10.10.10.2
        ip route 10.10.10.0 255.255.255.248 10.10.20.1
        ip route 192.168.10.0 255.255.255.240 10.1010.1

        ```

6. Jika semuanya telah dikonfigurasi seperti di atas maka langkah terakhir adalah cek dengan cara ping antar Router dengan Router, PC dengan PC antar Network, PC dengan Router antar Network. Apabila hasilnya reply maka konfigurasinya benar, dan apabila timeout maka konfigurasinya salah.