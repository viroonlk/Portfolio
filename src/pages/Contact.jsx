// src/pages/Contact.jsx
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'; // ใช้ react-icons

function Contact() {
  return (
    <Container className="mt-5">
      <h2>ติดต่อผม</h2>
      <ListGroup className="mt-3">
        <ListGroup.Item><FaEnvelope /> Email: viroon018@gmail.com</ListGroup.Item>
        <ListGroup.Item><FaPhone /> Phone: 095-690-1694</ListGroup.Item>
        <ListGroup.Item><FaGithub /> GitHub: github.com/viroonlk</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Contact;