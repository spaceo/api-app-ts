FROM node:16.14.0-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

# ---
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
