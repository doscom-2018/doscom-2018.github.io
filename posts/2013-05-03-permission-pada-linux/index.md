### **Pengaturan Permission Pada System Linux**
_Posted by Haris Praba Aditya on May 3, 2013_
<br>
in Operating System, Tutorial | 0 comments	

Pengaturan Permission Pada System Linux	

Mungkin banyak teman-teman yang masih bingung mengenai pengaturan permission pada system Linux atau Unix. Apalagi yang baru migrasi dan masih belajar. Kalau di system lain dimana saja kita bisa membuat dan delete file atau folder dengan bebas, tiba-tiba setelah pakai Linux cuma bisa kaya gitu di home directory. Apa sih penyebabnya?

Di system Linux dan Unix menerapkan mode permission yang berbeda dengan system Windows. Coba cek hasil ls -l berikut
```
haris@Fixer-Prime:~$ ls -l
total 3680908
drwxrwxr-x 3 haris haris 4096 Feb 26 09:06 ankama
drwxr-xr-x 2 haris haris 4096 Apr 19 23:21 Desktop
drwxr-xr-x 8 haris haris 4096 Apr 18 23:35 Documents
drwxrwxr-x 5 haris haris 4096 Mar 20 13:08 DOSCOM
drwxr-xr-x 5 haris haris 4096 Apr 18 23:35 Downloads
-rw-rw-r-- 1 haris haris 119677 Feb 5 22:50 install_modem_smartfren.pdf
-rw-r--r-- 1 root root 33988 Jun 4 2012 libusb-dev_0.1.12-23_i386.deb
drwxr-xr-x 4 haris haris 4096 Feb 27 19:54 Music
drwxr-xr-x 6 haris haris 4096 Apr 6 15:29 Pictures
drwxr-xr-x 2 haris haris 4096 Feb 5 18:16 Public
-rw-r--r-- 1 haris haris 1929324544 Apr 7 13:06 TeaLinuxOS-5.0-Kukicha.iso
drwxrwxr-x 10 haris haris 4096 Apr 6 21:56 TeaLinuxOS Project
drwxr-xr-x 2 haris haris 4096 Feb 5 18:16 Templates
drwxr-xr-x 4 haris haris 4096 Mar 30 21:40 Videos
drwxrwxr-x 4 haris haris 4096 Mar 20 14:50 VirtualBox VMs
```

Perhatikan kolom pertama. Itu adalah deskripsi permission pada folder atau file.

Oke, langsung saja saya jelaskan. Permission ini dibagi menjadi 3 bagian. Jika Anda pernah tahu permission seperti, 777, 644, 755 dan sebagainya, itu tidak sembarangan diketik seperti itu -_-

Jadi begini, ada 3 nomor. Yang pertama itu permission untuk owner (pemilik). Kedua itu Group. Dan ketiga untuk Other.
```
Sementara untuk angkanya,
1 adalah Excecute atau x
2 adalah Write atau w
4 adalah Read atau r
Jadi,
5 adalah Read dan Execute
6 adalah Read dan Write
7 adalah Read, Write, dan Execute
```

Jadi misalkan kita menset permission menjadi 644, berarti pemilik bisa melakukan Read dan Write, kemudian yang tergabung dalam Groub pemilik dapat Read saja, dan yang lain atau Other juga hanya bisa Read.

Cara merubah permission yaitu dengan perintah chmod.
```
haris@Fixer-Prime:~$ chmod 644 nama_file
```

untuk folder,
```
haris@Fixer-Prime:~$ chmod 755 -R nama_folder
```

Untuk folder kita harus mensetting menjadi execute agar bisa di akses. Tanpa execute folder tidak bisa diakses.

Oke, terimakasih. Semoga bermanfaat :)