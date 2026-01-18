import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import AdminHeader from "./AdminHeader";
import AdminAside from "./AdminAside";
import { nutrientsAdd } from "../services/allApi";

const AdminNutrition = () => {
  const [nutrition, setNutrition] = useState({
    title: "",
    description: "",
    imageUrl: "",
    Premium: true,
  });

  const nutrientsadd = async () => {
    try {
      let token = localStorage.getItem("token");

      let reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      let apiresponse = await nutrientsAdd(nutrition, reqHeader);
      console.log(apiresponse);
      toast.success("Nutrition added successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <AdminHeader />

      <div
        style={{ display: "flex", minHeight: "100vh", background: "#f4f6f8" }}
      >
        <AdminAside />

        <div style={{ marginLeft: "240px", padding: "30px", width: "100%" }}>
          <h2 style={{ fontWeight: "600" }}>Add Premium Nutrition</h2>
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
                  <input
                    onChange={(e) =>
                      setNutrition({ ...nutrition, title: e.target.value })
                    }
                    className="form-control mb-4"
                    type="text"
                    name="title"
                    value={nutrition.title}
                    placeholder="Nutrition Title"
                  />

                  <input
                    onChange={(e) =>
                      setNutrition({ ...nutrition, imageUrl: e.target.value })
                    }
                    className="form-control mb-4"
                    type="text"
                    name="imageUrl"
                    value={nutrition.imageUrl}
                    placeholder="Image URL"
                  />

                  <textarea
                    className="form-control mb-4"
                    rows={4}
                    name="description"
                    value={nutrition.description}
                    onChange={(e) =>
                      setNutrition({
                        ...nutrition,
                        description: e.target.value,
                      })
                    }
                    placeholder="Diet description"
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "15px",
                    }}
                  >
                    <Button variant="secondary">Cancel</Button>

                    <Button variant="dark" onClick={nutrientsadd}>
                      Publish Nutrition Plan
                    </Button>
                  </div>
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
