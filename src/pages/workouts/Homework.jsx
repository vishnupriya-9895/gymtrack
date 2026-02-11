import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import "./work.css";
import { Typography } from "@mui/material";
import { getWorkout } from "../../services/allApi";
import { Link } from "react-router-dom";
const bodyParts = [
  "Chest",
  "Back",
  "Legs",
  "Biceps",
  "Triceps",
  "Shoulders",
  "Abs",
  "Cardio",
  "Forearms",
  "Warm-up",
];

const HomeWorkout = () => {
  const [allWorkouts, setAllWorkouts] = useState([]);
  const [selectedPart, setSelectedPart] = useState("Chest");

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await getWorkout();
        console.log(res.data.workout); 
        setAllWorkouts(res.data.workout);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWorkouts();
  }, []);

 
  const filteredWorkouts = allWorkouts.filter((item) => {
    const workoutType = item.workoutType?.toLowerCase();
    const category = item.category?.toLowerCase();

    return (
      workoutType?.includes("home") &&
      category === selectedPart.toLowerCase()
    );
  });

  return (
    <>
      <div className="blur-navbar">
        <Header />
      </div>

      <div className="homeWorkout-container">
    
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
            {filteredWorkouts.length > 0 ? (
              filteredWorkouts.map((each) => (
                <div className="exercise-card" key={each._id}>
                  <img
                    src={each.imageUrl}
                    alt={each.workoutName}
                    className="exercise-img"
                  />
                  <Typography variant="h6">
                    {each.workoutName}
                  </Typography>
                  <Typography variant="body2">
                    {each.description}
                  </Typography>
                 <Link to={`/singleexcercise/${each._id}`}>
                  <button className= "bg-black text-white hover:bg-white hover:text-black text-center ps-3 p-1 pe-3 rounded-2xl w-50">start</button>
                 </Link>
                </div>
              ))
            ) : (
              <Typography>No workouts found</Typography>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWorkout;
