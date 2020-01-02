### **Hapus Kernel Lama Di Ubuntu**
_Posted by mazumam on Sep 28, 2011 in Kernel, Tutorial, Ubuntu | 2 comments_

<p align="center">
	<img src="./posts/2011-09-28-hapus-kernel-lama-di-ubuntu/explore_linux_kernel.png" height="250px" alt="img1">
</p> 

Kalo kita sudah melakukan [upgrade kernel](http://www.mazumam.web.id/2011/09/menghapus-kernel-di-ubuntu.html), kernel lama tidak langsung terhapus, namun masih tersisa di system linux kita. dan membuat tampilan grub menjadi penuh, otomatis membuat kita kurang nyaman. nah.. untuk menghapus kernel lama di ubuntu caranya sebagai berikut :

Jalankan terminal, ketik perintah berikut ;
```
uname -r
```

akan keluar hasil dari uname -r, yaitu kernel yang sedang dipakai, nanti kita akan menghapus kernel yang tidak terpakai.
```
2.6.35-30-generic
```

Untuk melihat kernel yang terinstall, gunakan grep 2.6.35 dari hasil uname -r diatas
```
    dpkg --get-selections | grep 2.6.35
```

akan terlihat kernel-kernel lama yang masih terinstall di sistem
<p align="center">
	<img src="./posts/2011-09-28-hapus-kernel-lama-di-ubuntu/Screenshot.png" height="150px" alt="img2">
</p> 


hapus kernel lama yang tidak etrpakai dengan cara
```
sudo apt-get remove –purge 2.6.35-28-*
```

selamat mencoba

sumber <http://mazumam.web.id>