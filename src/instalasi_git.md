# Instalasi Git
Git adalah sistem kontrol versi terdistribusi yang digunakan secara luas dalam pengembangan perangkat lunak untuk melacak perubahan kode sumber selama pengembangan. Git memungkinkan kolaborasi, manajemen revisi, serta integrasi dengan layanan hosting seperti GitHub, GitLab, dan Bitbucket. Git juga mendukung branching, merging, dan pemantauan histori perubahan secara efisien, sehingga menjadi alat penting dalam pengembangan perangkat lunak modern, baik individual maupun tim.
## Langkah-Langkah Instalasi
### 1. Perbarui Sistem
Sebelum melakukan instalasi pastikan sistem Ubuntu dalam keadaan terbaru dengan memperbarui daftar paket terlebih dahulu, pada terminal gunakan perintah berikut:
```bash
sudo apt update && sudo apt upgrade -y
```
### 2. Install Git
Gunakan perintah berikut untuk menginstal Python:
```bash
sudo apt install git -y
```
Jika instalasi berhasil outputnya akan seperti berikut :
```bash
Unpacking git (1:2.43.0-1ubuntu7.2) ...
Setting up liberror-perl (0.17029-2) ...
Setting up git-man (1:2.43.0-1ubuntu7.2) ...
Setting up git (1:2.43.0-1ubuntu7.2) ...
Processing triggers for man-db (2.12.0-4build2) ...
```
### 3. Verifikasi instalasi
Verifikasi instalasi dengan memeriksa versi git yang baru dipasang
```bash
git --version
```
Jika berhasil dipasang outputnya akan seperti berikut:
```bash
git version 2.34.1
```