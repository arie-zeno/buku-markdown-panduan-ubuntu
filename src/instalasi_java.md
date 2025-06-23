# Instalasi Java
Java adalah bahasa pemrograman berorientasi objek yang banyak digunakan dalam pengembangan aplikasi berbasis desktop, web, dan mobile. Java dikenal karena portabilitasnya, yang memungkinkan aplikasi yang ditulis dalam Java dapat dijalankan di berbagai platform tanpa perlu modifikasi. Hal ini tercapai melalui prinsip "Write Once, Run Anywhere" (WORA) yang menjadi salah satu keunggulan utama dari Java.
## Langkah-Langkah Instalasi
### 1. Periksa versi Java
Sebelum menginstall Java, periksa apakah sudah ada versi yang terpasang:
```bash
java --version
```
Jika outputnya menunjukkan versi java, maka java sudah terpasang. Namun jika belum terinstall maka outputnya akan seperti berikut:
```bash
bash: java: command not found
```
### 2. Perbarui daftar paket
Gunakan perintah berikut pada terminal untuk memperbarui paket:
```bash
sudo apt update && sudo apt upgrade -y 
```
### 3. Install Java
Untuk menginstall java gunakan perintah berikut :
```bash
sudo apt install openjdk-21-jdk -y
Jika instalasi berhasil maka output baris terakhir akan seperti berikut:
Processing triggers for man-db (2.10.2-1) ...
Setting up libxdmcp-dev:amd64 (1:1.1.3-0ubuntu5) ...
Setting up libxcb1-dev:amd64 (1.14-3ubuntu3) ...
Setting up libx11-dev:amd64 (2:1.7.5-1ubuntu0.3) ...
Setting up libxt-dev:amd64 (1:1.2.1-1) ...
```
### 4. Verifikasi instalasi
Verifikasi instalasi dengan memeriksa versi java yang baru diinstall:
```bash
java --version 
```
Outputnya akan menunjukkan versi java seperti berikut:
```bash
openjdk 21.0.5 2024-10-15
OpenJDK Runtime Environment (build 21.0.5+11-Ubuntu-1ubuntu122.04)
OpenJDK 64-Bit Server VM (build 21.0.5+11-Ubuntu-1ubuntu122.04, mixed mode, sharing)
```