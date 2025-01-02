# Instalasi XAMPP


Kunjungi halaman [XAMPP](https://www.apachefriends.org) untuk mengunduh paket installasi xampp.

![xampp](img/xampp/img_3.png)

Ubah permissions file agar bisa dieksekusi dengan perintah `chmod 755 xampp-linux-*-installer.run`

![xampp](img/xampp/img_4.png)

Kemudian eksekusi installer dengan perintah `sudo ./xampp-linux-*-installer.run` maka jendela setup installasi akan muncul.

![xampp](img/xampp/img_5.png)

Setelah selesai setup, xampp akan terinstall pada folder /opt/lampp


Untuk menjalankan service xampp melalui CLI dapat menggunakan perintah `sudo /opt/lampp/lampp start`. Untuk memeriksa service apakah sudah berjalan gunakan perintah ` sudo /opt/lampp/lampp status`. Kemudian untuk menghentikan service xampp dapat menggunakan perintah `sudo /opt/lampp/lampp stop`.

![xampp](img/xampp/img_6.png)

Untuk menjalankan service xampp dengan GUI jalankan perintah `sudo /opt/lampp/manager-linux-x64.run`

![xampp](img/xampp/img_8.png)
