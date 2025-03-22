import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "./Styling.css";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("email").value
  const pass = document.getElementById("email").value
  

  if(!name){
    alert("Please Enter the Full name")
    return
  } else if(!email) {
    alert("Please Enter the correct Email address")
    return
  } else if(!phone) {
    alert("Please Enter Phone No")
    return
  } else if(!pass) {
    alert("Please Enter the password")
    return
  }
    navigate('/profile', {state: {
      name, email
    }});
  }

  return (
    <div className='screen d-flex'>
    <div className="container d-flex flex-column">

      <h1 className='heading mt-4'>
        Create your <br /> PopX account
      </h1>


<div className="labelContainer position-relative mt-4">
      <label className="px-2" htmlFor="FullName">Full Name<span className='req'>*</span></label>
      <Col sm="14">
        <Form.Control id='name' required className='inp' type="text" placeholder="Full Name" />
      </Col>
</div>
<div className="labelContainer position-relative mt-4">
      <label className='px-2' htmlFor="PhoneNo">Phone number<span className='req'>*</span></label>
      <Col sm="14">
        <Form.Control id='phone' required className='inp number' type="number" placeholder="Enter phone number" />
      </Col>
      </div>
      <div className="labelContainer position-relative mt-4">
      <label className="px-2" htmlFor="email">Email Address<span className='req'>*</span></label>
      <Col sm="14">
        <Form.Control id='email' required className='inp' type="email" placeholder="Enter email address" />
      </Col>
      </div>
      <div className="labelContainer position-relative mt-4">
      <label className='px-2' htmlFor="password">Password<span className='req'>*</span></label>
      <Col sm="14">
        <Form.Control id='pass' required className='inp' type="password" placeholder="Enter password" />
      </Col>
      </div>
      <div className="labelContainer position-relative mt-4">
      <label className='px-2' htmlFor="companyName">Company name</label>
      <Col sm="14">
        <Form.Control className='inp' type="text" placeholder="Enter company name" />
      </Col>
      </div>


      <label className='mt-4' htmlFor="agency">Are you an Agency?<span className='req'>*</span></label>
      <br />
      <div className="">
      <Form.Check required inline label="Yes" name="group1" type="radio" id='inline-radio-1' />
      <Form.Check required inline label="No" name="group1" type="radio" id='inline-radio-2' />
      </div>


      <div className="mt-auto mb-4 gap-2">
        <Button type='submit' className='signupBtn' size="lg" onClick={handleSubmit}
        >Create Account
        </Button>
      </div>
    </div>
    </div>
  )
}

export default Signup