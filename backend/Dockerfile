# Gunakan base image resmi Node.js versi 18-alpine (ringan)
FROM node:18-alpine

# Tentukan direktori kerja di dalam kontainer
WORKDIR /app

# Salin package.json dan package-lock.json untuk install dependencies
COPY package*.json ./

# Install semua dependencies
RUN npm install

# Salin sisa kode aplikasi ke dalam kontainer
COPY . .

# Buka port 3001 yang akan digunakan oleh aplikasi Express
EXPOSE 3001

# Perintah untuk menjalankan aplikasi saat kontainer dimulai
CMD ["node", "server.js"]