### **Memainkan Video dengan Mode ASCII art**
_Posted by Reza Faiz A Rahman on Jan 20, 2012_
<br>
in Codec, Desktop, Internet, Multimedia, Player, Terminal, Tutorial | 2 comments	

bosan nonton video kualitas Blu-ray ??, mungkin agan perlu ini :D. Dengan CACA agan bisa nonton video dengan output “teks” bukan pixel, jadi di terminal pun bisa lihat video :).

ini screenshotnya, video radityadika via VLC+CACA
<p align="center">
	<img src="./assets/noimg2.png" height="250px" alt="no image">
</p> 

berikut cara pemasangannya [ saya mencoba dengan OS Backtrack 5 R1 ]

pastikan VLC telah terpasang di linux agan,

kalo belum ketik `:~# apt-get install vlc`

kemudia pasang CACA
```
:~# apt-get install caca-utils

```

untuk memainkan videonya
```
:~# vlc --vout caca nama_file_video

```

misal
```
:~# vlc --vout caca /root/Downloads/StandUpNite2-Raditya_Dika_(Part-1of2).FLV

```

sekian,semoga tidak semakin alergi sama terminal :D.
