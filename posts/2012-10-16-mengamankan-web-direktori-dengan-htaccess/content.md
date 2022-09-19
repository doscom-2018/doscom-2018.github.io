### **Mengamankan Web Direktori dengan .htaccess**
_Posted by mazumam on Oct 16, 2012 in Tutorial, Web Server | 4 comments_

Misalnya kita ingin agar direktory <http://pinguin.dinus.ac.id/awstat> tidak sembarangan orang bisa mengaksesnya. maka kita bisa menggunakan .htaccess dan .htpasswd untuk mengamankan direktory tersebut. jadi, untuk membuka direktory tersebut melalui web browser, harus memasukkan username dan password yang sudah diset menggunakan [.htpasswd](http://www.mazumam.web.id/2012/10/mengamankan-web-direktori-dengan.html)

langkah2nya adalah sebagai berikut.

login ke webserver menggunakan ssh.

kemudian masuk ke direktori yang akan kita amankan. misal ada di /var/www/awstat
```
# cd /var/www/awstat
```

setelah itu buat user dan password dengan htpasswd dengan perintah
```
# htpasswd -cb .htpasswd username password
```

buat file .htaccess dengan isi parameter seperti ini
```
AuthName “AWStats Authentication”

AuthType Basic

AuthUserFile /var/www/awstat/.htpasswd

Require valid-user
```

simpan

kalau udah selesai.. coba buka browser kembali dan akses <http://pinguin.dinus.ac.id/awstat>, pasti akan diperlukan otentikasi user dan password. nah, untuk login masukkan username dan password. tadi.
<p align="center">
	<img src="./posts/2012-10-16-mengamankan-web-direktori-dengan-htaccess/Untitled.png" height="250px" alt="img1">
</p> 

Selamat mencoba

:)



SUMBER  <http://www.mazumam.web.id/2012/10/mengamankan-web-direktori-dengan.html>