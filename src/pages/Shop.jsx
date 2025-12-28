import React from "react";
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

const Shop = () => {
  return (
    <>
      <div className="blur-navbar">
        <Header />
      </div>

      <Container style={{ paddingTop: "120px" }}>
        <Typography variant="h4" className="fw-5">
          Shop
        </Typography>
        <InputGroup className="mb-3 mt-3">
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <Form.Control placeholder="Search for Products .." />
          <Button variant="dark">Search</Button>
        </InputGroup>

        <div className="d-flex flex-wrap gap-4 mt-5 justify-content-between">
          <Card
            sx={{
              width: 300,
              height: 430,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardActionArea sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="230"
                image="https://stravahealthcare.com/wp-content/uploads/2023/08/mass-gainer_wb-1.jpg"
                alt="product"
                style={{
                  objectFit: "contain",

                  padding: "10px",
                }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6">
                  MuscleTech Nitrotech
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ₹5350
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button variant="dark" className="">
              Add to Cart
            </Button>
          </Card>

          {/* CARD 2 */}
          <Card
            sx={{
              width: 300,
              height: 430,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardActionArea sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="230"
                image="https://herbalplanet.in/cdn/shop/files/61Nwn5-l7XL._SL1500.jpg?v=1738774804"
                alt="product"
                style={{ objectFit: "cover", padding: "10px" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6">
                  MuscleBlaz Whey Protein
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ₹2456
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button variant="dark" className="">
              Add to Cart
            </Button>
          </Card>

          {/* CARD 3 */}
          <Card
            sx={{
              width: 300,
              height: 430,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardActionArea sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="230"
                image="https://i0.wp.com/promptnutrition.com/wp-content/uploads/2023/12/img_0974.png?w=414&ssl=1"
                alt="product"
                style={{
                  objectFit: "contain",

                  padding: "10px",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6">
                  Creatine Monohydrate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ₹1150
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button variant="dark" className="">
              Add to Cart
            </Button>
          </Card>

          {/* CARD 4 */}
          <Card
            sx={{
              width: 300,
              height: 430,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardActionArea sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="230"
                image="https://i0.wp.com/promptnutrition.com/wp-content/uploads/2023/06/img_9682-1.jpeg?fit=2000%2C2000&ssl=1"
                alt="product"
                style={{
                  objectFit: "contain",

                  padding: "10px",
                }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6">
                  MuscleTech Nitrotech
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ₹5350
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button variant="dark" className="">
              Add to Cart
            </Button>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Shop;
