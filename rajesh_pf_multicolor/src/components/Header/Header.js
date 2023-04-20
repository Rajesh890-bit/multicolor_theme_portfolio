import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";
import "../../pages/style.css";
import { HashLink } from "react-router-hash-link";
import logor from "../../Assets/logor.png";

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <HashLink smooth to="/#home">
          <Navbar.Brand className="logotext" to="/">
            <Image className="logo" src={logor}></Image>
          </Navbar.Brand>
        </HashLink>

        <Navbar.Toggle
          className="navbar-toggler"
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="responsive-navbar"
        >
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link onClick={() => updateExpanded(false)}>
                {" "}
                <HashLink to="#home">Home</HashLink>{" "}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => updateExpanded(false)}>
                <HashLink to="#about">About</HashLink>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => updateExpanded(false)}>
                <HashLink to="#skill">Skills</HashLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => updateExpanded(false)}>
                <HashLink to={"#project"}>Projects</HashLink>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => updateExpanded(false)}>
                <HashLink to={"#contact"}>Contact</HashLink>
              </Nav.Link>
            </Nav.Item>

            <Button
              onClick={() => {
                window.open("");
              }}
              className="resumebtn"
            >
              <span>Resume</span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default Header;
