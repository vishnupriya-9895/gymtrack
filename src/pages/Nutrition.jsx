import React from "react";
import Header from "../Components/Header";
import { Typography } from "@mui/material";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const Nutrition = () => {
  return (
    <>
      <div className="blur-navbar">
        <Header />
      </div>
      <div className="container">
        <div className="row" style={{ paddingTop: "150px" }}>
          <div className="col-6">
            <Typography variant="h3" className="mb-3">
              your journey healthy to Healthy eating Start Here
            </Typography>
            <Typography variant="p" className="">
              
            Eating healthy food helps your body stay strong and active. Fresh fruits, vegetables, whole grains, and balanced meals give you the energy you need throughout the day and support overall well-being.
            </Typography>
            <br />
          <Link to="/premium">  <Button variant="dark" className="mt-3 p-3 w-75 ml-2">
              upgrade to premium
            </Button></Link>
          </div>
          {/* right */}
          <div className="col-6 ">
            <img
              style={{ marginLeft: "120px", width: "420px" }}
              className="h-100"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW14cHhqazl6MDV2NXRmMWh1OWU5Y3l2b3E3Nm5weThyY2FjOGhxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUPGcuomRFMUcsB9nO/giphy.gif"
              alt=""
            />
          </div>
        </div>
        <Typography variant="h5" className="mt-5 mb-5 font-bold">General Healthy Eating Guidelines</Typography>

  <div className="row g-4 text-center mt-5">

    {/* 1 */}
    <div className="col-12 col-md-4">
      <img
        style={{ height: "300px", width: "100%", objectFit: "cover", borderRadius: "10px" }}
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnBpdDVzOWJsanFuaGluaXZza245eTdiYjN2YzJ6ZGQwNHZjb2pjbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/37QGsYyVuSKZdhd2IF/giphy.gif"
        alt=""
      />

      <Typography variant="h6" className="mt-3 fw-bold">
        The Importance Of Hydration
      </Typography>

      <Typography variant="body1">
        Learn why staying hydrated is crucial for energy <br /> and overall health
      </Typography>
    </div>

    {/* 2 */}
    <div className="col-12 col-md-4">
      <img
        style={{ height: "300px", width: "100%", objectFit: "cover", borderRadius: "10px" }}
        src="https://media1.tenor.com/m/MqQVS38TlqcAAAAC/food-lover-estetik-foods.gif"
        alt=""
      />

      <Typography variant="h6" className="mt-3 fw-bold">
        Balancing Macronutrients
      </Typography>

      <Typography variant="body1">
        Understand the roles of proteins, carbs <br /> and fats in your diet
      </Typography>
    </div>

    {/* 3 */}
    <div className="col-12 col-md-4">
      <img 
        style={{ height: "300px", width: "100%", objectFit: "cover", borderRadius: "10px" }}
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnQ5ZDVsd3k0bTk4cDc3cjRoajA5M3B0MXpnZG1jdjQycGEwdTNpcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3CnSg25X9hWgLmgFe/giphy.gif"
        alt=""
      />

      <Typography variant="h6" className="mt-3 fw-bold">
        Tips for Healthy Snacking
      </Typography>

      <Typography variant="body1">
        Discover smart snack choices to keep you <br /> full and energized
      </Typography>
    </div>
     <div className="col-12 col-md-4">
      <img
        style={{ height: "300px", width: "70%", objectFit: "cover", borderRadius: "10px" }}
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG1lZDFsdWZhbWRsMXM0OXZsY250bDZkbTNrcTVwNnhsaHYxZTVrcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cIbLz6tPzunGQBGr7e/giphy.gif"
        alt=""
      />

      <Typography variant="h6" className="mt-3 fw-bold">
        Tips for Healthy Snacking
      </Typography>

      <Typography variant="body1">
        Discover smart snack choices to keep you <br /> full and energized
      </Typography>
    </div>

  </div>
  <div className="mb-5"
  style={{
    padding: "60px 20px",
    borderRadius: "20px",
    background: "black",
    color: "white",
    textAlign: "center",
    marginTop: "50px"
  }}
>
  <div
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundImage: `url("https://thumbs.dreamstime.com/b/lock-icon-black-white-black-background-illustration-lock-icon-black-white-black-background-vector-illustration-170336738.jpg")`,
      backgroundSize: "cover",
      margin: "0 auto",
    }}
  ></div>

  <Typography variant="h5" className="mt-3 fw-bold">
    Unlock Complete Nutrition Knowledge
  </Typography>

  <Typography variant="body1" className="mt-2">
    Access deep-dive meal guides, premium diet plans, expert insights.
  </Typography>

  <Link to="/premium"><Button
    variant="light"
    className="mt-4 px-5 py-2 fw-bold"
    style={{ borderRadius: "30px" }}
  >
    Go Premium
  </Button></Link>
</div>

</div>


     
<Footer/>
    </>
  );
};

export default Nutrition;
