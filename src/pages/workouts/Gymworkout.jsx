import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Typography } from "@mui/material";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { getWorkout } from "../../services/allApi";
import { Link } from "react-router-dom";

const categories = [
  "Chest",
  "Biceps",
  "Forearms",
  "Strength",
  "Shoulders",
  "Warm-up",
  "Back",
  "Abs",
  "Legs",
];

const GymWorkout = () => {
  const [allWorkouts, setAllWorkouts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Chest");

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
      workoutType?.includes("gym") &&
      category === selectedCategory.toLowerCase()
    );
  });

  return (
    <>
      <div className="blur-navbar">
        <Header />
      </div>

      <Container style={{ paddingTop: "120px" }}>
        <Typography variant="h4" className="fw-5">
          GYM WORKOUTS
        </Typography>

        <div className="d-flex flex-wrap gap-2 mt-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "dark" : "outline-dark"}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="exercise-grid mt-4">
          {filteredWorkouts.length > 0 ? (
            filteredWorkouts.map((each) => (
              <div className="exercise-card" key={each._id}>
                <img
                  src={each.imageUrl}
                  alt={each.workoutName}
                  className="exercise-img"
                />
                <Typography variant="h6">{each.workoutName}</Typography>
                <Typography variant="body2">{each.description}</Typography>
              <Link
  to={`/singleexcercise/${each._id}`}
  style={{ textDecoration: "none" }}
>
  <button className="bg-danger p-3 text-black">
    View More
  </button>
</Link>

              </div>
            ))
          ) : (
            <Typography>No workouts found</Typography>
          )}
        </div>
      </Container>
    </>
  );
};

export default GymWorkout;
