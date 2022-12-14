#### Kernel 2.6.29; Kernel Baru, Maskot Baru
_Diposting oleh ahmadSAIFULmuhajir di 13.56 . Jumat, 27 Maret 2009_
<br>
Label: File System, Kernel, Linux, OCFS

<div align="center">
	<img src="./posts/2009-03-27-kernel-2629-kernel-baru-maskot-baru/tuz.png" height="250px" alt="Tuz, si Maskot Baru">
</div> 

Linux kernel untuk pertama kalinya pada 2009 akan segera dirilis, sebuah tahapan baru generasi file sistem pada Linux dan maskot untuk boot yang baru, untuk sementara. 

Kernel 2.6.29 merupakan kernel yang datang tiga bulan setelah versi 2.6.28 dan memperkenalkan improvisasi pilihan jaringan nirkabel yang mendukung WiMAX, sebuah langkah baru yang ditujukan untuk dukungan terhadap sebuah teknologi broadband yang diperkirakan akanbooming. Kernel 2.6.29 datang sebagai lanjutan dari kedewasaan Linux yang merupakan tandingan bagi Unix dan sebagai pandangan baru untuk kalangan enterprise dalam memilih kelas ekonomi sistem saat terjangan ekonomi yang memburuk.

Hal yang paling menarik dan menjadi catatan bagi Linus Torvalds, pendiri Linux adalah maskot baru-nya.

“Perubahan yang paling nampak adalah perubahan (sementara) logo menjadi Tuz, Tasmanian Devil,” begitu tulisan Linus dalam milis saat mengumumkan 2.6.29.

Tuz, adalah sebuah kartun Tasmanian Devil, yang digunakan untuk menggantikan logo resmi Linux, Tux si penguin, sebagai bentuk kepedulian Linus untuk meningkatkan kesadaran masyarakat terhadap Tasmanian Devil. Torvalds mengadopsi desain setelah menerima sebuah Tuz mewah dan berpartisipasi dalam kegiatan amal untuk Tasmanian Devil awal tahun ini untuk Linux.conf.au.

Di samping maskot baru (sementara), Linux 2.6.29 juga memamerkan fitur baru pada Linux yaitu file sistem BTRFS, yang menjadi debut pada kernel tersebut. Menurut pendukung kernel ini, file sistem BTRFS adalah gagasan dari teknisi Oracle Chris Mason, dan dapat memberikan peningkatan skalabilitas dan kecepatan file sistem.

“Tujuan utamanya adalah agar (Linux) dapat memetakan besarnya penyimpanan yang tersedia,” tutur Mason, direktur teknisi kernel Linux di Oracle dalam wawancara dengan <http://InternetNews.com> tahun lalu. “Scaling bukan hanya tentang mengatasi penyimpanan, tapi juga berarti untuk dapat mengelola dan mengatur dengan antarmuka yang bersih yang memungkinkan orang melihat apa yang digunakan dan menjadikannya lebih handal.”

BTRFS saat ini sedang dalam pengembangan dan belum berakhir di 2.6.29 ini. Alih-alih, BTRFS memang disiapkan untuk tujuan testing awal. Untuk itu, BTRFS menggunakan metode pengembangan yang sama dengan file sistem Linux lainnya. File sistem Ext 4, milsanya, yang dalam debut kernel 2.6.19 pada November 2006 lalu, ternyata hanya digunakan dalam distribusi komunitas Linux yang akan datang pada rilis Red Hat, Fedora 11 dan Ubuntu “Karmic Koala”.

Ext 4 sendiri mendapatkan tambahan update pada kernel baru 2.6.29 untuk mendukung mode operasi yang tidak membutuhkan journaling, sebuah metode pelacakan dimana semua bit berada, yang akan meningkatkan kinerja. Perbaikan file sistem lain dalam Linux 2.6.29 berasal dari pembaruan untuk OCFS (Oracle Cluster Filesystem) yang didebut pada kernel 2.6.16. Dalam 2.6.29, OCFS mendapat dukungan untuk checksum metadata agar lebih dapat meningkatkan integritas pemeriksaan file data. OCFS didukung oleh Linux Oracledengan ketersediaan yang sama besar dengan Novell SUSE Linux Enterprise Server 11, secara resmi diumumkan hari ini (24/3/09).

File sistem read-only, kompresi squashFS juga didebut dalam kernel 2.6.29 ini. Meskipun, file sistem ini telah digunakan secara luas sejak beberapa tahun lalu dalam distribusi Linux Live CD, dimana vendor Linux memberikan kemampuan kepada user untuk dapat mencoba Linux secara langsung dari CD tanpa harus melakukan instalasi kedalam disk.

Mungkin file sistem adalah bagian terbesar dari kernel 2.6.29 ini, tetapi tentu saja bukan satu-satunya bagian. 

WiMAX, yang merupakan standar broadband nirkabel, dimasukkan dalam kernel 2.6.30. Kernel khusus untuk tumpukan WiMAX telah dikembangkan oleh Intel dengan dukungan device Intel Wireless WiMAX/Wi-Fi Link 5050.

translated from <http://www.internetnews.com> and published on <http://almuhajir.wordpress.com> also.