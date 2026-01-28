// src/components/ProjectCard.jsx
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <Card style={{ width: '100%' }} className="h-100 shadow-sm bg-dark text-white border-secondary">
      {/* ตรงนี้คือส่วนแสดงรูปภาพ ถ้ามี props.imgSrc มาก็จะแสดงรูปนั้น */}
      {/* ถ้าไม่มี จะแสดง placeholder แทน */}
      <Card.Img variant="top" src={props.imgSrc || "https://placehold.co/600x400"} alt={props.title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="flex-grow-1">
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank" className="mt-auto">ดูผลงาน</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;