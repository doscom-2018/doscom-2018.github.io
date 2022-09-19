### **Setting IP Static di Fedora 15**
_Posted by mazumam on Jun 13, 2012_
<br>
in Fedora, IP dan Subnetting, Networking, Tutorial | 0 comments	

<p align="center">
	<img src="./posts/2012-06-13-setting-ip-static-di-fedora-15/FEDORA_LOGO.png" height="250px" alt="logo">
</p> 

Berikut adalah langkah-langkah konfigurasi IP Static di fedora 15

matikan  NetworkManager di startup
```
chkconfig NetworkManager off
```

Hidupkan network  di startup:
```
chkconfig --level 35 network on
```

Selanjutnya buat Script Konfigurasi network untuk interface, misal nama interfacemu eth0 dan mac address interfacemu 00:0C:29:F0:61:46,
```
cd /etc/sysconfig/network-scripts/

vi ifcfg-eth0
```

masukkan konfigurasi berikut :
```
BOOTPROTO=none
HWADDR=00:0C:29:F0:61:46
DNS1=192.168.0.1
DNS2=8.8.8.8

GATEWAY=192.168.0.1
IPADDR=192.168.0.2
NETMASK=255.255.255.0
ONBOOT=yes
TYPE=Ethernet
IPV6INIT=no
USERCTL=no
NM_CONTROLLED=no
PREFIX=24
```

Stop NetworkManager dan start network
```
service NetworkMananger stop

service network start
```

selesai,

semoga bermanfaat :)

sumber <http://www.mazumam.web.id/2012/06/setting-ip-static-di-fedora-15.html>