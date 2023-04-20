import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import Text from "../Homepage/Text";
import { Image } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import devIcon from "../../Assets/Web-designer-1024x821.webp";

function Home() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">I'm Rajesh Pradhan</h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open("");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("");
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("");
              }}
              className="socailmediabtn"
            >
              <AiOutlineTwitter className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("");
              }}
              className="socailmediabtn"
            >
              <AiFillInstagram className="icon" />
            </button>
          </Col>

          <Col md={5}>
            <Image
              className="imagedeveloper"
              display={{ base: "none", display: "block" }}
              src={devIcon}
            ></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
