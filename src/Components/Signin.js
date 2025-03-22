import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "./Styling.css";
import { Link } from 'react-router-dom';


const Signin = () => {
  return (
    <div className="screen">
    <div className="container">

      <h1 className="heading py-2 mt-4">
        Signin to your <br /> PopX account
      </h1>
      <p>
        Lorem ipsum dolor sit amet <br />
        adipisicing elit incidunt
      </p>
    <div className="labelContainer position-relative mt-4">
      <label className="px-2" htmlFor="email">Email Address</label>
      <Col sm="14">
        <Form.Control className="inp" type="email" placeholder="Enter email address" />
      </Col>
    </div>
    <div className="labelContainer position-relative mt-4">
      <label className="px-2" htmlFor="password">Password</label>
      <Col sm="14">
        <Form.Control className="inp" type="password" placeholder="Enter password" />
      </Col>
      </div>
      <div className="mt-3">
        <Button className="loginBtn" size="lg">
        <Link style={{color: "white", textDecoration: "none"}} to="/profile">Login</Link>
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Signin;
