import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./my-navbar.styles.css";
import { Image } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <Image className="logo" style={{ height: '50px', width: '50px' }} src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.0-9/125977190_3461787383889021_8751797350800891773_n.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_ohc=WnfYJrt8-JYAX_Z6q6y&_nc_ht=scontent-ber1-1.xx&oh=a7d24e5bf38a9ea1464d7a8f7377f955&oe=5FDB146E" roundedCircle />

          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#academic">Academic</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
