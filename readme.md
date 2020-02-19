## Blog Doscom
> Blog ini adalah kumpulan tulisan pengurus dan sesepuh doscom baik dulu sekarang maupun seterusnya.

<https://blog.doscom.org>

blog ini dibuat dengan custom framework yang menggabungkan [markdown parser](https://github.com/showdownjs/showdown), [bootstrap 3](https://getbootstrap.com/) dan [XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

### Untuk membuat post baru, lakukan
1. clone git ini.
2. masuk ke posts dan buat folder baru dengan format.
```
YYYY-MM-DD-Judul-Post-Yang-Akan-Dibuat
```
3. buka `index.md` dan tambahkan nama folder ke index.
4. masuk ke folder yang baru di buat dan buat `index.md`.
5. tulis post yang diinginkan pada index.md dengan formatting markdown &/ html.
5. git add, commit, dan push.
6. pull request ke repositori utama.

> pastikan tak menggunakan karakter selain `1234567890abcdefghijklmnopqrstuvwxyz` dan `-` sebagai pemisah pada index

### Cara kerja framework blog
1. Blog diload oleh user
2. Blog meload script `js/core.js`
3. `js/core.js` melakukan `XmlHttpRequest (XHR)` ke `pages/index.md` 
4. `js/core.js` mengcapture url yang direquest user
5. Jika `URL` terdapat pada `pages/index.md`, `js/core.js` melakukan `XHR` sesuai page yang dituju
6. Kemudian `pages/page_yang_dituju/index.md` diparse ke html dan ditampilkan ke blog
7. Jika `URL` tak ada pada `pages/index.md` maka lakukan `XHR` ke `posts/index.md`
8. Jika `URL` terdapat pada `posts/index.md`, `js/core.js` melakukan `XHR` sesuai post yang dituju
9. Kemudian `posts/page_yang_dituju/index.md` diparse ke html dan ditampilkan ke blog
10. Jika `URL` berupa kosong, maka load `Homepage`
11. Jika `URL` tidak ada pada `pages/index.md` dan `posts/index.md` maka return `404`

### Kelebihan
* penulis dapat dengan mudah menulis diberbagai platform dengan syarat terinstall git.
* penulis tak perlu menginstall tools tambahan seperti [Hugo](https://gohugo.io/) & [Jekyll](https://jekyllrb.com/).
* penulis tak perlu secara manual mengenerate static page setelah menulis.

### Kekurangan
* spacing dan layouting masih cukup rumit karena markdown parser yang kurang sempurna namun dapat diakali dengan menggunakan html.
