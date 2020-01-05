## Blog Doscom
> Blog ini adalah kumpulan tulisan pengurus dan sesepuh doscom baik dulu sekarang maupun seterusnya.

blog ini dibuat dengan custom framework yang menggabungkan [markdown parser](https://github.com/showdownjs/showdown), [bootstrap 3](https://getbootstrap.com/) dan [XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

### Untuk membuat post baru, lakukan
1. clone git ini.
2. masuk ke posts dan buat folder baru dengan format.
```
YYYY-MM-DD-judul-post
```
3. buka `index.md` dan tambahkan nama folder ke index.
4. masuk ke folder yang baru di buat dan buat `index.md`.
5. tulis post yang diinginkan pada index.md dengan formatting markdown &/ html.
5. git add, commit, dan push.
6. pull request ke repositori utama.

> pastikan tak menggunakan karakter selain `1234567890abcdefghijklmnopqrstuvwxyz` dan `-` pada index

### Cara kerja framework blog
1. blog diload oleh user
2. blog meload script core.js
3. core.js melakukan xmlhttprequest ke posts/index.md 
4. core.js mengcapture url yang direquest user
5. jika url terdapat pada index, core.js melakukan xmlhttprequest sesuai post yang dituju
6. kemudian index pada post diparse ke html dan ditampilkan ke page
7. jika url tak ada maka respond 404
8. jika url tak berupa custom page, maka load homepage
9. homepage berupa index ke-0 pada posts/index.md 
10. jika url berupa custom page yang defined, load defined page

### Kelebihan
* penulis dapat dengan mudah menulis diberbagai platform dengan syarat terinstall git.
* penulis tak perlu menginstall tools tambahan seperti [Hugo](https://gohugo.io/) & [Jekyll](https://jekyllrb.com/).
* penulis tak perlu secara manual mengenerate static page setelah menulis.

### Kekurangan
* spacing dan layouting masih cukup rumit karena markdown parser yang kurang sempurna namun dapat diakali dengan menggunakan html.

<https://http://blog.doscom.org>
