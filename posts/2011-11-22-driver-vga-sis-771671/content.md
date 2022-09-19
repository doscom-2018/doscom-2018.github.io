### **Driver VGA [SiS] 771/671 ubuntu 10.10**
_raditya | 22/11/2011 | 3 comments_

Begitu sulitnya bagi yang memiliki notebook dengan hardware berdriver Sis, disamping driver video cardnya sulit d cari dan juga gambarnya begitu besar jika telah terinstall.
next, step by step install driver sis 771/671 di Ubuntu 10.10

1. download drivernya di <http://www.mediafire.com/?khdke7m0msvs3c1>

2. extract file tersebut

3. dalam file tar.gz terdapat 3 file diantaranya sisimedia_drv.so, xorg.conf dan copas file

4. buka terminal, seperti biasa ketik :
    ```
    sudo su

    ```
    masukkan password

5. ketikkan di terminal :
    ```
    cp sismedia_drv.so /usr/lib/xorg/modules/drivers/

    cp xorg.conf /etc/X11/

    reboot
    ```

6. setelah itu ke System > monitor. ubahlah resolusi sesuai dengan keinginan anda

<br>
Sumber : <http://ubuntugeek.com>