import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'; // ไอคอน Hamburger

// Components
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import './App.css'; // อย่าลืม import CSS

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  // ฟังก์ชันเปิด-ปิด Drawer
  const handleShow = () => setShowSidebar(true);
  const handleClose = () => setShowSidebar(false);

  return (
    <Router>
      <div className="d-flex">
        {/* ส่วน Sidebar & Drawer */}
        <Sidebar show={showSidebar} handleClose={handleClose} />

        {/* ส่วนเนื้อหาหลัก (Main Content) */}
        <div className="flex-grow-1 main-content d-flex flex-column min-vh-100">
          
          {/* Header เล็กๆ สำหรับมือถือ ไว้กดเปิด Drawer */}
          <div className="d-lg-none p-3 bg-dark text-white d-flex align-items-center shadow-sm">
            <Button variant="link" onClick={handleShow} className="text-white p-0 me-3">
              <FaBars size={24} />
            </Button>
            <span className="fw-bold">Run Portfolio</span>
          </div>

          {/* พื้นที่แสดงผลหน้าต่างๆ */}
          <Container fluid className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;