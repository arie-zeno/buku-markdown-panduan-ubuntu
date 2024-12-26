# Instalasi Golang dan Menambahkan Kernel Golang
Untuk menambahkan Golang kedalam jupyter lab pastikan sudah menginstall **Golang** terlebih dahulu, jika belum install **Golang** dengan cara unduh file installer **go** pada link [download golang](https://go.dev/doc/install). Kemudian ekstrak file tersebut dengan perintah `tar -C /usr/local -xzf go1.23.0.linux-amd64.tar.gz`, tambahkan PATH **go** dengan memodifikasi file **.bashrc** jika menggunakan terminal **bash** dan **.zshrc** jika menggunakan terminal **zsh** dengan menambahkan kode `export PATH=$PATH:/usr/local/go/bin` pada baris terakhir. Kemudian install **Gophernotes**, **Gophernotes** merupakan kernel **golang** untuk **jupyterLab**. **Install** dengan menggunakan perintah `go get github.com/gopherdata/gophernotes`. Kemudian konfigurasi dengan perintah :

`mkdir -p ~/.local/share/jupyter/kernels/gophernotes`

`cp $(go env GOPATH)/pkg/mod/github.com/gopherdata/gophernotes@v0.7.5/kernel/* ~/.local/share/jupyter/kernels/gophernotes`

`cd ~/.local/share/jupyter/kernels/gophernotes`

`chmod +w ./kernel.json # in case copied kernel.json has no write permission`

`$ sed "s|gophernotes|$(go env GOPATH)/bin/gophernotes|" < kernel.json.in > kernel.json`


<center> 

![Go](img/golang/go_ss.png)

</center>
