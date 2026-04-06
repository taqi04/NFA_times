import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Team() {
  const members = [
    { name: "Taqi Rabbani", role: "Frontend Developer" },
    { name: "Ahmad", role: "UI Designer" },
    { name: "Sarah", role: "Backend Developer" },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold">Our Team</h2>
      <Row className="g-4">
        {members.map((member, index) => (
          <Col md={4} key={index}>
            <Card className="text-center shadow border-0 rounded-4">
              <Card.Img
                variant="top"
                src={`https://picsum.photos/300/200?random=${index}`}
                className="rounded-top-4"
              />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.role}</Card.Text>
                <Button variant="outline-dark">View Profile</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Team;