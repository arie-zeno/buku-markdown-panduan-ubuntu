# Instalasi Pip 
PIP adalah sistem manajemen paket untuk Python yang memungkinkan pengguna menginstal, memperbarui, dan menghapus pustaka Python dengan mudah. Dengan menggunakan PIP, pengguna dapat mengakses ribuan pustaka yang tersedia di Python Package Index (PyPI) tanpa perlu menginstalnya secara manual.

## Langkah-Langkah Instalasi
### 1. Pastikan Python sudah terpasang
Gunakan perintah berikut untuk memastikan python sudah terpasang:
```bash
python3 -V
```
Jika sudah terpasang outputnya akan seperti berikut :
```bash
Python 3.10.12
```
### 2. Perbarui sistem
Untuk memperbarui sistem dapat menggunakan perintah berikut:
```bash
sudo apt update && sudo apt upgrade -y
```
### 3. Install Pip 
Gunakan perintah berikut untuk memasang pip.
```bash
sudo apt install python3-pip -y
```
Tunggu hingga proses instalasi selesai, berikut output baris terakhir jika instalasi telah selesai:
```bash
Preparing to unpack .../python3-pip_22.0.2+dfsg-1ubuntu0.5_all.deb ...
Unpacking python3-pip (22.0.2+dfsg-1ubuntu0.5) ...
Setting up python3-distutils (3.10.8-1~22.04) ...
Setting up python3-setuptools (59.6.0-1.2ubuntu0.22.04.2) ...
Setting up python3-wheel (0.37.1-2ubuntu0.22.04.1) ...
Setting up python3-dev (3.10.6-1~22.04.1) ...
Setting up python3-pip (22.0.2+dfsg-1ubuntu0.5) ...
Processing triggers for man-db (2.10.2-1) ...
```
### 4. Verifikasi instalasi
Periksa versi pip yang sudah terpasang dengan perintah berikut.
```bash
pip -V
Outputnya akan seperti berikut:
pip 22.0.2 from /usr/lib/python3/dist-packages/pip (python 3.10)
```