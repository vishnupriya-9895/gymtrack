import React from "react";
import Table from "react-bootstrap/Table";
import Selleraside from "../Components/Selleraside";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const SellerOrders = () => {
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
        <h2 style={{ marginBottom: "20px" }}>Orders</h2>

      
    <div style={{  boxShadow: "0 10px 25px rgba(0,0,0,0.08)"}} className="d-flex justify-between gap-5 bg-white mb-5 rounded p-2 pt-3">
        <div>
          <InputGroup style={{ maxWidth: "450px", marginBottom: "20px" }}>
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <Form.Control placeholder="Search for Products..." />
          <Button variant="dark">Search</Button>
        </InputGroup>
      </div>

      
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "25px",
          }}
        >
          <Button variant="outline-dark ">Allorders</Button>
          <Button variant="outline-dark">pending</Button>
          <Button variant="outline-dark">shipped</Button>
          <Button variant="outline-dark">delivered</Button>
       
          
        </div>
    </div>

      
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <Table striped bordered hover responsive>
            <thead style={{ backgroundColor: "#f1f5f9" }}>
              <tr>
                <th>order id</th>
                <th>customer Name</th>
                <th>products</th>
                <th>Status</th>
                  <th>total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                     <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                   <td>@fat</td>
              </tr>
             
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SellerOrders;
