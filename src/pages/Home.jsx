import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Header from "../Components/Header";
import "../App.css";
import Card from "react-bootstrap/Card";
import { Typography } from "@mui/material";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div style={{ position: "relative" }}>
      {/* header */}
      <div className="blur-navbar">
        <Header />
      </div>

      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.ctfassets.net/6ilvqec50fal/6bHqsXzncvntwMopHyxQb3/061690ae44b6214058030316380a2f25/dumbbell-pass-through.gif"
            alt=""
            style={{ height: "600px", objectFit: "cover" }}
          />

          <Carousel.Caption
            style={{
              top: "65%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              position: "absolute",
            }}
          >
            <h1>Gym Track</h1>
            <p>
              Your one-stop platform for workouts, nutrition, and fitness
              products. Train smart. Live strong.
            </p>

            <Link to={"/gymworkout"}>
              <button
                style={{
                  padding: "10px 25px",
                  background: "black",
                  color: "white",
                  borderRadius: "6px",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Start Workout
              </button>
            </Link>

            <Link to={"/shop"}>
              <button
                style={{
                  marginLeft: "30px",
                  padding: "10px 40px",
                  background: "black",
                  color: "white",
                  borderRadius: "6px",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Shop
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/17898139/pexels-photo-17898139.jpeg"
            alt=""
            style={{ height: "600px", objectFit: "cover" }}
          />

          <Carousel.Caption
            style={{
              top: "65%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              position: "absolute",
            }}
          >
            <h1>Gym workout</h1>
            <p>Push your limits with advanced weight training and machines.</p>

            <Link to={"/gymworkout"}>
              <button
                style={{
                  padding: "10px 25px",
                  background: "black",
                  color: "white",
                  borderRadius: "6px",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Start Workout
              </button>
            </Link>

            <Link to={"/shop"}>
              <button
                style={{
                  marginLeft: "30px",
                  padding: "10px 40px",
                  background: "black",
                  color: "white",
                  borderRadius: "6px",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Shop
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://downloads.ctfassets.net/drib7o8rcbyf/k01dPFaHRl5u4vJ4sY74Z/ffdd82fb02581671281404c322a7baaf/EQX_PAI_MOVE_PXEX01387_23_1.gif"
            alt=""
            style={{ height: "600px", objectFit: "cover" }}
          />

          <Carousel.Caption
            style={{
              top: "65%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              position: "absolute",
            }}
          >
            <h1>Home workouts</h1>
            <p>
              Train anywhere with effective routines designed to build strength
              using minimal equipment.
            </p>

            <Link to={"/gymworkout"}>
              <button
                style={{
                  padding: "10px 25px",
                  background: "black",
                  color: "white",
                  borderRadius: "6px",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Start Workout
              </button>
            </Link>

            <Link to={"/shop"}>
              <button
                style={{
                  marginLeft: "30px",
                  padding: "10px 40px",
                  background: "black",
                  color: "white",
                  borderRadius: "6px",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Shop
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div
       
        className="container fs-4 text-center"
      >
        <p className="mt-5 mb-5">
          Welcome to GymTrack, your all-in-one platform for achieving your
          health and wellness <br /> goals. Whether you want to follow guided
          workouts, find the perfect nutrition plan, or <br /> shop for the best
          fitness gear, we've got you covered. Explore the sections below to get{" "}
          <br /> started on your path to a healthier, stronger you.
        </p>
        {/* cards */}
        <section className="d-flex  justify-content-between">
          <Card
            className="animated-card text-center  rounded-2xl p-4 border-0 "
            style={{
              width: "350px",
            }}
          >
            <div
              className="icon-circle"
              style={{
                backgroundImage: `url("https://plus.unsplash.com/premium_photo-1664536967999-f75d4f4b95fb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              }}
            ></div>

            <Card.Title className="fw-bold">Shop</Card.Title>
            <p>
              Get the best gear and supplements to <br /> support your journey.
            </p>
          </Card>

          <Card
            className="animated-card text-center rounded-2xl p-4 border-0"
            style={{
              width: "350px",
             
            }}
          >
            <Card.Body>
              <div
                className="icon-circle"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D")`,
                }}
              ></div>
              <Card.Title className="fw-bold">Workouts</Card.Title>
              <p>
                Browse our library of guided workouts for <br /> all fitness
                levels
              </p>
            </Card.Body>
          </Card>

          <Card
            className="animated-card text-center rounded-2xl p-4 border-0"
            style={{
              width: "350px",
             
            }}
          >
            <Card.Body>
              <div
                className="icon-circle"
                style={{
                  backgroundImage: `url("https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?semt=ais_hybrid&w=740&q=80")`,
                }}
              ></div>

              <Card.Title>Nutrition</Card.Title>
              <p>
                Find healthy recipes and meal plans to <br />
                fuel your body
              </p>
            </Card.Body>
          </Card>
        </section>


        {/* next card */}
        <div className="d-flex justify-content-between">
          <Typography className="mt-5 mb-5"
            variant="h4"
          
          >
            Featured workouts
          </Typography>
        </div>

        <div className="cards-wrapper">
        
          <div
            className="project-card"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1674600625774-6b1e37a63b99?q=80&w=1171&auto=format&fit=crop")',
            }}
          >
            <h2 className="project-card__title">Home Workout</h2>
            <h3 className="project-card__subtitle">Train Anywhere</h3>

            <div className="project-card__container">
              <div className="project-card__text-block">
                Build strength with minimal equipment using guided home
                routines.
              </div>
            </div>
          </div>

          {/* 2 — Gym Workout */}
          <div
            className="project-card"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1170&auto=format&fit=crop")',
            }}
          >
            <h2 className="project-card__title">Gym Workout</h2>
            <h3 className="project-card__subtitle">Strength Training</h3>

            <div className="project-card__container">
              <div className="project-card__text-block">
                Push your limits with advanced weight training and machines.
              </div>
            </div>
          </div>
          {/* cardio */}
          <div
            className="project-card"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/6455813/pexels-photo-6455813.jpeg")',
            }}
          >
            <h2 className="project-card__title">Cardio Session</h2>
            <h3 className="project-card__subtitle">High Intensity</h3>

            <div className="project-card__container">
              <div className="project-card__text-block">
                Burn calories fast with structured HIIT and endurance workouts.
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <Typography
            variant="h4"
              className="mt-5 mb-5"
          >
            Featured products
          </Typography>
       <Link  style={{textDecoration:"none",color:"black" , marginTop: "50px"}} to="/shop">   <Typography
            variant="p"
          
          >
            view more
          </Typography></Link>
        </div>
      
        <div     className="card-group gap-5 product-cards">
          <div className="card custom-card"sx={{ height: "100%" }}>
            <img
              className="card-img img-fluid"
              src="https://img8.hkrtcdn.com/39078/prd_3907787-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg"
              alt="..."
            />
            <div sx={{ flexGrow: 1 }} className="card-body text-center">
              <h5 className="card-title">Whey protein</h5>
              <button className="btn-shop">Shop Now</button>
            </div>
          </div>

          <div className="card custom-card" sx={{ height: "100%" }}>
            <img
              className="card-img img-fluid"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTAg-MfYoDDDeWhJWt8rPlai_bm_YSA7bvoLIRkDbE8EhmG09aInP7-3gCtBSpumKGX_84_a2Cy3M1a4C5GwdlqzzXVRREUcgl9lTWxbu4ZxhGlm2qCRuMnKp0"
              alt="..."
            />
            <div sx={{ flexGrow: 1 }} className="card-body text-center">
              <h5 className="card-title">Dumbells</h5>
              <button className="btn-shop">Shop Now</button>
            </div>
          </div>

          <div className="card custom-card" sx={{ height: "100%" }}>
            <img
              className="card-img img-fluid"
              src="https://www.theflexnest.com/cdn/shop/files/KitchenScaleXL-BowlIMG_1_5a8bb76a-e56a-4a63-b618-883439ae87d4_500x500.png?v=1732608436"
              alt="..."
            />
            <div className="card-body text-center "sx={{ flexGrow: 1 }}>
              <h5 className="card-title">Flexnest Kitchen Scale</h5>
             <Link to="/shop"  style={{textDecoration:"none",color:"black" }}> <button className="btn-shop">Shop Now</button></Link>
            </div>
          </div>
        </div>

        <div
          className="lasthome"
          style={{
            borderRadius: "20px",
            height: "400px",
            backgroundColor: "whitesmoke",
            marginBottom: "50px",
            marginTop: "50px",
          }}
        >
          <Typography
            variant="h5"
            className="text-center p-4 mt-5"
           
          >
            what our members are saying
          </Typography>
          <div
            className="d-flex justify-content-between mt-5 "
            
          >
            <div className="mx-5" >
              <div
                className="bg-center bg-no-repeat bg-cover rounded-circle "
                style={{
                  marginLeft: "200px",
                  width: "40px",
                  height: "40px",
                  backgroundSize: "cover",
                  backgroundImage: `url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D")`,
                }}
              ></div>
              <Typography variant="p" style={{ fontSize: "15px" }}>
              I noticed better energy levels and improved muscle tone after <br />
               following the workout routines regularly. The exercises are <br />  practical and effective.”
                
              
              </Typography>
              <Typography>-vishnu</Typography>
            </div>
            <div style={{ marginRight: "70px" }}>
              <div
                className="bg-center bg-no-repeat bg-cover rounded-circle "
                style={{
                  marginLeft: "200px",
                  width: "40px",
                  height: "40px",
                  backgroundSize: "cover",
                  backgroundImage: `url("https://img.freepik.com/free-photo/portrait-smiley-woman_23-2148827181.jpg?semt=ais_hybrid&w=740&q=80")`,
                }}
              ></div>
              <Typography variant="p" style={{ fontSize: "15px" }}>
              The exercises are easy to follow and suitable for all fitness levels. <br /> Each workout helps improve strength, 
               flexibility, and  overall <br /> stamina.
              </Typography>
              <Typography>-poornima</Typography>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
