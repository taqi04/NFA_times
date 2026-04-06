import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Home() {
  const navigate = useNavigate();

  const features = [
    { title: "Fast", desc: "Optimized for speed and performance." },
    { title: "Responsive", desc: "Looks great on desktop, tablet, and mobile." },
    { title: "Modern", desc: "Clean, professional, and user-friendly design." },
  ];

  const testimonials = [
    { name: "Alice", role: "Product Manager", msg: "Amazing UI and very responsive!" },
    { name: "Bob", role: "Developer", msg: "Clean code structure, easy to maintain." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section d-flex align-items-center justify-content-center text-light">
        <Container className="text-center">
          <h1 className="display-3 fw-bold mb-3">Welcome to My React Website</h1>
          <p className="lead mb-4">Modern website built with React + Bootstrap — Professional & Responsive.</p>
          <Button variant="primary" size="lg" onClick={() => navigate("/team")}>Meet the Team</Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold">Our Features</h2>
        <Row className="g-4">
          {features.map((f, i) => (
            <Col md={4} key={i}>
              <Card className="h-100 shadow-sm border-0 rounded-4 feature-card">
                <Card.Body className="text-center">
                  <Card.Title>{f.title}</Card.Title>
                  <Card.Text>{f.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* About Section */}
      <div className="about-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src="https://picsum.photos/500/300" alt="About" className="img-fluid rounded-4 shadow"/>
            </Col>
            <Col md={6}>
              <h2 className="fw-bold mb-3">About Our Project</h2>
              <p>This project is built with React and Bootstrap to provide a professional web experience. We focus on clean design, responsive layouts, and easy navigation.</p>
              <Button variant="dark" onClick={() => navigate("/contact")}>Contact Us</Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonials Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold">What People Say</h2>
        <Row className="g-4">
          {testimonials.map((t, i) => (
            <Col md={6} key={i}>
              <Card className="shadow-sm rounded-4 testimonial-card p-3">
                <Card.Body>
                  <Card.Text>"{t.msg}"</Card.Text>
                  <Card.Subtitle className="mt-3 fw-bold">{t.name} - {t.role}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Section */}
      <div className="cta-section text-light text-center py-5">
        <Container>
          <h2 className="fw-bold mb-3">Ready to Work With Us?</h2>
          <Button variant="primary" size="lg" onClick={() => navigate("/contact")}>Get in Touch</Button>
        </Container>
      </div>
    </div>
  );
}

export default Home