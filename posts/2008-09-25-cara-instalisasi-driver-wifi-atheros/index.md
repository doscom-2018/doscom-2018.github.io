### **Cara Instalasi Driver Wifi Atheros Pada Ubuntu**
_Diposting oleh Masbudi di 07.27 . Kamis, 25 September 2008_
<br>
Label: Networking, Tutorial, Ubuntu, Wifi

Sebelum instalisasi pastikan driver yang telah didetect oleh linux dinonaktifkan terlebih dahulu lewat system → Administration → Restricted Driver Manager

1. Pastikan anda terlebih dahulu telah menginstal paket build­essential dengan mengetik perintah “sudo apt­get install build­essential” lewat terminal. Jika tidak bisa gunakan paket yang sudah dipack di cd instalisasi ubuntu
1. Download madwifi yang telah di­patch [disini](http://snapshots.madwifi.org/madwifi-hal-0.10.5.6/madwifi-hal-0.10.5.6-r3772-20080716.tar.gz)
1. Masih di terminal pindahlah ketempat directori dimana kamu menyimpan hasil download driver mu.
1. Extraxt file yang telah kamu download dengan mengetik “tar xfz madwifi-hal-0.10.5.6-r3772-20080716.tar.gz"
1. Pindah direktori baru yang telah dibuat dengan mengetik “cd madwifi-hal-0.10.5.6-r3772-20080716”
1. Ketik “make clean”
1. lalu Ketik “make”
1. Ketik “make install” dan masukan password anda
1. Ketik “modprobe ath_pci”
1. Restart dengan mengetik “sudo reboot”
1. Wifi yang terdeteksi akan keluar di network manager anda atau ketik "iwlist ath0 scanning" untuk scan jaringan yang terdetect.
1. selamat mencoba