import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css'; // Import custom CSS file for styling

const Home = () => (
  <Container>
    <Row className="mt-4 align-items-center">
      {/* Column for the circular image */}
      <Col xs={12} sm={4} className="text-center mb-4 mb-sm-0">
        <div className="circle-container">
          <img
            src={`${process.env.PUBLIC_URL}/headshot_circle.png`}  // Replace with your image path
            alt="Profile"
            className="circle-image"
          />
        </div>
      </Col>
      {/* Column for the title and paragraph */}
      <Col xs={12} sm={8}>
        <h1 style={{padding: "1rem"}}>Matthew Harvill</h1>
        <Card style={{padding: "1rem"}}>
          <Card.Body>
            <Card.Text>
              Welcome to my personal website! <br /><br />
              
              I graduated from Stanford with a Master's in Computer Science in Spring 2024.
              This website contains some of my projects at Stanford and links to my professional accounts and resume. <br /><br />
              
              Hope you enjoy :)
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Home;
