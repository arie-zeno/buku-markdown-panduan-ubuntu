# Instalasi GNS3
## Pendahuluan
GNS3 (Graphical Network Simulator 3) merupakan perangkat lunak yang memungkinkan simulasi jaringan komputer secara virtual tanpa memerlukan perangkat keras fisik. Perangkat lunak ini mendukung berbagai teknologi jaringan, seperti Cisco IOS, MikroTik, Juniper, dan perangkat lain yang kompatibel dengan virtualisasi.

### 1. Perbarui Daftar Paket
Sebelum memulai proses instalasi perbarui daftar paket sistem dengan menjalankan perintah berikut:
```bash
sudo apt update && sudo apt upgrade -y
```
### 2. Menambahkan Repository Resmi GNS3
Tambahkan repository resmi GNS3 untuk mendapatkan versi terbaru: 
```sudo add-apt-repository ppa:gns3/ppa -y```
Kemudian perbarui kembali daftar paket:
```sudo apt update```
### 3. Menginstal GNS3 dan Dependensi
Jalankan perintah berikut untuk menginstal GNS3:
sudo apt install gns3-gui gns3-server -y 
Jika jendela configure ubridge muncul pilih yes. Kemudian jika instalasi berhasil output baris terakhirnya akan seperti berikut:
```bash
Processing triggers for libglib2.0-0:amd64 (2.72.4-0ubuntu2.4) ...
Processing triggers for libglib2.0-0:i386 (2.72.4-0ubuntu2.4) ...
Processing triggers for libc-bin (2.35-0ubuntu3.9) ...
Processing triggers for man-db (2.10.2-1) ...
Setting up gns3-gui (2.2.53~jammy1) ...
   ```
### 4. Konfigurasi Izin Pengguna
Agar GNS3 dapat berjalan dengan optimal tambahkan pengguna ke grup berikut:
```
sudo usermod -aG ubridge $USER 
sudo usermod -aG libvirt $USER 
sudo usermod -aG kvm $USER 
sudo usermod -aG wireshark $USER
```
Kemudian lakukan restart sistem agar perubahan diterapkan :
```
reboot
```
### 5. Install Dynamips
Jika ingin menggunakan Dynamips (Cisco Router Emulator) install dependensinya:
```
sudo apt install dynamips -y
```
### 6. Install Qemu
Jika ingin menggunakan appliance berbasis QEMU install paket qemu:
```
sudo apt install qemu-kvm qemu-utils libvirt-daemon-system virt-manager -y
``` 
### 7. Menjalankan GNS3
GNS3 yang sudah terinstall dapat ditemukan pada menu show applications atau dapat menggunakan perintah berikut pada terminal:
```
gns3
```
Pada saat pertama kali menjalankan GNS3 akan muncuk jendela wizard untuk konfigurasi server, pilih “run appliance on my local computer“ kemdian klik next.

![icon](img/gns3/wizard.png)

Pada jendela selanjutnya biarkan tetap default kemudian klik Next sampai terdapat tulisan:
```
Connection to the local GNS3 server has been successful!
```

