import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./style.css";

function Team() {
  const members = [
    { name: "Taqi Rabbani", role: "Frontend Developer", img: "https://picsum.photos/300/200?random=1" },
    { name: "Ahmad", role: "UI Designer", img: "https://picsum.photos/300/200?random=2" },
    { name: "Sarah", role: "Backend Developer", img: "https://picsum.photos/300/200?random=3" },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>
      <Row className="g-4">
        {members.map((member, index) => (
          <Col md={4} key={index}>
            <Card className="text-center shadow-sm rounded-4 team-card">
              <Card.Img variant="top" src={member.img} className="rounded-top-4 team-img"/>
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.role}</Card.Text>
                <Button variant="outline-primary">View Profile</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Team