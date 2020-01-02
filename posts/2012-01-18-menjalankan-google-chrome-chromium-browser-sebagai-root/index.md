### **Menjalankan Google-Chrome / Chromium-browser sebagai root**
_By ylpmiskrad On 18/01/2012 · 2 Comments_

:) bagi pengguna Backtrack mungkin pernah mengalami seperti ini
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

karna di backtrack semua aplikasi di jalankan sebagai root user, ada sebagian aplikasi yang tidak mengijinkan berjalan sebagai root user seperti Google Chrome/Chromium.

berikut cara agar Google Chome/Chromium dapat berjalan sebagai root user

*pastikan Google Chome/Chromium sudah terpasang di komputer agan. :D

- Google-chrome
    <br>
    <p align="center">
        <img src="./posts/about/noimg2.png" height="250px" alt="no image">
    </p> 
    ```
    :~# cd /opt/google/chrome/
    :/opt/google/chrome# chmod o+w -R chrome
    :/opt/google/chrome# hexedit chrome
    ```

- Chromium Browser
    <br>
    <p align="center">
        <img src="./posts/about/noimg2.png" height="250px" alt="no image">
    </p> 
    ```
    :~# cd /usr/lib/chromium-browser
    :/usr/lib/chromium-browser# chmod o+w -R chromium-browser
    :/usr/lib/chromium-browser# hexedit chromium-browser
    ```

<br>
kemudian
<br>

`tekan [TAB]` *untuk pindah ke bagian ASCII
`tekan ctrl + [S]` *untuk pencarian kata
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

ketik `geteuid > tekan [Enter]`
ganti geteuid dengan `getppid`
<p align="center">
	<img src="./posts/about/noimg2.png" height="250px" alt="no image">
</p> 

tekan `ctrl + [X] > y > tekan [enter]`

kemudian

- Google-chrome
    <br>
    ```
    :/opt/google/chrome# chmod o-w -R chrome
    ```

- Chromium-browser
    <br>
    ```
    :/usr/lib/chromium-browser# chmod o-w -R chromium-browser
    ```

sekian,, Google Chrome / Chromium browser agan sudah bisa jalan sebagai root user :)