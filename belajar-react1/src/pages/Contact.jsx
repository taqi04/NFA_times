import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="py-5" style={{ maxWidth: "700px" }}>
      <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
      <Form className="shadow p-4 rounded-4 bg-light">
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
          <Form.Control as="textarea" rows={4} />
        </Form.Group>

        <Button variant="dark" className="w-100">Send Message</Button>
      </Form>
    </Container>
  );
}
export default Contact;