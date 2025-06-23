# Instalasi MySQL
MySQL adalah sistem manajemen basis data relasional (RDBMS) open-source yang sangat populer dan digunakan oleh berbagai aplikasi untuk menyimpan dan mengelola data. MySQL memungkinkan pengguna untuk mengelola data dalam bentuk tabel yang saling terkait dan menyediakan query untuk manipulasi data dengan menggunakan bahasa SQL (Structured Query Language). MySQL banyak digunakan dalam pengembangan aplikasi berbasis web, termasuk pada platform seperti WordPress, Joomla, dan aplikasi berbasis PHP lainnya.
## Langkah-Langkah Instalasi
### 1. Perbarui daftar paket
Sebelum menginstal MySQL pastikan sistem diperbarui. Gunakan perintah berikut pada terminal untuk memperbarui sistem:
```bash
sudo apt update && sudo apt upgrade -y
```
### 2. Install MySQL
Gunakan perintah berikut untuk menginstal MySQL:
```bash
sudo apt install mysql-server -y
```
Jika instalasi berhasil output baris terakhirnya akan seperti berikut :
```bash
mysqld is running as pid 90340
Created symlink /etc/systemd/system/multi-user.target.wants/mysql.service → /lib
/systemd/system/mysql.service.
Setting up mysql-server (8.0.40-0ubuntu0.22.04.1) ...
Processing triggers for man-db (2.10.2-1) ...
Processing triggers for libc-bin (2.35-0ubuntu3.8) ...
```
### 3. Verifikasi instalasi
Setelah instalasi selesai periksa status MySQL untuk memastikan layanan berjalan, gunakan perintah berikut:
```bash
sudo systemctl status mysql
```
Jika berhasil akan terlihat status active (running).
```bash
● mysql.service - MySQL Community Server
Loaded: loaded (/lib/systemd/system/mysql.service; enabled; vendor preset:>
Active: active (running) since Fri 2025-01-24 13:53:54 WITA; 1min 54s ago
Process: 90528 ExecStartPre=/usr/share/mysql/mysql-systemd-start pre (code=>
Main PID: 90536 (mysqld)
Status: "Server is operational"
```
### 4. Amankan Instalasi MySQL
Setelah MySQL terinstall, jalankan perintah pengamanan untuk meningkatkan keamanan database:
```bash
sudo mysql_secure_installation
```
Pada pengamanan database akan diminta :
• Mengatur kata sandi untuk root
• Menghapus pengguna anonim
• Menonaktifkan akses root dari jarak jauh.
• Menghapus database test.
• Memuat ulang tabel hak istimewa.
Setelah selesai mengamankan database maka akan terlihat output All done seperti berikut:
```bash
Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y
Success.

All done! 
```
### 5. Mengakses MySQL
Untuk masuk ke antarmuka MySQL, gunakan perintah berikut:
```bash
sudo mysql -u root -p
```
Masukkan kata sandi yang di atur selama proses pengamanan. Setelah berhasil masuk  akan melihat prompt MySQL seperti berikut:
```bash
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 10
Server version: 8.0.40-0ubuntu0.22.04.1 (Ubuntu)

Copyright (c) 2000, 2024, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> 
```