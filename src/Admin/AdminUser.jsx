import React from "react";
import { Card, Table, InputGroup, Form, Button, Badge } from "react-bootstrap";
import { FaSearch, FaUsers } from "react-icons/fa";
import AdminHeader from "./AdminHeader";
import AdminAside from "./AdminAside";

const AdminUser = () => {
  return (
    <div>
      <AdminHeader />

      <div style={{ display: "flex", background: "#f4f6f8", minHeight: "100vh" }}>
        <AdminAside />

        <div
          style={{
            marginLeft: "240px",
            padding: "30px",
            width: "100%",
          }}
        >
      
          <h2 style={{ fontWeight: "600" }}>User Activity</h2>
          <p style={{ color: "#6c757d" }}>
            Overview of users currently logged into the platform
          </p>

      
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "30px",
              flexWrap: "wrap",
            }}
          >
            <Card style={cardStyle}>
              <FaUsers size={30} />
              <h6>Buyer </h6>
              <h3>120</h3>
            </Card>

            <Card style={{ ...cardStyle,  }}>
              <h6>Premium Users</h6>
              <h3 >45</h3>
            </Card>

            <Card style={{ ...cardStyle, }}>
              <h6>Seller</h6>
              <h3>75</h3>
            </Card>
          </div>

       
          <div
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              marginBottom: "30px",
              maxWidth: "500px",
            }}
          >
            <InputGroup>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control placeholder="Search users..." />
              <Button variant="dark">Search</Button>
            </InputGroup>
          </div>

      
          <Card
            style={{
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h5 style={{ marginBottom: "15px" }}>Logged Users</h5>

            <Table hover responsive>
              <thead style={{ background: "#f1f5f9" }}>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>john@gmail.com</td>
                  <td>Buyer</td>
                  <td>
                    <Badge bg="success">Online</Badge>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Sara Smith</td>
                  <td>sara@gmail.com</td>
                  <td>Seller</td>
                  <td>
                    <Badge bg="success">Online</Badge>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Michael</td>
                  <td>mike@gmail.com</td>
                  <td>Buyer</td>
                  <td>
                    <Badge bg="secondary">Offline</Badge>
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

export default AdminUser;
