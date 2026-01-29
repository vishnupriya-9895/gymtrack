import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminAside from "./AdminAside";
import { Button, InputGroup, Form, Card, Table } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { getallUser, getAllProducts } from "../services/allApi";
import { Link } from "react-router-dom";

const AdminHome = () => {
   
    const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
 const filteredProducts = products.filter((item) =>
    item.ProductName.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    getAllusers();
    getAllProductsData();
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

  const getAllProductsData = async () => {
    try {
      const token = localStorage.getItem("token");
      const header = { Authorization: `Bearer ${token}` };

      let apiresponse = await getAllProducts(header);

      if (apiresponse.status === 200) {
        setProducts(apiresponse.data.productData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const totalBuyers = user.filter((u) => u.userType === "user").length;

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
          <h2>Admin Dashboard</h2>
          <p className="mb-3">
            Welcome back Admin! Here's an overview of your platform activities.
          </p>

          <div
            className="bg-white rounded-3xl"
            style={{
              padding: "20px",
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
            <Form.Control
  placeholder="Search for product ..."
  onChange={(e) => setSearch(e.target.value)}
/>

              <Button variant="dark">Search</Button>
            </InputGroup>

            <Link to="/exerciseAdmin">
              <Button variant="dark">+ Add New Exercise</Button>
            </Link>
          </div>

          <div className="d-flex flex-wrap gap-4 mb-5">
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
              <h6 className="text-secondary mb-2 text-2xl font-bold">
                users
              </h6>
              <h2>{totalBuyers}</h2>
            </Card>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "14px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h5 className="fw-semibold mb-4">All Products</h5>

            <Table hover responsive>
              <thead style={{ backgroundColor: "#f1f5f9" }}>
                <tr>
                  <th>Product Name</th>
                  <th>Seller</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
             <tbody>
  {filteredProducts.length > 0 ? (
    filteredProducts.map((p) => (
      <tr key={p._id}>
        <td>{p.ProductName}</td>
        <td>{p.userMail}</td>
        <td className="text-center">
          <Button size="sm" variant="success" className="me-2">
            Approve
          </Button>
          <Button size="sm" variant="danger">
            Deny
          </Button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="3" className="text-center">
        No Products Found
      </td>
    </tr>
  )}
</tbody>

            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
