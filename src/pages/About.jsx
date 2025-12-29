import React, { useEffect } from "react";
import gsap from "gsap";
import Header from "../Components/Header";
import { Card } from "react-bootstrap";
import { Typography } from "@mui/material";
import Button from "react-bootstrap/Button";

import "../App.css";
import Footer from "../Components/Footer";
const About = () => {
    useEffect(() => {
    gsap.utils.toArray(".color-scope").forEach((card, index) => {
      gsap.to(card, {
        "--myColor": "#0ae448",
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.3, 
      });
    });
  }, []);
  return (
    <div>
      <div className="blur-navbar">
        <Header />
      </div>

      <div className="aboutbg">
        <section
          className="container text-center fs-bold  text-light "
          style={{ paddingTop: "150px" }}
        >
          <Typography
            variant="h5"
            className="pt-5  mb-2"
            style={{ fontSize: "52px" }}
          >
            Making Fitness Accessible to everyone
          </Typography>
          <Typography variant="p" className="" style={{ fontSize: "20px" }}>
            Discover our story,our mission and the community that drive us
            forward on a <br />
            journey to be better health
          </Typography>
        </section>
      </div>

      {/* About section */}
      <section className="container mt-5">
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          natus praesentium voluptatibus, ipsum nemo, voluptatem rem deserunt
          tempore quos eius expedita assumenda corrupti sequi laboriosam
          quisquam dolorum distinctio inventore sunt?
        </Typography>

       
      <section className="container mt-5">
        <Typography variant="h4" className="mb-5">
          What we stand for
        </Typography>

        <div className="row g-4 justify-content-center">

          {/* CARD 1 */}
          <div className="col-12 col-md-4 color-scope">
            <div className="card h-100 text-center p-3">
              <div className="d-flex justify-content-center mt-3">
                <div
                  className="rounded-circle"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundImage:
                      'url("https://i.pinimg.com/1200x/88/3f/17/883f17b595218e3e8a681013ee3c1654.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              <div className="card-body">
                <h6 className="card-title">Community</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-12 col-md-4 color-scope">
            <div className="card h-100 text-center p-3">
              <div className="d-flex justify-content-center mt-3">
                <div
                  className="rounded-circle"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundImage:
                      'url("https://cdn-icons-png.flaticon.com/512/8629/8629508.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              <div className="card-body">
                <h6 className="card-title">Expertise</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-12 col-md-4 color-scope">
            <div className="card h-100 text-center p-3">
              <div className="d-flex justify-content-center mt-3">
                <div
                  className="rounded-circle"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundImage:
                      'url("https://static.vecteezy.com/system/resources/previews/040/888/095/non_2x/innovation-glyph-circle-icon-vector.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              <div className="card-body">
                <h6 className="card-title">Innovation</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-5">
          <Button variant="dark">Start Your Journey</Button>
        </div>

      </section>

        <Typography variant="h4" className="mt-5 mb-5">
          Meet the Team
        </Typography>

        <div className="d-flex justify-content-between align-items-center">
          {/* 1st */}
          <div className="text-center">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-circle"
              style={{
                width: "80px",
                height: "80px",
                backgroundSize: "cover",
                backgroundImage: `url("https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg")`,
              }}
            ></div>
            <p className="fw-bold mb-0 mt-2">Alex John</p>
            <small className="text-muted">Founder & CEO</small>
          </div>

          {/* 2nd  */}
          <div className="text-center">
            <div
              className="rounded-circle bg-cover bg-center"
              style={{
                width: "80px",
                backgroundSize: "cover",
                height: "80px",
                backgroundImage: `url("https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww")`,
              }}
            ></div>
            <p className="fw-bold mb-0 mt-2">David</p>
            <small className="text-muted">Trainer</small>
          </div>

          {/* 3rd Member */}
          <div className="text-center">
            <div
              className="rounded-circle bg-cover bg-center"
              style={{
                width: "80px",
                backgroundSize: "cover",
                height: "80px",
                backgroundImage: `url("https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg")`,
              }}
            ></div>
            <p className="fw-bold mb-0 mt-2">Sarah</p>
            <small className="text-muted">Nutritionist</small>
          </div>

          {/* 4th Member */}
          <div className="text-center">
            <div
              className="rounded-circle bg-cover bg-center"
              style={{
                width: "80px",
                backgroundSize: "cover",
                height: "80px",
                backgroundImage: `url("https://media.gettyimages.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=gi&k=20&c=BFc13n-vhT4GMd0ohRt0PFD3IzJ_Onf6nKDAObgh1CA=")`,
              }}
            ></div>
            <p className="fw-bold mb-0 mt-2">Michael</p>
            <small className="text-muted">Coach</small>
          </div>
        </div>
        <div
          className="container bg-light p-5 text-center mb-5"
          style={{ height: "300px", marginTop: "40px", borderRadius: "20px" }}
        >
          <Typography variant="h5" className="mb-4">
            Join Our Growing Community
          </Typography>
          <Typography variant="p">
            {" "}
            consectetur adipisicing elit. Earum possimus porro sunt culpa
            facilis eum pariatur delectus nobis, libero reiciendis nostrum,{" "}
            <br /> sint exercitationem tenetur deleniti provident. Fugiat eaque
            ullam odit?
          </Typography>{" "}
          <br />
          <Button variant="primary" size="lg" className="bg-dark mt-4">
            start your journey
          </Button>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
