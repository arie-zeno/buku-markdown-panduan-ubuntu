# Instalasi Composer
Composer adalah dependency manager untuk bahasa pemrograman PHP yang digunakan untuk mengelola pustaka dan dependensi dalam proyek PHP. Composer memungkinkan pengembang untuk mendeklarasikan pustaka yang diperlukan untuk proyek mereka, dan secara otomatis menangani pemasangan serta pembaruan pustaka-pustaka tersebut.
Dengan Composer, pengelolaan dependensi dalam proyek PHP menjadi lebih mudah dan efisien. Composer juga mendukung integrasi dengan Packagist, yang merupakan repositori utama untuk pustaka PHP, sehingga memudahkan instalasi berbagai paket pihak ketiga yang diperlukan dalam pengembangan aplikasi.
## Langkah-Langkah Instalasi
### 1. Memastikan PHP Terinstal
Sebelum menginstal Composer, pastikan PHP sudah terinstal di sistem dengan menjalankan perintah berikut:
```bash
php -v
```
Output akan menunjukkan versi PHP seperti berikut:
```bash
PHP 8.3.16 (cli) (built: Jan 19 2025 13:45:36) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.3.16, Copyright (c) Zend Technologies
    with Zend OPcache v8.3.16, Copyright (c), by Zend Technologies
Jika PHP belum terinstal ikuti langkah instalasi PHP terlebih dahulu.
```
### 2. Mengunduh dan Menginstal Composer
Gunakan perintah berikut untuk mengunduh dan menginstal Composer:
```bash
curl -sS https://getcomposer.org/installer | php
Setelah unduhan selesai outputnya akan seperti berikut:
All settings correct for using Composer
Downloading...

Composer (version 2.8.5) successfully installed to: /home/arie/composer.phar
Use it: php composer.phar
```
Jalankan perintah berikut untuk memindahkan Composer ke direktori yang dapat diakses secara global:
```bash
sudo mv composer.phar /usr/local/bin/composer
```
### 3. Memverifikasi Instalasi
Setelah Composer berhasil diinstal, verifikasi dengan menjalankan perintah:
```bash
composer -V
```
Jika instalasi berhasil akan terlihat output yang menunjukkan versi Composer yang terinstal seperti berikut:
```bash
Composer version 2.8.5 2025-01-21 15:23:40
PHP version 8.3.16 (/usr/bin/php8.3)
```