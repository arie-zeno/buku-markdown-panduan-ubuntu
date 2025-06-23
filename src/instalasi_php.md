# Instalasi PHP
PHP (Hypertext Preprocessor) adalah bahasa pemrograman yang banyak digunakan untuk pengembangan web. PHP sering digunakan untuk membuat aplikasi berbasis web dinamis, seperti situs web, e-commerce, sistem manajemen konten (CMS), dan aplikasi web lainnya. Salah satu keunggulan PHP adalah kemampuannya untuk berintegrasi dengan berbagai database, seperti MySQL dan PostgreSQL, serta mendukung berbagai framework dan CMS seperti Laravel, WordPress, dan Drupal.
## Langkah-Langkah Instalasi
### 1. Periksa versi PHP
Sebelum menginstall php, periksa apakah sudah ada versi yang terpasang:
```bash
php -v
```
Jika outputnya menunjukkan versi php, maka php sudah terpasang. Namun jika belum terinstall maka outputnya akan seperti berikut:
```bash
bash: php: command not found
```
### 2. Perbarui daftar paket
Gunakan perintah berikut pada terminal untuk memperbarui paket:
```bash
sudo apt update && sudo apt upgrade -y 
```
### 3. Install PHP
Untuk menginstall php gunakan perintah berikut :
```bash
sudo apt install php libapache2-mod-php php-cli php-mysql -y
```
Jika instalasi berhasil maka output baris terakhir akan seperti berikut:
```bash
Setting up php8.3 (8.3.16-1+ubuntu22.04.1+deb.sury.org+1) ...
Setting up libapache2-mod-php (2:8.3+95+ubuntu22.04.1+deb.sury.org+1) ...
Setting up php (2:8.3+95+ubuntu22.04.1+deb.sury.org+1) ...
Processing triggers for man-db (2.10.2-1) ...
Processing triggers for php8.3-cli (8.3.16-1+ubuntu22.04.1+deb.sury.org+1) ...
Processing triggers for libapache2-mod-php8.3 (8.3.16-1+ubuntu22.04.1+deb.sury.org+1) ...
```
### 4. Verifikasi instalasi
Verifikasi instalasi dengan memeriksa versi php yang baru diinstall:
```bash
php -v 
```
Outputnya akan menunjukkan versi php seperti berikut:
```bash
PHP 8.3.16 (cli) (built: Jan 19 2025 13:45:36) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.3.16, Copyright (c) Zend Technologies
    with Zend OPcache v8.3.16, Copyright (c), by Zend Technologies
```