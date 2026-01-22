import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Typography } from "@mui/material";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";
import { allnutrienst } from "../services/allApi";

const Nutrition = () => {
  const[nutrition,setNutrition]=useState([])
  useEffect(()=>{
    getAllNutritions()
  },[])
  const getAllNutritions=async()=>{
    try {
      const token=localStorage.getItem('token')
      const header = {
        Authorization: `Bearer ${token}`,
      };
      let apiresponse=await allnutrienst(header)
      if(apiresponse.status==200){
        console.log(apiresponse)
setNutrition(apiresponse.data.nutrientData)

      }else{
        toast.error("something went wrong ")
      }

    } catch (error) {
      console.log(error)
      toast.error("something went wrong")
    }
  }
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

<div className="row mt-5">
  {nutrition.length > 0 ? (
    nutrition.map((item) => (
      <div className="col-12 col-md-4 mb-4" key={item}>
        <div className="card h-100 shadow">
          <img
            src={item.imageUrl}
            className="card-img-top"
            alt={item.title}
            style={{ height: "220px", objectFit: "cover" }}
          />

          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">
              {item.description}
            </p>

            <p className="fw-bold">
              Calories: {item.calories}
            </p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center">No nutrition data available</p>
  )}
</div>


</div>


     
<Footer/>
    </>
  );
};

export default Nutrition;
