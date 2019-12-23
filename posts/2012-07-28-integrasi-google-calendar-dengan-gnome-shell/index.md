### **Integrasi Google Calendar dengan Gnome Shell**
_By Reza Faiz A On 28/07/2012 · 4 Comments_

Suka lupa sama jadwal kuliah ?, atau jadwal bayar SPP ? :D. Ini ada sedikit solusi buat yang pakai Linux :P.

Berhubung kampus [UDINUS](http://dinus.ac.id) pakai Google Calendar buat jadwalnya, kita bisa mengintegrasikan jadwal tersebut dengan Linux kita, terutama yang pakai Desktop [Gnome Shell](http://gnome.org). Berikut caranya.. :)
<p align="center">
	<img src="./posts/2012-07-28-integrasi-google-calendar-dengan-gnome-shell/google_udinus.png" height="250px" alt="google udinus">
</p> 

Pertama, buka <http://google.com/calendar> lalu Sign In. Kemudian buka <http://dinus.ac.id> klik “+ Google Calendar” di sebelah kanan.

apabila mucul pertanyaan, klik “yes, add this calendar”.

Lalu download gnome-shell google calendar di <https://github.com/vintitres/gnome-shell-google-calendar>

atau bisa juga di clone :D
```
$ git clone https://github.com/vintitres/gnome-shell-google-calendar.git
```

kemudian masuk ke folder gnome-shell-google-calendar, dan jalankan gnome-shell-google-calendar.py
```
$ cd gnome-shell-google-calendar

$ python gnome-shell-google-calendar.py
```

masukan email dan password [gmail](http://gmail.com) anda :), kemudian cek di calendar gnome shell
<p align="center">
	<img src="./posts/2012-07-28-integrasi-google-calendar-dengan-gnome-shell/google-calendar-gnome-shell.png" height="250px" alt="Google calendar on gnome shell">
</p> 

Nah, supaya gnome-shell-google-calendar.py jalan setiap komputer di nyalakan, maka perlu di masukan di startup applications.

pada Startup Applications klik add, isi dengan
```
Name : Google Calendar
Command : /folder/gnome-shell-google-calendar.py
Comment : isi apa saja :D
```
<p align="center">
	<img src="./posts/2012-07-28-integrasi-google-calendar-dengan-gnome-shell/startup.png" height="250px" alt="startup :P">
</p> 

ganti /folder/ dengan tempat menyimpan file gnome-shell-google-calendar.py

Selesai, dan semoga ngga ada yang kelupaan lagi :).
