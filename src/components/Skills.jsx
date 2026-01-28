// src/components/Skills.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// Import ไอคอนต่างๆ จาก react-icons
import { FaReact, FaJava, FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiMongodb, SiFigma, SiBootstrap, SiVite } from 'react-icons/si';

function Skills() {
  // รายชื่อสกิลและไอคอน (ปรับเพิ่มลดได้ตรงนี้)
  const skills = [
    { name: "React", icon: <FaReact size={50} color="#61DAFB" /> },
    { name: "Python", icon: <FaPython size={50} color="#3776AB" /> },
    { name: "Java", icon: <FaJava size={50} color="#007396" /> },
    { name: "C++", icon: <SiCplusplus size={50} color="#00599C" /> },
    { name: "SQL", icon: <SiMysql size={50} color="#4479A1" /> },
    { name: "MongoDB", icon: <SiMongodb size={50} color="#47A248" /> },
    { name: "HTML5", icon: <FaHtml5 size={50} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={50} color="#1572B6" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={50} color="#7952B3" /> },

  ];

  return (
    <Container className="py-5">
      <h2 className="text-center text-white mb-4 fw-bold">My Skills & Tools</h2>
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col key={index} xs={6} md={4} lg={3} className="mb-4">
            <Card className="h-100 text-center p-3 bg-dark border-secondary text-white shadow-sm skill-card">
              <div className="mb-3">
                {skill.icon}
              </div>
              <Card.Title>{skill.name}</Card.Title>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;