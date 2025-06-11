# Struktur File System di Linux

Berbeda dengan sistem operasi Windows yang menggunakan huruf drive seperti C:\ dan D:\, Linux menggunakan struktur hirarki pohon yang dimulai dari root directory (/). Semua file dan direktori berada di bawah direktori root.

Di bawah root terdapat sejumlah direktori standar yang memiliki fungsi spesifik. Berikut penjelasan direktori utama yang umum ditemukan:

| Folder | Keterangan |
| ------ | ---------- |
| /bin   | Berisi binary atau executable file untuk perintah dasar Linux yang bisa digunakan semua user |
| /boot   | Berisi file yang diperlukan untuk proses booting Linux, termasuk kernel |
| /dev   | Penyimpan file khusus yang merepresentasikan perangkat keras (device) seperti USB, harddisk, dll |
| /etc   | Direktori untuk menyimpan file konfigurasi sistem |
| /home   | Berisi folder pribadi untuk setiap user yang terdaftar di sistem |
| /lib   | Menyimpan library penting untuk program di /bin dan /sbin |
| /media | Lokasi otomatis untuk mounting media eksternal (USB, CD/DVD) |
| /mnt   | Tempat untuk mounting filesystem secara manual |
| /opt   | Lokasi opsional untuk software tambahan dari pihak ketiga |
| /proc   | Virtual filesystem yang menampilkan informasi kernel dan proses |
| /root   | Home directory untuk superuser (root) |
| /run   | Direktori penyimpanan informasi runtime sistem |
| /sbin   | Berisi program untuk administrasi sistem |
| /srv   | Menyimpan data untuk layanan server seperti web atau FTP |
| /tmp   | Direktori penyimpanan file sementara |
| /usr   | Menyimpan program, library, dan dokumentasi tambahan |