### **Memperbaiki Youtube Freeze saat Full Screen Video**
_Posted by mazumam on Jan 23, 2011_
<br>
in Internet, News, Tutorial, Ubuntu | 8 comments

<p align="center">
	<img src="./posts/2011-01-23-memperbaiki-youtube-freeze/youtube.png" height="150px" alt="img1">
</p> 

kadang saat kita memutar video di youtube di ubuntu 10.04 dan 10.10 kemudian melakukan fullscreen video, akan hang atau lebih tepatnya kita sebut freeze.  untuk mengatasinya cukup mudah. yaitu sebagai berikut :

<br>
**Cara Pertama**
* buka browser, masuk ke youtube.com , pilih salah satu videonya kemudian jalankan
* klik kanan pada video yang sedang berjalan, klik setting
* akan keluar popup, kemudian hilangkan tanda centang pada "enable hardware acceleration" selanjutnya klik close
<p align="center">
	<img src="http://2.bp.blogspot.com/_AX0O5mZ7r5U/TToiWyy5jEI/AAAAAAAAADY/O5xAvaaT-sQ/s320/Screenshot-1.png" height="150px" alt="img2">
</p> 
* restart browser dan jalankan video secara full screen. 

<br>
**Cara Kedua**
* Cara kedua adalah melalui terminal, buka terminal dan jalankan perintah berikut:
    <br>
    ```
    sudo mkdir /etc/adobe

    echo "OverrideGPUValidation=true" >~/mms.cfg

    sudo mv ~/mms.cfg /etc/adobe/
    ```

* kemudian restart browser, masuk youtube lagi dan jalankan video secara full screen

selamat mencoba
