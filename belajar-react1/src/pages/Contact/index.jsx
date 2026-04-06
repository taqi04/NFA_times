import { Container, Form, Button } from "react-bootstrap";
import "./style.css";

function Contact() {
  return (
    <Container className="py-5" style={{ maxWidth: "700px" }}>
      <h2 className="text-center fw-bold mb-4">Contact Us</h2>
      <Form className="shadow p-4 rounded-4 contact-form bg-light">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Your email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Button variant="primary" className="w-100" type="submit">Send Message</Button>
      </Form>

      {/* Contact Info */}
      <div className="contact-info text-center mt-5">
        <p>Email: contact@myreactsite.com</p>
        <p>Phone: +62 812 3456 7890</p>
        <p>Address: Jakarta, Indonesia</p>
      </div>
    </Container>
  );
}

export default Contact