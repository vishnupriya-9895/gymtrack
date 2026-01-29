import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getSingleWorkout } from "../services/allApi";

const Singleexcercise = () => {
    const[singleData,setSingleData]=useState({})
 let { id } = useParams();

    console.log(id)
    useEffect(()=>{
single()
    },[id])

   const single = async () => {
  try {
    let token = localStorage.getItem("token");
    let header = {
      Authorization: `Bearer ${token}`,
    };

    let apiresponse = await getSingleWorkout(id, header);
    console.log(apiresponse.data)
    setSingleData(apiresponse.data);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1000px",
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
      >
        
        <div style={{ flex: 1 }}>
          <img
            src={singleData?.imageUrl}
            alt="Exercise"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

       
        <div
          style={{
            flex: 1,
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" style={{ fontWeight: 600 }}>
          {singleData?.workoutName}
          </Typography>

      
          
             <Typography style={{ color: "#777", marginBottom: "20px" }}>
           <span className="font-bold text-black">
             Workout type: </span>{singleData?.workoutType}  
             <span className="font-bold ms-2 text-black">
             Difficulty: </span>{singleData?.difficulty}
              <span className="font-bold ms-2 text-black">
             Duration: </span>{singleData?.duration}  
          </Typography>
     

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                padding: "10px 16px",
                background: "#f0f0f0",
                borderRadius: "12px",
                fontSize: "14px",
              }}
            >
         duration:{singleData?.duration} restime:{singleData?.rest}min    reps:{singleData?.rep} set:{singleData?.set}
            </div>

            <div
              style={{
                padding: "10px 16px",
                background: "#f0f0f0",
                borderRadius: "12px",
                fontSize: "14px",
              }}
            >
               120 kcal
            </div>

            <div
              style={{
                padding: "10px 16px",
                background: "#f0f0f0",
                borderRadius: "12px",
                fontSize: "14px",
              }}
            >
             equipment:  {singleData?.equipment}
            </div>
          </div>

          <Typography style={{ lineHeight: 1.6 }}>
         {singleData?.description}
      
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Singleexcercise;
