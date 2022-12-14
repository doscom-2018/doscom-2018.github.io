#### 10 Tools Gratis untuk Monitoring Server dan Jaringan
_By Wahyu Asyari M On 20/08/2011 · 3 Comments_

Bila anda mempunyai website atau jaringan, akan sangat membantu apabila anda dapat mengetahui setiap masalah secepat hal tersebut terjadi. ada beberapa tools open source dan gratisan untuk memantau server atau jaringan sehingga dapat mencari solusi secepat mungkin dalam menangani masalah tersebut.

berikut daftar 10 Tools untuk monitoring tersebut:

1. [Monit](http://mmonit.com/monit/)
    Monit tidak hanya memantau server Anda, tetapi juga mengupayakan untuk memperbaiki masalah dengan mengambil tindakan yang telah ditetapkan untuk situasi tertentu. Sebagai contoh, jika server mengalami crash database, Monit dapat secara otomatis me-restart service jika ini adalah tindakan yang ingin anda lakukan.
    <div align="center">
        <img src="./posts/2011-08-20-10-tools-gratis-untuk-monitoring-server-dan-jaringan/1.png" height="450px" alt="img">
        <p>monit</p>
    </div> 
    Jika Anda memiliki lebih dari satu server yang Anda butuhkan untuk dipantau, maka Anda dapat menggunakan M / Monit – yang berlisensi untuk memantau beberapa server / jaringan anda.
    <br><br>
    Ada juga [aplikasi iPhone](http://mmonit.com/iphone/) yang tersedia untuk M / Monit untuk membantu Anda dengan mudah memeriksa jaringan Anda tanpa menggunakan desktop.

2. [Ganglia](http://ganglia.info/)
    <div align="center">
        <img src="./posts/2011-08-20-10-tools-gratis-untuk-monitoring-server-dan-jaringan/2.png" height="350px" alt="img">
        <p>ganglia</p>
    </div> 
    Bila Anda memiliki sekelompok mesin cluster, sulit untuk melihat bagaimana keseluruhan cluster ini secara sekaligus. Ganglia, menyajikan gambaran keseluruhan dari cluster. Ini adalah alat yang hebat untuk anda yang bekerja dengan cluster server, dengan mengabaikan bahwa tools ini terlalu “berlebihan” untuk satu mesin saja.

3. [Munin](http://munin.projects.linpro.no/)
    <div align="center">
        <img src="./posts/2011-08-20-10-tools-gratis-untuk-monitoring-server-dan-jaringan/3.png" height="450px" alt="img">
        <p>munin</p>
    </div> 
    Munin hadir dengan sistem monitoring berdasarkan grafik metrik. Secara otomatis dapat menghasilkan grafik kinerja harian / mingguan / bulanan / tahunan dan laporan penting. memantau sumber daya sistem inti, seperti memori, ruang disk, penggunaan CPU, aplikasi server seperti MySQL, Apache, dan Squid.
    <br><br>
    Merupakan tools sederhana namun fungsional, Dengan hanya menambahkan beberapa baris kode, Anda dapat menulis sebuah plugin untuk memantau hampir semua hal. pilihan yang baik untuk hal-hal yang berhubungan dengan grafik kinerja server, seperti jumlah pengguna atau popularitas situs .

4. [Cacti](http://www.cacti.net/)
    <div align="center">
        <img src="./posts/2011-08-20-10-tools-gratis-untuk-monitoring-server-dan-jaringan/4.png" height="350px" alt="img">
        <p>cacti</p>
    </div> 
    Tools satu ini lebih mirip Munin ke berbagai hal, apa yang membuat berbeda ? adalah Cacti memungkinkan anda untuk melakukan resize pada grafik dan melihat data dengan lebih jelas dan sesuka anda.

5. [Nagios](http://www.nagios.org/)
    <div align="center">
        <img src="./posts/2011-08-20-10-tools-gratis-untuk-monitoring-server-dan-jaringan/5.png" height="350px" alt="img">
        <p>nagios</p>
    </div> 
    Nagios adalah “standar industri dalam pemantauan infrastruktur IT”. setidaknya itulah yang tertulis di website mereka. Nagios memang sedikit rumit untuk menginstal dan mengkonfigurasi, namun kekayaan fitur yang tak tertandingi oleh alat di pasaran dan ditujukan untuk administrator jaringan TI yang berpengalaman. Nagios mendukung pemantauan beberapa host dan dapat mengirimkan peringatan melalui email, pager (jika Anda masih menggunakan teknologi kuno) atau SMS / pesan teks. Seperti Monit, juga dapat dikonfigurasi untuk secara otomatis untuk merespon masalah.

6. [Zabbix](http://www.zabbix.com/)
    <div align="center">
        <img src="./posts/2011-08-20-10-tools-gratis-untuk-monitoring-server-dan-jaringan/6.png" height="350px" alt="img">
        <p>zabbix</p>
    </div> 
    Zabbix adalah tool yang penuh fitur. memiliki dukungan visualisasi besar termasuk pengaturan pribadi pandangan, zoom, dan pemetaan. Hal ini dapat mengirimkan peringatan melalui email, SMS atau pesan instan. Tools ini juga memberikan peringatan, yang dapat berguna ketika Anda secara fisik dekat mesin pemantauan.

7. [Observium](http://www.observium.org/)
    <div align="center">
        <img src="./posts/2011-08-20-10-tools-gratis-untuk-monitoring-server-dan-jaringan/7.png" height="350px" alt="img">
        <p>observium</p>
    </div> 
    Observium diarahkan Linux, BSD dan jaringan Cisco. mendukung penemuan otomatis infrastruktur jaringan Anda, menemukan jaringan yang mungkin tertarik dalam pemantauan, fitur ini dapat dibandingkan dengan bagaimana Wi-Fi perangkat lunak Anda secara otomatis menemukan sinyal dalam rentang yang dapat terjangkau. Observium menyediakan grafik rinci, dan dapat diatur di samping nagios untuk memberikan peringatan. Hal ini juga terintegrasi dengan baik dengan Collectd (ditampilkan di bawah) untuk antarmuka yang lebih kuat.

8. [Zenoss](http://www.zenoss.com/)
    <div align="center">
        <img src="./posts/2011-08-20-10-tools-gratis-untuk-monitoring-server-dan-jaringan/8.png" height="350px" alt="img">
        <p>zenoss</p>
    </div> 
    Zenoss adalah versi open source dari server pemantauan alat komersial Perusahaan Zenoss , seluruhnya ditulis dengan Python. Ini mendukung format plugins Nagios , begitu banyak yang ada di Plugin nagios dapat digunakan dalam Zenoss. Salah satu highlight utama dari Zenoss adalah kuat namun sederhana untuk menggunakan antarmuka pengguna.

9. [Collectd](http://collectd.org/)
    <div align="center">
	    <img src="./posts/2011-08-20-10-tools-gratis-untuk-monitoring-server-dan-jaringan/9.png" height="250px" alt="img">
        <p>collectd</p>
    </div> 
    Collectd mirip dengan Munin dan Cacti bahwa berfokus pada grafik metrik sistem. dirancang khusus untuk kinerja dan portabilitas, ini berarti cocok bekerja untuk sistem besar, low-end, dan sistem embedded.Dirancang untuk menggunakan sumber daya rendah. Collectd yang dapat mengumpulkan data setiap 10 detik tanpa mengganggu proses server Anda, menyediakan statistik dalam resolusi tinggi. Anda dapat menulis ekstensi tambahan menggunakan C, Perl atau Java.

10. [Argus](http://argus.tcp4me.com/)
    <div align="center">
        <img src="./posts/2011-08-20-10-tools-gratis-untuk-monitoring-server-dan-jaringan/10.png" height="350px" alt="img">
        <p>argus</p>
    </div> 
    Argus berfokus pada pemantauan layanan jaringan, dan mendukung IPv4 dan IPv6. Memiliki prosedur yang bagus dalam peringatan. misalnya Sistem mendeteksi problem maka Argus akan mengirimkan peringatan dan jika masalah masih belum teratasi dalam jumlah waktu yang ditentukan (mungkin karena admin sistem di rumah menikmati tidur), peringatan lain akan dikirim ke orang lain.

Apa yang anda gunakan?

Apakah anda memiliki pengalaman menggunakan tools-tools tersebut, mari sharing bersama di kolom komentar. karena berbagi tak pernah rugi :)

Sumber: [sixrevisions.com](http://sixrevisions.com/tools/10-free-server-network-monitoring-tools-that-kick-ass/)