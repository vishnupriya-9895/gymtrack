import React from "react";
import Selleraside from "../Components/Selleraside";
import { Button, Form } from "react-bootstrap";

const SellerSettings = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f4f6f8",
      }}
    >
    
      <Selleraside />

      
      <div
        style={{
          flex: 1,
          padding: "30px",
          marginLeft: "240px",
        }}
      >
        <h2 style={{ marginBottom: "25px" }}> Settings</h2>
        <p>mange your company profileand store appernace</p>


       
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "15px",
            marginBottom: "30px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h5 style={{ marginBottom: "20px" }}>Profile Information</h5>
          <p>update your company details andcontact information</p>

         <Form>
  {/* ROW 1 */}
  <div
    style={{
      display: "flex",
      gap: "30px",
      marginBottom: "20px",
    }}
  >
    <Form.Group style={{ flex: 1 }}>
      <Form.Label style={{ fontWeight: "500" }}>
        Seller Name
      </Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter name"
        style={{
          height: "45px",
          borderRadius: "10px",
        }}
      />
    </Form.Group>

    <Form.Group style={{ flex: 1 }}>
      <Form.Label style={{ fontWeight: "500" }}>
        Email Address
      </Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        style={{
          height: "45px",
          borderRadius: "10px",
        }}
      />
    </Form.Group>
  </div>

  {/* ROW 2 */}
  <div
    style={{
      display: "flex",
      gap: "30px",
      marginBottom: "25px",
    }}
  >
    <Form.Group style={{ flex: 1 }}>
      <Form.Label style={{ fontWeight: "500" }}>
        Phone Number
      </Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter phone number"
        style={{
          height: "45px",
          borderRadius: "10px",
        }}
      />
    </Form.Group>

    <Form.Group style={{ flex: 1 }}>
      <Form.Label style={{ fontWeight: "500" }}>
        Business Address
      </Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter business address"
        style={{
          height: "45px",
          borderRadius: "10px",
        }}
      />
    </Form.Group>
  </div>

  {/* BUTTON */}
  <Button
    variant="dark"
    style={{
      padding: "10px 30px",
      borderRadius: "10px",
      fontWeight: "500",
    }}
  >
    Update Profile
  </Button>
</Form>

        </div>

        {/* PASSWORD SETTINGS */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "15px",
            marginBottom: "30px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h5 style={{ marginBottom: "20px" }}>Change Password</h5>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Current Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Button variant="dark">Change Password</Button>
          </Form>
        </div>

        {/* ACCOUNT SETTINGS */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",

          }}
        >
          <h5 style={{ marginBottom: "20px" }}></h5>

     

        

         
 <Button variant="success" className="me-3" >save</Button>
          <Button variant="danger">Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default SellerSettings;
