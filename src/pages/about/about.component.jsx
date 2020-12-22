import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import AboutImage from "../../../public/assests/ProfilePhotos/about.jpg"

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={AboutImage} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                <small>The determined, efficient and effective teamwork for the completion of an international Mega Housing Project was the start of my career.
                The application's of Information Technology in every field, grabbed my attention and therefore,
                I started a master's in the Forest Information Technology program. During the study, the programming subjects sparked me to dive deeper into programming through a
                Full-Stack Developer. At the same moment, I found Strive School as the best option to turn my dreams into reality.
                The practical training of the school in the field of Node.js, Express, MongoDB on the backend and React, Redux,
                Typescript with HTML, CSS, Bootstrap, JavaScript on the frontend, with pair programming and code review under agile environment,
                make it possible for me to work as a Full-Stack Developer.
                Throughout my education and career, I am succeeded in boosting interpersonal skills by adaptiveness to multi-cultural environments with different
                fields of career and studies, collaboration through teamwork, and problem-solving with analytical thoughts.
                Now, its time to further enhance my skills as Full-Stack Developer to turn the little sparkle I felt before, into a fire.</small>
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1PPmvIFNpxKBbWOhUz7z2lm10PlIZPx7y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/HammadAli-WD" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/hammad-ali-04517b115/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
