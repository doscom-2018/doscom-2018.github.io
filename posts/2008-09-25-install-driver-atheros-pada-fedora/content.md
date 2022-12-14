#### install driver atheros pada fedora 9
_Diposting oleh Masbudi di 08.40 . Kamis, 25 September 2008_
<br>
Label: Fedora, Networking, Tutorial, Wifi

Setelah mencari artikel sana - sini dan mengoprek fedora 9 saya. akhirnya saya dapat menginstall driver atheros pada fedora 9. yang perlu dilakukan pertama kali adalah mengupdate kernel minimal kernel 2.6.26.X. di fedora bisa dilakukan menggunakan perintah "su -c 'yum install update'" atau dengan mendownload kernel terbaru pada situs kernel.org . lalu reboot kompi, setelah itu download madwifi [disini](http://snapshots.madwifi.org/madwifi-hal-0.10.5.6/madwifi-hal-0.10.5.6-r3772-20080716.tar.gz) atau di <http://snapshots.madwifi.org> untuk medownload versi terbaru. lalu lakukan seperti langkah berikut :

1. masuk sebgai root dengan mengetik "su"
1. extract hasil download tadi dengan cara “tar xfz madwifi-hal-0.10.5.6-r3772-20080716.tar.gz"
1. Pindah direktori baru yang telah dibuat dengan mengetik “cd madwifi-hal-0.10.5.6-r3772-20080716”
1. Ketik “make clean”
1. lalu Ketik “make”
1. Ketik “make install” dan masukan password anda
1. Ketik “modprobe ath_pci”
1. Restart dengan mengetik “reboot”
1. Wifi yang terdeteksi akan keluar di network manager anda atau ketik "iwlist ath0 scanning" untuk scan jaringan yang terdetect melalui console.
1. selamat mencoba

