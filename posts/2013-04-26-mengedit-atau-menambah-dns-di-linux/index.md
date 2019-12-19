### **Mengedit atau menambah DNS di Linux**
_Posted by Arief Satriana Ulfa on Apr 26, 2013_
<br>
in Networking | 0 comments	

DNS atau Domain Name Server adalah penyedia layanan informasi tentang nama host maupun server, lebih dikenal juga penerjemah dari alamat web menjadi alamat internet.

Tanpa DNS kita hanya bisa searching menggunakan alamat IP suatu web. Tidak mungkin juga hafal semua alamat IP suatu web.

* Jangan lupa masuk sebagai root

* Untuk mengedit atau menambah DNS di Linux, ketikkan perintah
    <br>
    ```
    nano /etc/resolv.conf

    ```
* Nah edit aja DNS yang kita mau, misalnya dari :
    <br>
    ```
    nameserver 208.67.222.222

    ```
    mau kita ganti jadi :
    ```
    nameserver 8.8.8.8

    ```
* Save

Misal resolv.conf belum ada, tinggal di tambah aja di `/etc`.

* New file , gedit, jangan lupa masuk sebagai root

* Misal kita isikan :
    <br>
    ```
    nameserver 8.8.8.8

    ```
* Save dengan nama `resolv.conf`

 

Jangan lupa Reboot agar settingan bisa jalan

:))