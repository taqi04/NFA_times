import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-light text-center py-5">
        <Container>
          <h1 className="display-4 fw-bold">Welcome to My React Website</h1>
          <p className="lead">
            Website modern menggunakan React + Bootstrap sesuai instruksi tugas.
          </p>
          <Button variant="primary" size="lg">Get Started</Button>
        </Container>
      </div>

      {/* Features */}
      <Container className="py-5">
        <Row className="g-4">
          {["Fast", "Responsive", "Modern"].map((item, i) => (
            <Col md={4} key={i}>
              <Card className="h-100 shadow-sm border-0 rounded-4">
                <Card.Body className="text-center">
                  <Card.Title>{item}</Card.Title>
                  <Card.Text>
                    Website dibuat menggunakan React dan Bootstrap agar tampilan lebih profesional.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home