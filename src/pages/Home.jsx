// src/pages/Home.jsx
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Home() {
  return (
<Container 
  className="text-center mt-5 p-5 rounded text-white border border-secondary" 
  style={{ 
    backgroundColor: 'rgba(30, 41, 59, 0.7)', // สีเดิมแต่ปรับให้โปร่งแสง 70%
    backdropFilter: 'blur(10px)' // เอฟเฟกต์เบลอพื้นหลัง (สวยมาก!)
  }} 
>
        
      <h1>วิรุฬห์ หลังแก้ว</h1>
      <p className="lead">Web Developer / React Enthusiast</p>
      <p>ยินดีต้อนรับสู่ Portfolio ของผม ผมมีความหลงใหลในการสร้างสรรค์เว็บไซต์ที่สวยงามและใช้งานง่าย</p>
      <Link to="/portfolio" className="btn btn-primary btn-lg">ดูผลงานของผม</Link>
    </Container>
  );
}

export default Home;