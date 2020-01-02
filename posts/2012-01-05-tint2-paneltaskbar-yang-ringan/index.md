### **“tint2″ Panel/Taskbar yang Ringan**
_ylpmiskrad | 05/01/2012 | 4 comments_

<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

dikutip dari sini > [tint2](http://code.google.com/p/tint2/)

> “tint2 is a simple panel/taskbar unintrusive and light (memory / cpu / aestetic).”

bisa di lihat di system monitor, tint2 jauh lebih ringan dari pada gnome-panel.
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

berikut cara pemasangannya:
```
:~$ sudo apt-get install tint2
:~$ tint2
```

untuk menjalankannya pada saat startup, bisa di tambahkan lewat “startup aplications”
`System > Preferences > Startup Aplications > add`
```
name: tint2
command: tint2
```
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

kemudian logout/restart.

untuk kofigurasi lebih lanjut bisa ngedit file tint2rc di `~/.config/tint2/tint2rc`

bagi yang kurang akrab sama unity bisa menambahkan tint2 sebagai alternatif panel/tasbar.

sekian,,, :)