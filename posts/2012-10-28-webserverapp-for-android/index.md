### **webserver app for android**
_Posted by Masbudi.Net on Oct 28, 2012 in Server, Tutorial, Web Server | 4 comments_

Malem Gan, blm bisa tidur nih. iseng2 kepikiran mau bikin artikel tentang aplikasi [webserver untuk android](http://www.masbudi.net/webserver-app-for-android/). App ini cocok untuk mereka yang suka web programming gan, walaupun mungkin agak kurang nyaman koding di smartphone setidaknya bisa membantu mereka untuk dapat melihat hasil buatan mereka di smartphone berplatform android ini.
Langsung saja gan, aplikasi ini bernama KWS, bisa langsung search di Play Store dengan key : webserver, atau kws langsung bisa gan,
<p align="center">
	<img src="./posts/2012-10-28-webserverapp-for-android/wpid-shot_000002.png" height="450px" alt="image1">
</p> 

aplikasi ini support untuk webserver standard Gan, sudah include port yang akan digunakan, directory web root, ataupun secure http (https), kalau agan beli yang versi pronya akan banyak lagi fasilitasnya (ini bukan promosi low. :) ).
untuk ukuranya sendiri app ini tergolong kecil gan, hanya dengan 90anKB agan sudah bisa memanfaat webserver ini. langsung saja gan, berikut review / tutorial dari ane.
* install aplikasi tersebut melalui PlayStore
* buat direktory untu menyimpan file webserver anda, seperti public_html atau WwW, kalau ane coba bikin direktory /sdcard/webku
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

* setelah jadi coba bikin file index.html di dalam folder webku. bisa menggunakan editor android terserah anda. lalu isi file tersebut dengan html coding.
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

* setelah berhasil, simpan file tersebut. sekarang saatnya mengkonfigurasi kes webserver
* buka kws anda bisa cari di menu
* buka pilihan dengan tombol menu di android device agan masing2. lalu masuk ke menu setting
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

* setelah keluar menu setting, pada home directory arahkan ke folder wrbserver agan, sevara default menggunakan folder /sdard kalo punya ane di /sdcard/webku
* setelh itu setting port yang akan digunakan, secara default akan menggunakan port 8080
setelah selesai kembali ke halaman kws utama lalu klik start Server. jika tidak ada error akan keluar hasil berikut :
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

* pada tombol start server akan berubah menjadi hijau, dan tulisanya berubah menjadi stop server berarti menunjukan webserver telah berjalan.
* untuk mengecek silahkan buka browser anda lalu isi dengan alamat 127.0.0.1:8080 maka akan terlihat hasil dari index.html anda seperti berikut :
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

mantebskan gan, silahkan mencoba dam semoga berhasil.
artikel ini masbudi buat langsung menggunakan wordpress for android di lenovo S880 milik ane gan, jikalo formatnya agak semrawut berarti masbudi belum sempat format ulang melalui kkmputer.

Semoga bermanfaat gan.

<br>
<br>
artikel di atas juga di terbitkan di : <http://www.masbudi.net/webserver-app-for-android/>
<br>
**“Share Knowledge is Fun. :) ”**