import React, { useEffect, useState } from "react";
import { Card, Table, InputGroup, Form, Button, Badge } from "react-bootstrap";
import { FaSearch, FaUsers } from "react-icons/fa";
import AdminHeader from "./AdminHeader";
import AdminAside from "./AdminAside";
import { getallUser } from "../services/allApi";

const AdminUser = () => {
  const [user, setUser] = useState([]);
 const [search, setSearch] = useState("");
  useEffect(() => {
    getAllusers();
  }, []);

  const getAllusers = async () => {
    try {
      const token = localStorage.getItem("token");
      const header = { Authorization: `Bearer ${token}` };

      let apiresponse = await getallUser(header);

      if (apiresponse.status === 200) {
        setUser(apiresponse.data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const filteredProducts = user.filter((item) =>
    item.userType.toLowerCase().includes(search.toLowerCase())
  );

  const totalUsers = user.length;
  const totalBuyers = user.filter((u) => u.userType === "user").length;
  const totalSellers = user.filter((u) => u.userType === "seller").length;

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
              <h6>Buyer</h6>
              <h3>{totalBuyers}</h3>
            </Card>

           

            <Card style={{ ...cardStyle }}>
              <h6>Seller</h6>
              <h3>{totalSellers}</h3>
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
  <Form.Control
    placeholder="Search users..."
    onChange={(e) => setSearch(e.target.value)}
  />
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
  {filteredProducts.length > 0 ? (
    filteredProducts.map((u, index) => (
      <tr key={u._id}>
        <td>{index + 1}</td>
        <td>{u.userName}</td>
        <td>{u.email}</td>
        <td>{u.userType}</td>
        <td>
          <Badge bg="success">Online</Badge>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="text-center">
        No users found
      </td>
    </tr>
  )}
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
