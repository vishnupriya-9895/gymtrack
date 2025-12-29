import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Premium = () => {
  return (
    <>
   <Header/>
    <div style={{ backgroundColor: "#0b0b0b", minHeight: "100vh", padding: "60px 0" }}>
      <Container>
       
        <Row className="mb-5">
          <Col className="text-center text-light">
            <h1 style={{ fontWeight: "700", marginBottom: "10px" }}>
              Unlock Premium Nutrition
            </h1>
            <p style={{ color: "#b5b5b5", fontSize: "18px" }}>
              Get unlimited access to nutrition, diet plans, calories & protein goals
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card
              style={{
                borderRadius: "20px",
                border: "none",
                padding: "30px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
              }}
            >
              <Card.Body>
                <h3 style={{ fontWeight: "700", marginBottom: "20px" }}>
                  Premium Benefits
                </h3>

                <ListGroup variant="flush">
                  <ListGroup.Item style={{ border: "none", paddingLeft: 0 }}>
                     Unlimited personalized nutrition plans
                  </ListGroup.Item>
                  <ListGroup.Item style={{ border: "none", paddingLeft: 0 }}>
                     Diet plans for weight loss, muscle gain & maintenance
                  </ListGroup.Item>
                
                
                  <ListGroup.Item style={{ border: "none", paddingLeft: 0 }}>
                    Healthy meal & food recommendations
                  </ListGroup.Item>
                
                </ListGroup>

                {/* PRICE */}
                <div
                  style={{
                    marginTop: "30px",
                    padding: "20px",
                    borderRadius: "15px",
                    backgroundColor: "#f8f9fa",
                    textAlign: "center",
                  }}
                >
                  <h2 style={{ fontWeight: "700" }}>₹299 / Month</h2>
                  <p style={{ color: "#6c757d", marginBottom: "20px" }}>
                    Cancel anytime
                  </p>

                  <Button
                    variant="dark"
                    size="lg"
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      padding: "12px",
                    }}
                  >
                    Unlock Premium
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <p style={{ color: "#777", fontSize: "14px" }}>
              Premium helps you eat smarter, stay consistent, and reach your fitness goals faster.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer/>
     </>
  );
};


export default Premium;
