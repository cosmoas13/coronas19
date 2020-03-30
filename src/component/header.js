import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Navbar, Button, Form } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <Navbar
        bg="transparent"
        variant="transparent"
        className="justify-content-between"
      >
        <Navbar.Brand className="flex" href="#home">
          <img
            alt=""
            src="/images/covid-19.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          &nbsp; Coronas
        </Navbar.Brand>
        <Button variant="outline-light">
          <a
            href="https://github.com/cosmoas13"
            target="_blank"
            style={{ color: "#fff" }}
          >
            About Me
          </a>
        </Button>
      </Navbar>
    );
  }
}

export default Header;
