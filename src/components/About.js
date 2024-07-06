import React from 'react';
import { Container, Card } from 'react-bootstrap';

const About = () => (
  <Container>
    <h1>About</h1>
    <Card>
      <Card.Body>
        <Card.Text>I'm interested in a lot of subjects in both the arts and the sciences. Currently I've been most interested in the following:</Card.Text>
        <ul>
          <li>Machine Learning</li>
          <li>Software Engineering</li>
          <li>Philosophy</li>
          <li>Political Science</li>
          <li>History</li>
        </ul>
      </Card.Body>
    </Card>
  </Container>
);

export default About;
