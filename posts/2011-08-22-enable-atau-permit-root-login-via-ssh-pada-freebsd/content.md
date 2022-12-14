#### Enable atau Permit Root Login via SSH pada FreeBSD
_Chaerul Umam | 22/08/2011 | Leave your comment_

Pada [freeBSD](http://www.mazumam.web.id/search/label/FreeBSD), defaultnya kita tidak diijinkan untuk login menggunakan user root melalu SSH. Jadi, saat kita mencoba meremote server yang systemnya menggunakan FreeBSD dengan user root melalui ssh, akan ditolak oleh system, seperti terlihat pada gambar diatas.

Agar kita diijinkan login dengan user root melalui ssh, ada sedikit konfigurasi yang perlu diubah.

Edit file  /etc/ssh/sshd_config dg cara :
```
# vi /etc/ssh/sshd_config
```

cari baris berikut
```
#PermitRootLogin no
```

kemudian edit menjadi
```
PermitRootLogin yes
```

save dengan cara tekan `ESC` kemudian ketik “`:wq`” (tanpa tanda petik) untuk menyimpan konfigurasi dan keluar.
restart service sshnya
```
# /etc/rc.d/sshd restart
```

sekarang anda sudah bisa login ssh dengan user root

:)