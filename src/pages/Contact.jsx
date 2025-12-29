import React from "react";
import Header from "../Components/Header";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Typography } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className=" text-black">
      <div className="blur-navbar">
        <Header />
      </div>

      <div className="container" style={{ paddingTop: "100px" }}>
        <div className="row">
          <div className="col-md-6">
            <Typography variant="h3" className="mb-3">
              We are here to help
            </Typography>
            <Typography variant="body1" className="mb-4">
              Send a message and we will get back to you within 24 hours
            </Typography>

            <Form>
              <div className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control placeholder="Enter Your Full Name" />
              </div>

              <div className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control placeholder="Enter Your Email Address" />
              </div>

              <div className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control placeholder="Select a subject" />
              </div>

              <div className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Type your message here"
                />
              </div>

              <Button variant="dark" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </div>

          <div className="col-md-6">
            <Typography
              variant="h6"
              className="mb-4"
              style={{ marginLeft: "150px", marginTop: "70px" }}
            >
              Other Ways To Reach Us
            </Typography>

            <div className="d-flex  mb-3" style={{ marginLeft: "150px" }}>
              <MdEmail size={30} className="me-3 mt-1" />
              <div>
                <Typography variant="body1">Email</Typography>
                <Typography variant="body2" color="textSecondary">
                  priyavishnu3298@gmail.com
                </Typography>
              </div>
            </div>

            <div
              className="d-flex align-items-start mb-3"
              style={{ marginLeft: "150px" }}
            >
              <FaPhoneAlt size={30} className="me-3 mt-1" />
              <div>
                <Typography variant="body1">Phone</Typography>
                <Typography variant="body2" color="textSecondary">
                  098765432
                </Typography>
              </div>
            </div>

            <div
              className="d-flex align-items-start mb-3"
              style={{ marginLeft: "150px" }}
            >
              <FaLocationDot size={30} className="me-3 mt-1" />
              <div>
                <Typography variant="body1">Location</Typography>
                <Typography variant="body2" color="textSecondary">
                  122 Pattom
                </Typography>
              </div>
            </div>
            <div></div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
