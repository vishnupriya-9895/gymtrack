import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import AdminHeader from "./AdminHeader";
import AdminAside from "./AdminAside";

const ExerciseAdmin = () => {
  return (
    <div>
      <AdminHeader />

      <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6f8" }}>
        <AdminAside />

        <div
          style={{
            marginLeft: "240px",
            padding: "30px",
            width: "100%",
          }}
        >
          <h2 style={{ fontWeight: "600", marginBottom: "10px" }}>
            Add New Exercise
          </h2>
          <p style={{ color: "#6c757d", marginBottom: "30px" }}>
            Fill in the details to add a new exercise
          </p>

          <Card
            style={{
              maxWidth: "700px",
              padding: "25px",
              borderRadius: "16px",
              border: "none",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <Form>
              {/* Exercise Name */}
              <Form.Group className="mb-3">
                <Form.Label>Exercise Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter exercise name"
                />
              </Form.Group>

              {/* Category */}
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select>
                  <option>Select category</option>
                  <option>Chest</option>
                  <option>Biceps</option>
                  <option>Triceps</option>
                  <option>Legs</option>
                  <option>Shoulders</option>
                  <option>Abs</option>
                  <option>Warm-up</option>
                </Form.Select>
              </Form.Group>

              {/* Difficulty */}
              <Form.Group className="mb-3">
                <Form.Label>Difficulty Level</Form.Label>
                <Form.Select>
                  <option>Select difficulty</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </Form.Select>
              </Form.Group>

              {/* Duration */}
              <Form.Group className="mb-3">
                <Form.Label>Duration (minutes)</Form.Label>
                <Form.Control type="number" placeholder="e.g. 30" />
              </Form.Group>

 <Form.Group className="mb-3">
                <Form.Label>workout type</Form.Label>
                <Form.Select>
                 
                  <option>Gym wrokouts</option>
                  <option>Home workouts</option>
                
                </Form.Select>
              </Form.Group>
              {/* Description */}
              <Form.Group className="mb-4">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Describe the exercise..."
                />
              </Form.Group>
              
  <Form.Group className="mb-3">
                <Form.Label>image url</Form.Label>
                <Form.Control type="text" placeholder="image url" />
              </Form.Group>
              {/* Buttons */}
              <div style={{ display: "flex", gap: "15px" }}>
                <Button variant="dark">Add Exercise</Button>
                <Button variant="outline-secondary">Cancel</Button>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExerciseAdmin;
