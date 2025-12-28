import React from 'react'
import Header from '../../Components/Header'
import InputGroup from 'react-bootstrap/InputGroup';
import { Typography } from '@mui/material'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaSearch } from "react-icons/fa";
import { Container } from 'react-bootstrap';
const Gymworkout = () => {
  return (
    <>
          <div className="blur-navbar">
        <Header />
      </div>
      <Container style={{ paddingTop: "120px" }}>
 <Typography variant="h4" className='fw-5' >GYM WORKOUTS</Typography>

       
     <InputGroup className="mb-3 mt-3">
    <InputGroup.Text><FaSearch /></InputGroup.Text>
    <Form.Control placeholder="Search for Products .." />
    <Button variant="dark">Search</Button>
  </InputGroup>
          <div className='d-flex justify-content-between mt-5'>
             <Button variant="outline-dark">Chest</Button>
        <Button variant="outline-dark">Biceps</Button>
          <Button variant="outline-dark">Forearms</Button>
         <Button variant="outline-dark">Shoulder</Button>
       <Button variant="outline-dark">Warm up</Button>
         <Button variant="outline-dark">Wings</Button>
       <Button variant="outline-dark">Abs</Button>
      <Button variant="outline-dark">Leg</Button>
          </div>
      </Container>
      
    </>
  )
}

export default Gymworkout