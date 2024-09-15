import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand href="#home" className="navbar-brand">
        <img className="logo" src="./logo.png" alt="Logo" />
        <h1>Cosmic Horizons</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#workshops">Workshops</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <button className="login-button">Login</button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
