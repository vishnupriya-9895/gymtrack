import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#0b0b0b",
        color: "#ffffff",
        padding: "40px 0 20px",
        marginTop: "60px",
      }}
    >
      <Container>
        <Row className="gy-4">
          {/* BRAND */}
          <Col md={4}>
            <h4 style={{ fontWeight: 600, marginBottom: "10px" }}>
              FitLife
            </h4>
            <p style={{ color: "#b5b5b5", lineHeight: "1.6" }}>
              Your one-stop platform for workouts, nutrition,
              and fitness products. Train smart. Live strong.
            </p>
          </Col>

          {/* QUICK LINKS */}
          <Col md={2}>
            <h6 style={{ marginBottom: "12px" }}>Quick Links</h6>
            <p style={linkStyle}>Home</p>
            <p style={linkStyle}>Workouts</p>
            <p style={linkStyle}>Shop</p>
            <p style={linkStyle}>Nutrition</p>
          </Col>

          {/* SUPPORT */}
          <Col md={2}>
            <h6 style={{ marginBottom: "12px" }}>Support</h6>
            <p style={linkStyle}>Contact</p>
            <p style={linkStyle}>FAQs</p>
            <p style={linkStyle}>Privacy Policy</p>
            <p style={linkStyle}>Terms & Conditions</p>
          </Col>

          {/* CONTACT */}
          <Col md={4}>
            <h6 style={{ marginBottom: "12px" }}>Contact</h6>
            <p style={{ color: "#b5b5b5" }}>gymtrack@gmail.com</p>
            <p style={{ color: "#b5b5b5" }}>+91 9870987654</p>
          </Col>
        </Row>

        {/* DIVIDER */}
        <hr
          style={{
            borderTop: "1px solid #222",
            margin: "30px 0 15px",
          }}
        />

        {/* BOTTOM */}
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#888",
            marginBottom: 0,
          }}
        >
          © {new Date().getFullYear()} FitLife. All rights reserved.
        </p>
      </Container>
    </div>
  );
};

const linkStyle = {
  color: "#b5b5b5",
  cursor: "pointer",
  marginBottom: "6px",
};

export default Footer;
