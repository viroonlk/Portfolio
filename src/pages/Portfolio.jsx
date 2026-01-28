// src/pages/Portfolio.jsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../components/ProjectCard';

// --- 1. นำเข้ารูปภาพจาก folder assets ---
// ตั้งชื่อตัวแปรให้สื่อความหมาย (เช่น project1Img)
import project1Img from "../assets/Weather.png"; // เปลี่ยนชื่อไฟล์ตามจริง
import project2Img from "../assets/Weather.png"; // เปลี่ยนชื่อไฟล์ตามจริง
// import project3Img from '../assets/todo-list.jpg';

function Portfolio() {
  // จำลองข้อมูลโปรเจกต์ (Array of Objects)
  const myProjects = [
    { 
      id: 1, 
      title: "E-Commerce App", 
      desc: "แอปซื้อขายของออนไลน์ด้วย React", 
      link: "#",
      // --- 2. ใช้ตัวแปรรูปภาพที่นำเข้ามา ---
      imgSrc: project1Img 
    },
    { 
      id: 2, 
      title: "Weather Dashboard", 
      desc: "เว็บดูพยากรณ์อากาศผ่าน API", 
      link: "https://weather-react-murex.vercel.app/",
      // --- 2. ใช้ตัวแปรรูปภาพที่นำเข้ามา ---
      imgSrc: project2Img
    },
    // { id: 3, title: "To-Do List", desc: "...", link: "#", imgSrc: project3Img }
  ];

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center text-white">ผลงานของผม</h2>
      <Row>
        {myProjects.map((project) => (
          <Col key={project.id} md={4} className="mb-4">
            {/* ส่งข้อมูลผ่าน Props ไปยัง Component */}
            <ProjectCard 
              title={project.title} 
              description={project.desc} 
              link={project.link}
              // --- 3. อย่าลืมส่ง prop imgSrc ไปด้วย ---
              imgSrc={project.imgSrc}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;