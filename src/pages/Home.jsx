// src/pages/Home.jsx
import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFileDownload, FaArrowRight } from 'react-icons/fa';
import Skills from '../components/Skills';

// Import Resume
import myResume from '../assets/Resume.pdf'; 

function Home() {
  return (
    <>
      {/* --- Hero Section --- */}
      <div className="hero-section py-5 mb-5 text-white">
        <Container>
          <Row className="align-items-center">
            
            {/* ฝั่งซ้าย: ข้อความ */}
            <Col lg={7} className="mb-4 mb-lg-0 text-start">
              <span className="text-primary fw-bold text-uppercase mb-2 d-block spacing-2">
                👋 Welcome to my world
              </span>
              <h1 className="display-3 fw-bold mb-3">
                Hi, I'm <span className="text-primary">Viroon Langkaew</span>
              </h1>
              <h3 className="h2 text-light mb-4 fw-light">
                Web Developer <span className="text-secondary">&</span> Data Science Enthusiast
              </h3>
              <p className="lead text-secondary mb-5" style={{ maxWidth: '600px' }}>
                I am a third-year student at Burapha University, passionate about building 
                accessible, pixel-perfect user interfaces and analyzing data to drive decisions.
              </p>
              
              <div className="d-flex gap-3">
                <Link to="/portfolio">
                  <Button variant="primary" size="lg" className="px-4 py-2 shadow-sm rounded-pill">
                    View My Work <FaArrowRight className="ms-2" />
                  </Button>
                </Link>
                
                <a href={myResume} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-light" size="lg" className="px-4 py-2 rounded-pill">
                        <FaFileDownload className="me-2" /> Resume
                    </Button>
                </a>
              </div>
            </Col>

            {/* ฝั่งขวา: รูปภาพ (ถ้าไม่มีรูปตัวเอง ใช้รูปการ์ตูนหรือ vector แทนได้) */}
            <Col lg={5} className="text-center">
               <div className="profile-image-container position-relative">
                  {/* วงกลมตกแต่งด้านหลัง */}
                  <div className="blob-bg"></div>
                  {/* รูปโปรไฟล์ */}
                  <Image 
                    src="https://placehold.co/400x400/1e293b/white?text=Arm+Viroon" 
                    // ถ้ามีรูปจริง ให้เปลี่ยน src เป็นตัวแปรที่ import มา เช่น src={profilePic}
                    fluid 
                    roundedCircle 
                    className="position-relative shadow-lg border border-2 border-primary p-1"
                    style={{ width: '350px', height: '350px', objectFit: 'cover' }}
                  />
               </div>
            </Col>

          </Row>
        </Container>
      </div>

      {/* --- Skills Section (อันเดิมที่สวยอยู่แล้ว) --- */}
      <div className="py-5 mx-3">
         <Skills />
      </div>
    </>
  );
}

export default Home;