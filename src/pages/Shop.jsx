import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Container, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { Typography } from "@mui/material";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { toast } from "react-toastify";
import { getAllProducts } from "../services/allApi";

const Shop = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    try {
      const token = localStorage.getItem("token");
      const header = {
        Authorization: `Bearer ${token}`,
      };

      const apiresponse = await getAllProducts(header);

      if (apiresponse.status === 200) {
        setProductData(apiresponse.data.productData);
      } else {
        toast.error(apiresponse.response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <div className="blur-navbar">
        <Header />
      </div>

      <Container style={{ paddingTop: "120px" }}>
        <Typography variant="h4">Shop</Typography>

        <InputGroup className="mb-3 mt-3">
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <Form.Control placeholder="Search for Products .." />
          <Button variant="dark">Search</Button>
        </InputGroup>

        {productData.length > 0 ? (
          <div className="d-flex flex-wrap gap-4 mt-5 justify-content-center">
            {productData.map((eachproduct) => (
              <Card
                key={eachproduct._id} 
                sx={{
                  width: "300px",
                  minWidth: "300px",
                  height: 430,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardActionArea sx={{ flexGrow: 1 }}>
                  <CardMedia
                    component="img"
                    image={eachproduct.imgUrl}
                    alt={eachproduct.ProductName}
                    sx={{
                      height: 230,
                      objectFit: "contain",
                      p: 1,
                    }}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {eachproduct.ProductName}
                    </Typography>
                    <Typography variant="body2">
                      Price: ₹{eachproduct.Price}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <Button variant="dark" className="m-2 rounded-pill">
                  Add to Cart
                </Button>
              </Card>
            ))}
          </div>
        ) : (
          <Typography className="text-center mt-5">
            No products found
          </Typography>
        )}
      </Container>
    </>
  );
};

export default Shop;
