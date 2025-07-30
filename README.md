# Aplikasi To-Do List 

Proyek ini adalah implementasi praktis dari sebuah web application sederhana dengan arsitektur tiga tingkat (Frontend, Backend, Database) yang dijalankan di atas platform Docker.

## Arsitektur
* **Frontend**: React.js + Nginx
* **Backend**: Node.js (Express.js)
* **Database**: PostgreSQL

## Prasyarat
* Docker Desktop terinstal dan sedang berjalan.

## Cara Menjalankan
1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/rdityaza/todo-app.git](https://github.com/rdityaza/todo-app.git)
    ```
2.  **Masuk ke direktori proyek:**
    ```bash
    cd todo-app
    ```
3.  **Bangun dan jalankan semua layanan dengan Docker Compose:**
    ```bash
    docker-compose up --build
    ```
4.  **Buka Aplikasi:**
    Setelah proses build selesai, buka browser dan kunjungi `http://localhost:3000`.

Aplikasi To-Do List akan berjalan. Semua komponen (frontend, backend, db) berjalan di dalam kontainernya masing-masing sesuai definisi di `docker-compose.yml`.
