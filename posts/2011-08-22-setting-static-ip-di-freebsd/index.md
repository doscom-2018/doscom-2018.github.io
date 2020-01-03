### **Setting Static IP di FreeBSD**
_By mazumam On 22/08/2011 · Leave a Comment_

<div align="center">
	<img src="./posts/2011-08-22-setting-static-ip-di-freebsd/freebsd.png" height="250px" alt="bsd">
</div> 

Lagi seneng2nya ngoprek si setan a.k.a [FreeBSD](http://www.mazumam.web.id/2011/08/setting-static-ip-di-freebsd.html) satu ini nih… pertama yang harus dilakukan sebelum ngoprek ke jaringannya, kita harus menyetting static ip di freebsd. ini agar nanti kalo systemnya kita reboot kita gak perlu nyetting nyetting ip lagi. nah, di FreeBSD untu setting ip static caranya cukup berbeda. harus benar2 dicermati interfacenya, karena di FreeBSD tidak mengenal eth0 eth1 dsb seperti di Ubuntu.

pertama yang harus dilakukan adalah, kita harus mengecek nama interfacenya, caranya sama yaitu dengan perintah :
```
# ifconfig
```
<div align="center">
	<img src="./posts/about/noimg.jpg" height="250px" alt="noimg">
</div> 

kita lihat nama interfacenya, disitu tertulis `em0` dan `em1`. nah kita akan mencoba setting static ip pada `em0`
```
# vi /etc/rc.conf
```

tambahkan baris konfigurasi berikut
```
ifconfig_em0=”inet 192.168.15.77 netmask 255.255.255.0″ 
```

> note : em0 bisa diganti sesuai dengan nama interface saat kita lihat tadi (interface yg sering ada di FreeBsd antara lain `rl0`, `rl1`, `fxp0`, `em0`)

tekan `ESC` kemudian ketik “`:wq`” (tanpa tanda petik) untuk menyimpan konfigurasi dan keluar.
Restart network
```
# /etc/rc.d/netif restart &amp;amp;&amp;amp; /etc/rc.d/routing restart
```

nah… setelah direstart service networknya maka freeBSD anda sudah memiliki ip static.

sekian..semoga bermanfaat.


<br>
source [mazumam](http://www.mazumam.web.id/2011/08/setting-static-ip-di-freebsd.html)