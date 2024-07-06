import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import PdfViewer from './components/PdfViewer';
// import About from './components/About';
import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matthew-harvill-797b7a16b/" className="nav-link">LinkedIn</a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Matt-Harvill" className="nav-link">GitHub</a>
                <a target="_blank" rel="noopener noreferrer" href="/pdf_files/Matthew_Harvill_Resume.pdf" className="nav-link">Resume</a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<PdfViewer />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
