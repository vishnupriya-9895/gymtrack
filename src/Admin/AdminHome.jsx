import React from "react";
import AdminHeader from "./AdminHeader";
import AdminAside from "./AdminAside";
import { Button, InputGroup, Form, Card, Table } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const AdminHome = () => {
  return (
    <div>
      <AdminHeader />

      <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6f8" }}>
        <AdminAside />

        <div
          style={{
            marginLeft: "240px",
            padding: "30px",
            width: "100%",
          }}
        >
          {/* HEADER */}
          <h2 style={{ fontWeight: "600", marginBottom: "5px" }}>
            Admin Dashboard
          </h2>
          <p style={{ color: "#6c757d", marginBottom: "30px" }}>
            Welcome back Admin! Here's an overview of your platform activities.
          </p>

          {/* SEARCH + ACTION */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "14px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              marginBottom: "30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            <InputGroup style={{ maxWidth: "450px" }}>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control placeholder="Search for Orders..." />
              <Button variant="dark">Search</Button>
            </InputGroup>

            <Button variant="dark">+ Add New Exercise</Button>
          </div>

         
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            
                <Card
                 
                  style={{
                    width: "20rem",
                    padding: "20px",
                    borderRadius: "16px",
                    border: "none",
                    textAlign: "center",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <h6 style={{ color: "#6c757d", marginBottom: "8px" }}>
                   users
                  </h6>
                  <h2 style={{ fontWeight: "700" }}>10</h2>
                </Card>
              
          </div>

          {/* TABLE */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "14px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h5 style={{ fontWeight: "600", marginBottom: "20px" }}>
              Products to Approve
            </h5>

            <Table hover responsive>
              <thead style={{ backgroundColor: "#f1f5f9" }}>
                <tr>
                  <th>Product Name</th>
                  <th>Seller</th>
                  <th style={{ textAlign: "center" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Protein Powder</td>
                  <td>Mark</td>
                  <td style={{ textAlign: "center" }}>
                    <Button size="sm" variant="success" className="me-2">
                      Approve
                    </Button>
                    <Button size="sm" variant="danger">
                      Deny
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td>Yoga Mat</td>
                  <td>Jacob</td>
                  <td style={{ textAlign: "center" }}>
                    <Button size="sm" variant="success" className="me-2">
                      Approve
                    </Button>
                    <Button size="sm" variant="danger">
                      Deny
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
