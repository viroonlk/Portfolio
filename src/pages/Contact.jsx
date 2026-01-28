// src/pages/Contact.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-white display-5">Get in Touch</h1>
        <p className="text-secondary fs-5">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
      </div>

      <Row className="justify-content-center g-4">
        {/* 1. GitHub Card (ไฮไลท์สำคัญ) */}
        <Col md={6} lg={4}>
          <Card className="h-100 bg-dark text-white border-secondary text-center p-4 shadow-sm hover-card">
            <Card.Body>
              <div className="mb-3 text-white">
                <FaGithub size={50} />
              </div>
              <Card.Title className="fs-3 fw-bold mb-3">GitHub</Card.Title>
              <p className="text-secondary mb-4">
                Check out my repositories and latest projects.
              </p>
              <Button 
                variant="light" // ใช้ปุ่มสีขาวให้เด่นบนพื้นดำ
                size="lg" 
                className="rounded-pill px-4 w-100 fw-bold"
                href="https://github.com/viroonlk" // ใส่ลิงก์ GitHub ของคุณตรงนี้
                target="_blank" // เปิดหน้าต่างใหม่
                rel="noopener noreferrer"
              >
                Visit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* 2. Email Card */}
        <Col md={6} lg={4}>
          <Card className="h-100 bg-dark text-white border-secondary text-center p-4 shadow-sm hover-card">
            <Card.Body>
              <div className="mb-3 text-primary">
                <FaEnvelope size={50} />
              </div>
              <Card.Title className="fs-3 fw-bold mb-3">Email</Card.Title>
              <p className="text-secondary mb-4">
                viroon018@gmail.com
              </p>
              <Button 
                variant="outline-primary" 
                size="lg" 
                className="rounded-pill px-4 w-100"
                href="mailto:viroon018@gmail.com" // กดแล้วเปิดแอปเมลทันที
              >
                Send Email
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* 3. Phone Card */}
        <Col md={6} lg={4}>
          <Card className="h-100 bg-dark text-white border-secondary text-center p-4 shadow-sm hover-card">
            <Card.Body>
              <div className="mb-3 text-success">
                <FaPhoneAlt size={50} />
              </div>
              <Card.Title className="fs-3 fw-bold mb-3">Phone</Card.Title>
              <p className="text-secondary mb-4">
                095-690-1694
              </p>
              <Button 
                variant="outline-success" 
                size="lg" 
                className="rounded-pill px-4 w-100"
                href="tel:0956901694" // กดแล้วโทรออกได้เลย (ในมือถือ)
              >
                Call Me
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;