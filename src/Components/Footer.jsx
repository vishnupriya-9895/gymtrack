import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  const FooterStyle = {
    color: "#b5b5b5",
    cursor: "pointer",
    marginBottom: "6px",
  };
  return (
    <div className="text-white bg-black pt-5 pb-3 ">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h4 className="mb-3">GymTrack</h4>
            <p style={{ color: "#b5b5b5" }}>
              Your one-stop platform for workouts, nutrition, and fitness
              products. Train smart. Live strong.
            </p>
          </Col>

          <Col md={2}>
            <h6 style={{ marginBottom: "12px" }}>Quick Links</h6>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              {" "}
              <p style={FooterStyle}>Home</p>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/gymworkout"
            >
              {" "}
              <p style={FooterStyle}>Workouts</p>
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/shop">
              <p style={FooterStyle}>Shop</p>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/nutrition"
            >
              <p style={FooterStyle}>Nutrition</p>
            </Link>
          </Col>

          <Col md={2}>
            <h6 className="mb-2">Support</h6>
            <p style={FooterStyle}>Contact</p>
            <p style={FooterStyle}>FAQs</p>
            <p style={FooterStyle}>Privacy Policy</p>
            <p style={FooterStyle}>Terms & Conditions</p>
          </Col>

          <Col md={4}>
            <h6 className="mb-2">Contact</h6>
            <p style={{ color: "#b5b5b5" }}>gymtrack@gmail.com</p>
            <p style={{ color: "#b5b5b5" }}>+91 9870987654</p>
          </Col>
        </Row>
        <br /> <br />
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#888",
          }}
        >
          2025 Gymtrack. All rights reserved.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
