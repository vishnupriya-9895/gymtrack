import React from "react";
import Header from "../Components/Header";
import { Typography } from "@mui/material";
import { Button, Container } from "react-bootstrap";

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
              {" "}
              porro numquam culpa praesentium tempora magni voluptate odit
              repudiandae blanditiis? Magni temporibus at consectetur dolores
              obcaecati dolorum quae?
            </Typography>
            <br />
            <Button variant="dark" className="mt-3 p-3 w-75 ml-2">
              upgrade to premium
            </Button>
          </div>
          {/* right */}
          <div className="col-6 ">
            <img
              style={{ marginLeft: "120px", width: "420px" }}
              className="h-100"
              src="https://rbmigroupofinstitutions.wordpress.com/wp-content/uploads/2021/07/clean_eating.gif"
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
        src="https://images.immediate.co.uk/production/volatile/sites/30/2017/03/Lemon-water-glass-c14148e.jpg"
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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_6_zi2a6Io0aGIqlkoD0JEzjrY-YVUVBFg&s"
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
        src="https://hips.hearstapps.com/hmg-prod/images/healthiest-nuts-67ab31537db7b.jpg?crop=0.614xw:0.921xh;0.218xw,0.0337xh&resize=640:*"
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
        style={{ height: "300px", width: "100%", objectFit: "cover", borderRadius: "10px" }}
        src="https://hips.hearstapps.com/hmg-prod/images/healthiest-nuts-67ab31537db7b.jpg?crop=0.614xw:0.921xh;0.218xw,0.0337xh&resize=640:*"
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
  <div
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

  <Button
    variant="light"
    className="mt-4 px-5 py-2 fw-bold"
    style={{ borderRadius: "30px" }}
  >
    Go Premium
  </Button>
</div>

</div>


     

    </>
  );
};

export default Nutrition;
