# Instalasi Python
Python adalah salah satu bahasa pemrograman yang paling populer dan banyak digunakan di berbagai bidang, termasuk pengembangan web, analisis data, kecerdasan buatan, hingga otomatisasi tugas. Menurut survei tahunan yang dilakukan oleh Stack Overflow, Python secara konsisten menempati peringkat teratas sebagai bahasa yang paling disukai oleh pengembang. Hal ini disebabkan oleh sintaksnya yang sederhana, ekosistem pustaka yang luas, serta dukungan komunitas yang sangat aktif.

## Langkah-Langkah Instalasi
### 1. Periksa Python apakah sudah terinstall
Sebelum menginstal Python, periksa apakah Python sudah terinstal di sistem. Gunakan perintah berikut di terminal:

```python
python3 -V`
```

Jika Python sudah terinstall maka outputnya akan seperti berikut:

```python
Python 3.10.12
```

Secara bawaan Ubuntu 22.04 LTS sudah terpasang python versi 3.10.12.
Jika Python belum terinstall dapat melanjutkan langkah-langkah selanjutnya.
### 2. Perbarui Sistem
Sebelum melakukan instalasi, pastikan sistem Ubuntu dalam keadaan terbaru dengan memperbarui daftar paket terlebih dahulu, pada terminal gunakan perintah berikut:
```bash
sudo apt update && sudo apt upgrade -y
```

### 3. Install Python
Gunakan perintah berikut untuk menginstal Python:

```bash
sudo apt install python3 -y
```

Jika instalasi berhasil outputnya akan seperti berikut :

```bash
Unpacking python3 (3.10.6-1~22.04.1) ...
Setting up python3 (3.10.6-1~22.04.1) ...
running python rtupdate hooks for python3.10...
running python post-rtupdate hooks for python3.10...
Processing triggers for man-db (2.10.2-1) ...
```
### 4. Verifikasi instalasi
Verifikasi instalasi dengan memeriksa versi python yang baru diinstall
```python
python3 -V
```
Outputnya akan seperti berikut:
```python
Python 3.10.12
```
### 5. Membuat Alias Python
Agar python dapat dijalan dengan perintah “python” saja maka install terlehih dahulu python-is-python3 dengan perintah berikut.
```python
sudo apt install python-is-python3 -y
```
Jika instalasi berhasil output baris terakhirnya akan seperti berikut:
```bash
Preparing to unpack .../python-is-python3_3.9.2-2_all.deb ...
Unpacking python-is-python3 (3.9.2-2) ...
Setting up python-is-python3 (3.9.2-2) ...
Processing triggers for man-db (2.10.2-1) ...
```
### 6. Menjalankan Python Interaktif
Setelah terinstal, python dapat langsung dijalankan melalui terminal dengan perintah berikut:
```bash
python
```
Jika berhasil outputnya akan seperti berikut:
```bash
Python 3.10.12 (main, Jan 17 2025, 14:35:34) [GCC 11.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```