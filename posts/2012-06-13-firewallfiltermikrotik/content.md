### **Lindungi client dari virus dengan firewall di mikrotik**
_By Chaerul Umam On 13/06/2012 · Leave a Comment_

<p align="center">
	<img src="./posts/2012-06-13-firewallfiltermikrotik/firewall.jpg" height="150px" alt="firewall">
</p> 

Untuk melindungi jaringan pelanggan, kita harus memeriksa semua traffic yang melewati router dan blok yang tidak diinginkan. Untuk lalu lintas udp icmp, tcp, kita akan menciptakan rantai, dimana semua paket yang tidak diinginkan akan dicabut. Untuk awal, kita bisa copy dan paste perintah berikut ke RouterOS terminal konsol:
```
/ip firewall filter

add chain=forward connection-state=established comment=”allow established connections”
add chain=forward connection-state=related comment=”allow related connections”
add chain=forward connection-state=invalid action=drop comment=”drop invalid connections”
```

Selanjutnya, kita harus menyaring dan drop semua paket yang tidak diinginkan yang terlihat seperti berasal dari host yang terinfeksi virus
```
/ip firewall filter
add chain=virus protocol=tcp dst-port=135-139 action=drop comment=”Drop Blaster Worm”
add chain=virus protocol=udp dst-port=135-139 action=drop comment=”Drop Messenger Worm”  
add chain=virus protocol=tcp dst-port=445 action=drop comment=”Drop Blaster Worm”
add chain=virus protocol=udp dst-port=445 action=drop comment=”Drop Blaster Worm”
add chain=virus protocol=tcp dst-port=593 action=drop comment=”________”
add chain=virus protocol=tcp dst-port=1024-1030 action=drop comment=”________”
add chain=virus protocol=tcp dst-port=1080 action=drop comment=”Drop MyDoom”
add chain=virus protocol=tcp dst-port=1214 action=drop comment=”________”
add chain=virus protocol=tcp dst-port=1363 action=drop comment=”ndm requester”
add chain=virus protocol=tcp dst-port=1364 action=drop comment=”ndm server”
add chain=virus protocol=tcp dst-port=1368 action=drop comment=”screen cast”
add chain=virus protocol=tcp dst-port=1373 action=drop comment=”hromgrafx”
add chain=virus protocol=tcp dst-port=1377 action=drop comment=”cichlid”
add chain=virus protocol=tcp dst-port=1433-1434 action=drop comment=”Worm”
add chain=virus protocol=tcp dst-port=2745 action=drop comment=”Bagle Virus”
add chain=virus protocol=tcp dst-port=2283 action=drop comment=”Drop Dumaru.Y”
add chain=virus protocol=tcp dst-port=2535 action=drop comment=”Drop Beagle”
add chain=virus protocol=tcp dst-port=2745 action=drop comment=”Drop Beagle.C-K”
add chain=virus protocol=tcp dst-port=3127-3128 action=drop comment=”Drop MyDoom”
add chain=virus protocol=tcp dst-port=3410 action=drop comment=”Drop Backdoor OptixPro”
add chain=virus protocol=tcp dst-port=4444 action=drop comment=”Worm”
add chain=virus protocol=udp dst-port=4444 action=drop comment=”Worm”
add chain=virus protocol=tcp dst-port=5554 action=drop comment=”Drop Sasser”
add chain=virus protocol=tcp dst-port=8866 action=drop comment=”Drop Beagle.B”
add chain=virus protocol=tcp dst-port=9898 action=drop comment=”Drop Dabber.A-B”
add chain=virus protocol=tcp dst-port=10000 action=drop comment=”Drop Dumaru.Y”
add chain=virus protocol=tcp dst-port=10080 action=drop comment=”Drop MyDoom.B”
add chain=virus protocol=tcp dst-port=12345 action=drop comment=”Drop NetBus”
add chain=virus protocol=tcp dst-port=17300 action=drop comment=”Drop Kuang2″
add chain=virus protocol=tcp dst-port=27374 action=drop comment=”Drop SubSeven”
add chain=virus protocol=tcp dst-port=65506 action=drop comment=”Drop PhatBot, Agobot, Gaobot”

add chain=forward action=jump jump-target=virus comment=”jump to the virus chan”
```

sekian, semoga bermanfaat :)

sumber <http://www.mazumam.web.id/2012/06/lindungi-client-dari-virus-dengan.html>
