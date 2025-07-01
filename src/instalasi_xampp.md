# Instalasi XAMPP
XAMPP adalah paket perangkat lunak open-source yang menyediakan server web lokal lengkap yang terdiri dari Apache, MariaDB/MySQL, PHP, dan Perl. XAMPP sangat cocok digunakan untuk pengembangan dan pengujian aplikasi web secara lokal tanpa memerlukan server eksternal. Aplikasi ini mendukung sistem operasi lintas platform dan menyediakan antarmuka kontrol yang mempermudah manajemen layanan server.
## Langkah-Langkah Instalasi
### 1. Unduh File Instalasi XAMPP
Kunjungi https://www.apachefriends.org/download.html kemudian unduh file instalasi untuk sistem operasi Linux.

### 2. Install XAMPP
Pada terminal masuk ke direktori tempat file instalasi open eLearning disimpan (biasanya terletak pada direktori Downloads), gunakan perintah berikut untuk berpindah direktori: 
```bash
cd Downloads/
```
Berikut adalah output jika telah berpindah direktori:
```bash
arie@zeno:~/Downloads$ 
```
Kemudian gunakan perintah berikut untuk memberi izin eksekusi file:
```bash
chmod 755 xampp-linux-x64-8.0.30-0-installer.run
```
Kemudian jalankan file tersebut dengan perintah berikut:
```bash
sudo ./xampp-linux-x64-8.0.30-0-installer.run
```
Kemudian wizard instalasi XAMPP akan muncul.
### 3. Verifikasi Instalasi
XAMPP yang sudah terinstall dapat dijalankan dengan menggunakan perintah berikut.
```bash
sudo /opt/lampp/manager-linux-x64.run
```
Berikut adalah XAMPP ketika berjalan di Ubuntu 22.04 LTS.

![icon](img/xampp_run.png)
