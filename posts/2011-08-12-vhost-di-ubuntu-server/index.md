### **VHost di Ubuntu Server**
_Chaerul Umam | 12/08/2011 | Leave your comment_

Huhu.. iseng iseng nulis tentang virtual host ah…mumpung masih anget dan masih inget, biar ga lupa. kemaren baru aja bikin vhost untuk tealinuxos.org loh.. :D
Buat yang belom ngerti tentang Virtual Host nih…
Virtual Host, atau sering disebut vhost aja, merupakan cara untuk menaruh berbagai macam website dengan domain yang berbeda dalam satu web server.
vhost bermanfaat untuk menghemat sumberdaya, karena mampu menggunakan 1 server untuk menampung ratusan bahkan ribuan website dalah 1 server. cara ini biasa digunakan para pengelola share hosting di berbagai ISP :)
cara ntuk membuat vhost di ubuntu server sebagai berikut :
```
pastikan apache sudah terinstall di server 
```
Copy file default dari apache yang ada di direktori /etc/apache2/sites-available/ ke direktori yang sama dan beri nama sesuai website yang akan anda taruh di vhost. misalnya seperti ini :
```
sudo cp /etc/apache2/sites-available/default  /etc/apache2/sites-available/tealinuxos.org
```
Buka file hasil copy-an tadi
```
sudo vim /etc/apache2/sites-available/tealinuxos.org
```
Edit isinya dengan menambah ServerName, ServerAlias dan edit DocumentRoot
```
ServerName tealinuxos.org

ServerAlias www.tealinuxos.org

DocumentRoot /home/tealinuxos/www
```
Sehingga isinya menjadi seperti ini :
<div align="center">
	<img src="./posts/about/noimg.jpg" height="250px" alt="no image">
</div> 

simpan dan Reload Apache
```
sudo /etc/init.d/apache2 restart
```
aktifkan vshot tealinuxos.org dengan cara :
```
sudo a2ensite tealinuxos.org
```
selamat… vhost sudah jalan di ubuntu server anda, sekarang anda tinggal mengarahkan dnsnya ke ip webserver anda.. :D

source <http://www.mazumam.web.id/2011/08/vhost-di-ubuntu-server.html>