import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container>
        
        <Link to="/" className="navbar-brand">
          Gym Track
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-5 align-items-center fw-bold">
            <Link className="nav-link ms-5 fw-bold" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/about">
              About
            </Link>

            <Link className="nav-link" to="/shop">
              Shop
            </Link>

            <NavDropdown title="Workout" id="workout-dropdown">
              <NavDropdown.Item as={Link} to="/gymworkout">
                Gym Workout
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/homework">
                Home Workout
              </NavDropdown.Item>
            </NavDropdown>

            <Link className="nav-link" to="/nutrition">
              Nutritions
            </Link>

            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav>

          {/* Login Button */}
          <Link to="/login">
            <Button variant="outline-light" className="ms-3">
              Login
            </Button>
          </Link>
          

          {/* Profile Image */}
          <div
            className="bg-center bg-no-repeat bg-cover rounded-circle ms-3"
            style={{
              width: "40px",
              height: "40px",
              backgroundImage:
                'url("https://png.pngtree.com/thumb_back/fh260/background/20250606/pngtree-aesthetic-profile-photo-of-asian-girl-with-closed-eyes-and-side-image_17396221.jpg")',
            }}
          ></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
