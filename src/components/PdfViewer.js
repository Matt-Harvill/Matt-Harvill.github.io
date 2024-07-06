import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const PdfViewer = () => {
  const pdfFiles = [
    { name: 'CS 224S Final Project Report', path: '/github-pages/pdf_files/CS224S_Project_Final_Report.pdf' },
    { name: 'CS 231N Final Project Report', path: '/github-pages/pdf_files/CS_231N_Project_Report.pdf' },
  ]

  return (
    <Container>
      <h1>PDF Files</h1>
    <Accordion>
    {pdfFiles.map((pdf, index) => (
        <Accordion.Item eventKey={String(index)}>
            <Accordion.Header>{pdf.name}</Accordion.Header>
            <Accordion.Body>
                <iframe src={pdf.path} width="100%" height="500px" title={pdf.name}></iframe>
            </Accordion.Body>
        </Accordion.Item>
    ))}        
      </Accordion>
    </Container>
  );
};

export default PdfViewer;
