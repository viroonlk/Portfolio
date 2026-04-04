# ใช้ Node.js เวอร์ชัน 18 เป็นฐาน
FROM node:18-alpine

# ตั้งค่าโฟลเดอร์ทำงานใน Docker
WORKDIR /app

# ก๊อปปี้ไฟล์ package.json ไปก่อนเพื่อติดตั้ง Library
COPY package*.json ./

# สั่งติดตั้ง Library
RUN npm install

# ก๊อปปี้ไฟล์ทั้งหมดในโปรเจกต์เราเข้าไป
COPY . .

# เปิดพอร์ต 5173 (พอร์ตมาตรฐานของ Vite)
EXPOSE 5173

# คำสั่งรันเซิร์ฟเวอร์ (สำคัญ: ต้องมี --host เพื่อให้ Docker ยอมให้เครื่องนอกเข้าถึงได้)
CMD ["npm", "run", "dev", "--", "--host"]