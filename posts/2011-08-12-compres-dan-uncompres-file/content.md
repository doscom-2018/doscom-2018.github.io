#### Compres dan Uncompres file
_Chaerul Umam | 12/08/2011 | 2 comments_

Di linux kita sering menumpai file hasil kompresi dengan extensi tar, tar.gz,  tar.bz2  dan zip. saya akan membahas satu persatu cara compres dan uncompres/ekstrak ketiga file tersebut. karena saya yakin gak semuanya paham cara compres dan decompres file via terminal linux. :)

<br>
`.tar`

compress
```
tar cvf file.tar  file
```
uncompres
```
tar xvf file.tar
```

<br>
`.tar.gz`

compres
```
tar cvfz file.tar.gz  file
```
uncompres
```
tar xvfz file.tar.gz 
```

<br>
`.tar.bz2`

compres
```
tar cvfj file.tar.bz2  file
```
compres
```
tar xvfj file.tar.bz2 
```

<br>
`.zip`

compres
```
zip file.zip  file
```
compres beberapa file menjadi satu file zip sekaligus
```
zip -r file1.zip  file1  file2
```
uncompres
```
unzip file
```

<br>
sekian, walaupun sepele semoga bermanfaat.

source <http://www.mazumam.web.id/2011/08/compres-dan-uncompres-file-tar.html>