### 8. Menambahkan Appliance
Agar dapat menggunakan berbagai perangkat jaringan tambahan perlu menambahkan appliance ke dalam GNS3.
#### Menambahkan Appliance dengan KVM/QEMU.
1. **Unduh appliance/perangkat**<br>
   Unduh appliance/perangkat yang ingin ditambakan dalam bentuk image file, berikut merupakan link untuk mengunduh appliance yang dapat ditambahkan ke GNS3 : <br>
   [GNS3 Appliances](https://drive.google.com/drive/folders/11kxYYAD8n3Cxyt0CfGPoh1dDqR3BnVNu?usp=sharing)

2. **Import Aplliance File**<br>
   Klik file pada menu pojok kiri atas kemudian pilih new tamplate.

   ![vm](img/gns3/new_template.png)

   Selanjutnya pilih Install an appliance from the GNS3 server (recommendation).
   
   ![vm](img/gns3/recomendation.png)
   
   Kemudian jendela selanjutnya akan menampilkan daftar perangkat yang dapat ditambahkan (Firewalls, Guests, Routers dan Switches).
   Pilih perangkat yang akan di install (pada kasus ini Router Cisco 1700) kemudian klik install.
   
   ![vm](img/gns3/router_list.png)
    
   Selanjutnya jika file appliance sudah di unduh sebelumnya maka statusnya akan Ready to install. 
   
   ![vm](img/gns3/ready.png)
   
   Kemudian klik next sampai terdapat pemberitahuan bahwa appliance telah berhasil di install.
   
   ![vm](img/gns3/success.png)
   
3. **Verifikasi Instalasi**<br>
   Jika appliance berhasil di install maka pada menu appliance kategori router akan terdapat appliance yang baru saja ditambahkan.
   
   ![vm](img/gns3/verif.png)
   

#### Menambahkan Appliance dengan VirtualBox

1. **Unduh appliance/perangkat**<br>
   Unduh file appliance/perangkat jaringan yang ingin di install (dalam kasus ini router mikrotik CHR). Kunjungi laman [https://mikrotik.com/download](https://mikrotik.com/download) kemudian unduh file OVA template.

   ![vm](img/gns3/unduh%20app.png)

2. **Import Aplliance File**<br>
   Pada VirtualBox klik file kemudian pilih import appliance.
   
   ![vm](img/gns3/import_vb.png)

   Selanjutnya pada kolom source file pilih file mikrotik yang baru saja di downlod dengan ekstensi .OVA. Kemudian pada pilihan setting dapat mengganti nama appliance dengan Mikrotik CHR.
   
   ![vm](img/gns3/setting_vb.png)
   
   Klik finish kemudian jika import berhasil maka appliance Mikrotik CHR akan ditambahkan.

3. **Mengubungkan VirtualBox Appliance dengan GNS3**<br>
   Pada GNS3 pilih menu edit kemudian preferences. Selanjutnya pada menu VirtualBox VMs klik new kemudian pada pilihan VM List pilih nama machine router yang di install pada virtualBox kemudian klik finish.

   ![vm](img/gns3/new_vb.png)
    
   Setelah berhasil menambahkan maka router akan ada pada list VirtualBox VMs Template.
   
   ![vm](img/gns3/succ_vb.png)
   
   Klik edit pada template tersebut kemudian pilih kategorinya sebagai router.

#### Menambahkan Appliance dengan VMWare

1. **Unduh appliance/perangkat**<br>
   Unduh file appliance/perangkat jaringan yang ingin di install (dalam kasus ini router mikrotik CHR). Kunjungi laman [https://mikrotik.com/download](https://mikrotik.com/download) kemudian unduh file OVA template.

   ![vm](img/gns3/unduh%20app.png)

2. **Import Aplliance File**<br>
   Pada VMWare klik menu file kemudian open dan pilih file .OVA.
   
   ![vm](img/gns3/import_vmw.png)

   Pada jendela selanjutnya sesuaikan nama appliance kemudian klik import.
   
   ![vm](img/gns3/new_vmw.png)
   
   Klik finish kemudian jika import berhasil maka appliance Mikrotik CHR akan ditambahkan.

3. **Mengubungkan VirtualBox Appliance dengan GNS3**<br>
   Pada GNS3 pilih menu edit kemudian preferences. Selanjutnya pada menu VMWare VMs klik new kemudian pada pilihan VM List pilih nama appliance yang di sudah diimport lalu klik finish.

   ![vm](img/gns3/succ_vmw.png)
    
   Setelah berhasil menambahkan maka router akan ada pada list VMWare VMs Template.
   
   ![vm](img/gns3/succ2_vmw.png)
   
   Klik edit pada template tersebut kemudian pilih kategorinya sebagai router.
