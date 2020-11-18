import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./academic.styles.css";

const Academic = () => {
  return (
    <div id="academic">
      <h1 className="pt-3 text-center pb-3">ACADEMIC HISTORY</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src="https://strive.school/assets/strive_black.png" alt="Strive logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">MERN Development</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Duration:</strong> Apr 2020- Nov 2020
                    <br />
                    <strong> Description </strong> An online remote program, taught by highly
                            professional teachers, covering both theory and
                            professional training of the following modules.
                            HTML, CSS, Bootstrap, JS+ES6, MongoDB,
                            PostgreSQL, Express, React.js, Redux, ReduxThunk, TypeScript, Node.js, Cloud Technologies
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 5 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src="https://www.hnee.de/Read/Templates/HNEE2018_Template/Bilder/HNEE_Logo_Engl_gruen.svg" alt="HNEE logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Master in Forest Information Technology</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Duration:</strong> Nov 2018 - present
                    <br />
                    <strong> Description </strong> Application of the Information Technologies in GIS
                          and Forestry, by following coursework. Data
                          analysis and Management, Programming,
                          Geomatics, Database Management, Digital
                          Cartography, Statistics, Remote Sensing, Project
                          Planning and Management, Map editing, Spatial
                          Analysis, Collection and Analysis of LiDAR Data.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Academic;
