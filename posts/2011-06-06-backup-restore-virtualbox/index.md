### **Backup & Restore VirtualBox**
_Posted by fahri on 06/06/2011_

<div align="center">
	<img src="./posts/2011-06-06-backup-restore-virtualbox/1.png" height="150px" alt="img">
</div> 

Sebuah kasus, karena suatu alasan, kita menginstall Windows-XP pada VirtualBox (anggap aja XP-nya license, jadi nggak membajak). Kemudian, kita juga melakukan update beberapa fitur yang diperlukan dan juga tidak lupa menginstaal beberapa software (tentunya juga yang gratisan atau license). Suatu saat kita ingin menginstall linux yang menjadi host VirtualBox tersebut, entah karena sengaja ingin menguji coba sistem operasi lain, atau karena tidak sengaja karena kita melakukan konfigurasi yang salah dan sudah tak tertolong lagi.

Bagaimana dengan Win-XP kita yang sudah terinstall di VirtualBox? apakah harus merelakannya dan melakukan install ulang lagi (dan tentunya update fitur dan install semua aplikasi dari awal)? Oke itu kasus pribadi saya. Kasus lain, tidak ada masalah dengan sistem operasi host yang ada, kita hanya ingin meng-copy Win-XP host tadi ke PC atau laptop lain. Meng-copy-paste file .vdi yang ada di folder VirtualBox secara langsung bukan pilihan yang tepat, karena ternyata gagal dibuka di VirtualBox yang lain.

Sayangnya VirtualBox tidak menyediakan GUI untuk urusan ini, kita harus sedikit mengetikkan perintah di console untuk mengerjakan tugas ini. Oh ya, pertama kali jangan lupa untuk mematikan sistem operasi yang akan kita backup. Caranya anda pasti sudah tahu, kalau nggak tahu, silahkan tanya pada yang sudah tahu, hehehe. Kemudian untuk berjaga-jaga biar tidak error, sekalian detach virtual yang digunakan untuk menyimpan sistem operasi tersebut. Caranya :

1. Akses menu `File -> Virtual Media Manager` seperti ditunjukkan gambar di bawah, atau boleh juga pake Ctrl+D
    <div align="center">
        <img src="./posts/2011-06-06-backup-restore-virtualbox/2.png" height="350px" alt="img">
    </div> 

2. Kemudian klik kanan pada virtual media yang ingin dicopot dan klik release
    <div align="center">
        <img src="./posts/2011-06-06-backup-restore-virtualbox/3.png" height="350px" alt="img">
    </div> 
    <br>
    _Note: sebenarnya waktu pertama kali saya mencoba, saya tidak mencopot virtual media terlebih dahulu, tapi untuk berjaga-jaga menghindari error, lebih baik mencopot hardisk terlebih dahulu._

Selanjutnya buka terminal (atau command prompt kalau di windows) dan ketikkan perintah di bawah ini:
```
VBoxManage clonevdi /location/virtualmachine.vdi /destination/virtualmachine_backup.vdi
```

Dalam kasus saya, sesuai dengan letak vdi dan target backup vdi yang ada di laptop, perintahnya adalah sebagai berikut:
```
VBoxManage clonevdi ~/.VirtualBox/VDI/WindowsXP.vdi ~/WindowsXP_Backup.vdi
```

Ketik enter dan tunggu sampai prosesnya mencapai 100%, nggak lama kok hanya sangat luaaaaammmmmaaaa….. tergantung pada ukuran virtual machine yang kita backup juga. hehehehehe….

Selanjutnya adalah proses restore, atau install di PC atau Laptop lain. Proses ini relatif lebih mudah karena tersedia GUI untuk melakukannya. Langsung saja, langkahnya sebagai berikut :

1. Jalankan langkah Create New Machine seperti biasa, bisa dengan mengklik icon New pada toolbar, akses menu Machine ? New atau cukup dengan menekan Ctrl+D. Tampilan Create Virtual Machine yang familiar akan muncul.
2. Tekan next, isikan nama virtual machine dan type-nya. Tentu saja kalau backupnya win-xp jangan isikan operating system linux dan type ubuntu. Klik Next sekali lagi
    <div align="center">
        <img src="./posts/2011-06-06-backup-restore-virtualbox/4.png" height="300px" alt="img">
    </div> 
3. Isikan juga memory yang sesuai dengan virtual machine seperti biasa, lanjut lagi klik Next
4. Pada inputan virtual hardisk, tetap centang `Boot Hardisk` dan pilih `Use Existing Hardisk` seperti ditampilkan gambar di bawah. Jika pilihan masih kosong, cari backup .vdi yang sudah kita buat melalui browse file
    <div align="center">
        <img src="./posts/2011-06-06-backup-restore-virtualbox/5.png" height="300px" alt="img">
    </div> 
5. Selanjutnya Next & Finish
    <div align="center">
        <img src="./posts/2011-06-06-backup-restore-virtualbox/6.png" height="350px" alt="img">
    </div> 
Selesai tugas, dan sekarang kita bisa melanjutkan makan mie yang sudah dimasak tadi. Oh maaf itu punya saya :)
