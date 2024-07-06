import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './PdfViewer.css'; // Import custom CSS file for styling

const PdfViewer = () => {
  // const pdfFiles = [
  //   { name: 'CS 224S Final Project Report', path: '/pdf_files/CS224S_Project_Final_Report.pdf' },
  //   { name: 'CS 231N Final Project Report', path: '/pdf_files/CS_231N_Project_Report.pdf' },
  // ];

  const pdfFiles = [
    { name: 'CS 224S - Test-Time Training for Speaker Adaptation in ASR Systems', path: '/pdf_files/CS224S_Project_Final_Report.pdf' },
    { name: 'CS 224R - Smart EfficientZero Search for Atari', path: '/pdf_files/CS_224R_Project_Report.pdf' },
    { name: 'CS 231N - Learning Representations for Atari with Improved EfficientZero', path: '/pdf_files/CS_231N_Project_Report.pdf' },
    { name: 'CS 224N - Techniques for Extracting Meaningful BERT Sentence Embeddings for Downstream Tasks', path: '/pdf_files/CS_224N_Final_Project_Report.pdf' },
    { name: 'CS 238 - Designing a Reliable Crew Member', path: '/pdf_files/CS_238__Final_Report.pdf' },
    { name: 'CS 229S - Distributed Deep Learning Methods', path: '/pdf_files/CS_229S_Final_Project.pdf' },
];

  return (
    <Container>
      {/* <Card style={{padding: "1rem"}}> */}
      <h1 style={{padding: "1rem"}}>Projects</h1>
      {/* </Card> */}

      <Card style={{padding: "1rem", marginBottom: "1rem"}}>
      <h3>Computer Science Academic Papers</h3>
      <Accordion>
        {pdfFiles.map((pdf, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>{pdf.name}</Accordion.Header>
            <Accordion.Body>
              <iframe src={pdf.path} width="100%" height="500px" title={pdf.name}></iframe>
            </Accordion.Body>
          </Accordion.Item>
        ))}
        <Accordion.Item eventKey={String(pdfFiles.length)}>
          <Accordion.Header>CS 224W - Fraud Detection with Graph Convolutional Networks</Accordion.Header>
          <Accordion.Body>
            <a className="d-block w-100" href="https://medium.com/@revaagashe/bc6662d7e38">Medium Blog Post</a>

            <a className="d-block w-100" href="https://colab.research.google.com/drive/1P8Z99VL7ttCbqU02zfk1UPHcbe0D3x5R?usp=sharing">Codebase</a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Card>

      <Card style={{padding: "1rem", marginBottom: "1rem"}}>
      <h3>Political Philosophy Academic Papers</h3>
      <Accordion>
        <Accordion.Item eventKey={"0"}>
          <Accordion.Header>Liberalism and its Critics - Does Liberalism Lead to Anarchy?</Accordion.Header>
          <Accordion.Body>
            <iframe src='/pdf_files/POLISCI 130 Final Paper - Does Liberalism Lead to Anarchy.pdf' width="100%" height="500px" title='test_title1'></iframe>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey={"1"}>
          <Accordion.Header>Liberalism and its Critics - Diversity vs Autonomy</Accordion.Header>
          <Accordion.Body>
            <iframe src='/pdf_files/POLISCI 130 Midterm Paper - Diversity vs Autonomy.pdf' width="100%" height="500px" title='test_title2'></iframe>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Card>

      <Card style={{padding: "1rem", marginBottom: "1rem"}}>
      <h3>Bonus - Personal Project</h3>
      <Card.Text>
        Click <a target="_blank" rel="noopener noreferrer" href="https://coup-for-all-8b5265fb626c.herokuapp.com/">here</a> to play a game of Coup with your friends!
      </Card.Text>
      </Card>

    </Container>
  );
};

export default PdfViewer;
