#### Mengubah Login Screen di Ubuntu 11.04 “Natty Narwhal”
_Wahyu Asyari M | 04/05/2011 | 8 comments_

Beberapa hari lalu. Ubuntu, Distro Linux yang paling populer digunakan didunia merilis OS terbaru mereka yakni Ubuntu 11.04 yang mempunyai Codename “Natty Narwhal” dengan menggunakan [Unity](http://en.wikipedia.org/wiki/Unity_%28desktop_environment%29) sebagai desktop environmentnya.
Khusus pada postingan kali ini kita akan membahas Bagaimana cara mengubah Login Screen di Ubuntu 11.04 “Natty Narwhal”. yuk ah mari ;)
<div align="center">
	<img src="./posts/2011-05-04-mengubah-login-screen-di-ubuntu-11-04-natty-narwhal/1.png" height="350px" alt="img">
</div> 

Buka terminal / tekan (alt+f2) pada keyboard lalu tulis gnome-terminal
copy script dibawah ini:
```
sudo cp /usr/share/applications/gnome-appearance-properties.desktop /usr/share/gdm/autostart/LoginWindow
```

Setelah itu, keluar dari konsol dan logout. akan ada tampilan pop-up pengaturan login screen. disana anda dapat mengubah dengan sesuka hati sesuai selera :mrgreen:

Apabila sudah atur sedemikian rupa, Untuk mencegah pop-up pengaturan tampilan berjalan secara otomatis, lakukan langkah berikut.

Jalankan Terminal.
copy script dibawah:
```
sudo unlink /usr/share/gdm/autostart/LoginWindow/gnome-appearance-properties.desktop
```

Nah, apabila masih ada yang bingung :lol: dibawah ini ada video tutorial bagaimana mengubah Login Screen di Ubuntu 11.04 “Natty Narwhal”
<div align="center">
    <iframe width="425" height="349" src="http://www.youtube.com/embed/eTv305RKWNw" frameborder="0" allowfullscreen></iframe>
</div>

Selamat mencoba!
“Open your mind with Open Source Software”

Source: [n00bsonubuntu.net](http://www.n00bsonubuntu.net/content/change-login-screen-on-ubuntu-11-04-natty-narwhal/)