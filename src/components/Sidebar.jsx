import React from 'react';
import { Nav, Offcanvas, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBriefcase, FaEnvelope, FaUserCircle } from 'react-icons/fa'; // อย่าลืมลง react-icons นะครับ

function Sidebar({ show, handleClose }) {
  // สร้างฟังก์ชัน Content เพื่อใช้ซ้ำทั้งใน Mobile (Drawer) และ Desktop (Sidebar)
  const SidebarContent = () => (
    <div className="d-flex flex-column h-100 p-3 text-white bg-dark-theme">
      {/* ส่วนหัว Logo */}
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4 fw-bold">Viroon Portfolio</span>
      </a>
      <hr />
      
      {/* เมนูลิงก์ */}
      <Nav variant="pills" className="flex-column mb-auto">
        <Nav.Item>
          {/* ใช้ NavLink เพื่อให้มี Active State อัตโนมัติ */}
          <Nav.Link as={NavLink} to="/" className="text-white mb-2" onClick={handleClose}>
            <FaHome className="me-2" /> หน้าแรก
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/portfolio" className="text-white mb-2" onClick={handleClose}>
            <FaBriefcase className="me-2" /> ผลงาน
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/contact" className="text-white mb-2" onClick={handleClose}>
            <FaEnvelope className="me-2" /> ติดต่อเรา
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
      <hr />
      {/* ส่วน User ด้านล่าง */}
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none">
          <FaUserCircle size={32} className="me-2" />
          <strong>Viroon Lanagkaew</strong>
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. Sidebar สำหรับหน้าจอใหญ่ (Desktop) */}
      <div className="d-none d-lg-block sidebar-fixed">
        <SidebarContent />
      </div>

      {/* 2. Drawer (Offcanvas) สำหรับหน้าจอมือถือ */}
      <Offcanvas show={show} onHide={handleClose} responsive="lg" className="bg-dark text-white">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <SidebarContent />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;