import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => (
  <Container>
    <Row className="mt-4">
      <Col>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple layout-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Home;
