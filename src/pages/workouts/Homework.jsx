import React, { useState } from "react";
import Header from "../../Components/Header";
import "./Work.css";
import { Typography } from "@mui/material";

const bodyParts = [
  "Chest",
  "Back",
  "Legs",
  "Biceps",
  "Triceps",
  "Shoulders",
  "Abs",
"Cardio",
"Forearms"
];

const exercisesData = {
  Chest: [
    {
      name: "Push Ups",
      img: "https://www.inspireusafoundation.org/file/2023/04/close-grip-push-up.gif",
      desc: "A basic chest exercise you can do at home to build strength.",
    },
    {
      name: "Incline Push Ups",
      img: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Push-Up.gif",
      desc: "Targets upper chest and shoulders.",
    },
  ],

  
};

const HomeWorkout = () => {
  const [selectedPart, setSelectedPart] = useState("Chest");

  return (
    <>
      <div className="blur-navbar">
        <Header />
      </div>

      <div className="homeWorkout-container">
{/* side */}
        <aside className="sidebar">
          <Typography variant="h5" className="mb-3">
            Home Workouts
          </Typography>

          {bodyParts.map((part) => (
            <div
              key={part}
              className={`sidebar-item ${
                selectedPart === part ? "active" : ""
              }`}
              onClick={() => setSelectedPart(part)}
            >
              {part}
            </div>
          ))}
        </aside>

        <div className="exercise-content">
          <Typography variant="h4" className="mb-4">
            {selectedPart} Exercises
          </Typography>

          <div className="exercise-grid">
            {exercisesData[selectedPart]?.map((each, index) => (
              <div className="exercise-card" key={index}>
                <img src={each.img} alt={each.name} className="exercise-img" />
                <Typography variant="h6">{each.name}</Typography>
                <Typography variant="body2">{each.desc}</Typography>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default HomeWorkout;
