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
            src={`${process.env.PUBLIC_URL}/headshot.jpg`}  // Replace with your image path
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
              This website contains some of my academic work at Stanford and a little info about me. <br /><br />
              
              Hope you enjoy :) <br /><br />

              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matthew-harvill-797b7a16b/" style={{ marginRight: '20px' }}>LinkedIn</a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Matt-Harvill" style={{ marginRight: '20px' }}>GitHub</a>
              <a target="_blank" rel="noopener noreferrer" href="/pdf_files/Matthew_Harvill_Resume.pdf" style={{ marginRight: '20px' }}>Resume</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* <Row className="mt-4 align-items-center">
      <Col xs={0} sm={4} className="text-center mb-4 mb-sm-0">
        <div>
        </div>
      </Col>
      <Col xs={12} sm={8}>
        <Card style={{padding: "1rem"}}>
          <Card.Body>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matthew-harvill-797b7a16b/" style={{ marginRight: '20px' }}>LinkedIn</a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Matt-Harvill" style={{ marginRight: '20px' }}>GitHub</a>
            <a target="_blank" rel="noopener noreferrer" href="/pdf_files/Matthew_Harvill_Resume.pdf" style={{ marginRight: '20px' }}>Resume</a>
          </Card.Body>
        </Card>
      </Col>
    </Row> */}
  </Container>
);

export default Home;
