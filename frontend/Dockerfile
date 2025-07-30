# STAGE 1: Build aplication
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Build aplikasi React menjadi file statis
RUN npm run build

# STAGE 2: Serve aplication with Nginx
FROM nginx:stable-alpine
# Salin hasil build dari stage 1 ke direktori web server Nginx
COPY --from=builder /app/build /usr/share/nginx/html
# Buka port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]