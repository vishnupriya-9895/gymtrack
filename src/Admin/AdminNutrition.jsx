import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import AdminHeader from "./AdminHeader";
import AdminAside from "./AdminAside";

const AdminNutrition = () => {
  return (
    <div>
      <AdminHeader />

      <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6f8" }}>
        <AdminAside />

        {/* MAIN CONTENT */}
        <div
          style={{
            marginLeft: "240px",
            padding: "30px",
            width: "100%",
          }}
        >
          <h2 style={{ fontWeight: "600", marginBottom: "10px" }}>
            Add Premium Nutrition
          </h2>
          <p style={{ color: "#6c757d", marginBottom: "30px" }}>
            Create nutrition & diet plans for premium users
          </p>

          <Container fluid>
            <Row className="justify-content-center">
              <Col md={10} lg={8}>
                <Card
                  style={{
                    borderRadius: "16px",
                    border: "none",
                    padding: "25px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  }}
                >
                  <Form>
                    {/* TITLE */}
                    <Form.Group className="mb-4">
                      <Form.Label style={{ fontWeight: "500" }}>
                        Nutrition Title
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Eg: High Protein Muscle Gain Diet"
                      />
                    </Form.Group>

                    {/* GOAL TYPE */}
                    <Form.Group className="mb-4">
                      <Form.Label style={{ fontWeight: "500" }}>
                        Fitness Goal
                      </Form.Label>
                      <Form.Select>
                        <option>Select Goal</option>
                        <option>Weight Loss</option>
                        <option>Muscle Gain</option>
                        <option>Maintenance</option>
                      </Form.Select>
                    </Form.Group>

                    {/* CALORIES & PROTEIN */}
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label style={{ fontWeight: "500" }}>
                            Daily Calories (kcal)
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Eg: 2200"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label style={{ fontWeight: "500" }}>
                            Protein (grams)
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Eg: 150"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* DIET DESCRIPTION */}
                    <Form.Group className="mb-4">
                      <Form.Label style={{ fontWeight: "500" }}>
                        Diet Description
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Describe meals, food items, nutrition tips..."
                      />
                    </Form.Group>

                    {/* PREMIUM TAG */}
                    <Form.Group className="mb-4">
                      <Form.Check
                        type="checkbox"
                        label="Mark as Premium Content"
                        defaultChecked
                      />
                    </Form.Group>

                    {/* BUTTONS */}
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                        justifyContent: "flex-end",
                        marginTop: "20px",
                      }}
                    >
                      <Button variant="secondary">Cancel</Button>
                      <Button variant="dark">
                        Publish Nutrition Plan
                      </Button>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AdminNutrition;
