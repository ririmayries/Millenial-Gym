# Millenial Gym

### Introduction
Ini adalah percobaan pertama kali saya membuat API dengan menggunakan AdonisJs. AdonisJs adalah framework MVC untuk Node.js dan dianggap sebagai Laravel untuk Node.js.

Konsep API ini yaitu memungkinkan pemesanan kelas gym secara online diberbagai studio tanpa harus menjadi member dari studio tersebut tapi cukup menjadi member dari Millenial Gym. Sehingga dengan 1 membership user bisa mencoba berbagai kelas gym dari berbagai studio gym yang tersedia.  

Konsep ini bukanlah hal yang baru. Salah satu contohnya adalah classpass.com dan API ini adalah versi sederhana dari konsep tersebut. Sebelumnya saya pernah membuat API dengan konsep seperti ini dengan menggunakan Laravel. Kali ini saya mencoba membuat ulang dengan menggunakan AdonisJS.  

### Setup

Sebelum menginstall API ini pastikan system sudah menginstall AdonisJs >= v4.1  

Setelah di clone jangan lupa untuk menjalankan command berikut ini

```bash
npm install
```

Sesuaikan config yang ada di file .env

Kemudian jalankan command migration

```bash
adonis migration:run
```

Dan terakhir jalankan command berikut ini untuk memulai server

```bash
adonis serve --dev
```