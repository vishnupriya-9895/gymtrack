import React, { useEffect, useState } from "react";
import Sellernav from "../Components/Sellernav";
import Selleraside from "../Components/Selleraside";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllProducts } from "../services/allApi";

const Sellerhome = () => {
  const [products, setProducts] = useState([]); // ✅ MISSING STATE FIXED

  useEffect(() => {
    getAllProductsData();
  }, []);

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

  return (
    <div>
      <Sellernav />

      <div className="d-flex">
        <Selleraside />

        <div
          style={{
            flex: 1,
            padding: "30px",
            marginLeft: "240px",
          }}
        >
          <Container fluid>
            <h2 className="fw-bold">Seller Dashboard</h2>

            {/* TOP CARDS */}
            <Row className="mt-4 g-4">
              <Col md={6} lg={4}>
                <Card className="text-center shadow border-0 p-4 rounded-4">
                  <Card.Img
                    src="https://static.vecteezy.com/system/resources/previews/027/570/210/non_2x/approved-rubber-stamp-approved-icon-seal-of-approval-tested-and-verified-badge-with-check-mark-accepted-sign-authorized-badge-design-with-grunge-texture-illustration-vector.jpg"
                    style={{
                      width: "80px",
                      height: "80px",
                      margin: "0 auto",
                    }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Product Approval
                    </Card.Title>
                    <Card.Text className="fw-bold fs-4">2</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} lg={4}>
                <Card className="text-center shadow border-0 p-4 rounded-4">
                  <Card.Img
                    src="https://cdn-icons-png.flaticon.com/512/8899/8899687.png"
                    style={{
                      width: "80px",
                      height: "80px",
                      margin: "0 auto",
                    }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Total Products
                    </Card.Title>
                    <Card.Text className="fw-bold fs-4">
                      {products.length} 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

           
            <h3 className="mt-5 text-secondary fw-semibold">
              Quick Actions
            </h3>

            <Row className="mt-4 g-4 bg-light p-4 rounded">
              <Col md={6}>
                <Link
                  to="/sellerProducts"
                  className="text-decoration-none text-dark"
                >
                  <Card className="text-center shadow-sm border-0 p-4 h-100 rounded-4">
                    <Card.Img
                      src="https://cdn-icons-png.freepik.com/256/15526/15526434.png"
                      style={{
                        width: "80px",
                        height: "80px",
                        margin: "0 auto",
                      }}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold">
                        Add Product
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

              <Col md={6}>
                <Link
                  to="/SellerSettings"
                  className="text-decoration-none text-dark"
                >
                  <Card className="text-center shadow-sm border-0 p-4 h-100 rounded-4">
                    <Card.Img
                      src="https://png.pngtree.com/element_our/png/20181227/settings-glyph-black-icon-png_292947.jpg"
                      style={{
                        width: "80px",
                        height: "80px",
                        margin: "0 auto",
                      }}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold">
                        Settings
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Sellerhome;
