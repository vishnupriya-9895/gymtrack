import React from "react";
import { Table, Button, Card, InputGroup, Form, Badge } from "react-bootstrap";
import { FaSearch, FaBoxOpen } from "react-icons/fa";
import AdminHeader from "./AdminHeader";
import AdminAside from "./AdminAside";

const AdminProduct = () => {
  return (
    <div>
      <AdminHeader />

      <div
        style={{ display: "flex", background: "#f4f6f8", minHeight: "100vh" }}
      >
       
        <AdminAside />

     
        <div
          style={{
            marginLeft: "240px",
            padding: "30px",
            width: "100%",
          }}
        >
      
          <h2 className="fw-semibold">Approve Seller Products</h2>
          <p  className="text-secondary mb-4">
            Review and approve products submitted by sellers
          </p>

          <div
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              maxWidth: "500px",
              marginBottom: "30px",
            }}
          >
            <InputGroup>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control placeholder="Search products..." />
              <Button variant="dark">Search</Button>
            </InputGroup>
          </div>

          
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "30px",
              flexWrap: "wrap",
            }}
          >
            <Card style={cardStyle}>
              <FaBoxOpen size={30} />
              <h6>Pending Products</h6>
              <h3>12</h3>
            </Card>

            <Card style={{ ...cardStyle, background: "#e6fffa" }}>
              <h6>Approved</h6>
              <h3 style={{ color: "green" }}>45</h3>
            </Card>

            <Card style={{ ...cardStyle, background: "#fff5f5" }}>
              <h6>Rejected</h6>
              <h3 style={{ color: "red" }}>6</h3>
            </Card>
          </div>

          {/* PRODUCTS TABLE */}
          <Card
            style={{
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h5 style={{ marginBottom: "15px" }}>Pending Approval</h5>

            <Table hover responsive>
              <thead style={{ background: "#f1f5f9" }}>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Seller</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Protein Powder</td>
                  <td>FitStore</td>
                  <td>Supplements</td>
                  <td>
                    <Badge bg="warning">Pending</Badge>
                  </td>
                  <td>
                    <Button variant="success" size="sm" className="me-2">
                      Approve
                    </Button>
                    <Button variant="danger" size="sm">
                      Reject
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Dumbbell Set</td>
                  <td>Iron Gym</td>
                  <td>Equipment</td>
                  <td>
                    <Badge bg="warning">Pending</Badge>
                  </td>
                  <td>
                    <Button variant="success" size="sm" className="me-2">
                      Approve
                    </Button>
                    <Button variant="danger" size="sm">
                      Reject
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Yoga Mat</td>
                  <td>FlexZone</td>
                  <td>Accessories</td>
                  <td>
                    <Badge bg="warning">Pending</Badge>
                  </td>
                  <td>
                    <Button variant="success" size="sm" className="me-2">
                      Approve
                    </Button>
                    <Button variant="danger" size="sm">
                      Reject
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  width: "18rem",
  padding: "20px",
  borderRadius: "16px",
  textAlign: "center",
  border: "none",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
};

export default AdminProduct;
