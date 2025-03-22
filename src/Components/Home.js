import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./Styling.css";

const Home = () => {
  return (
    <div className='screen d-flex align-items-end'>
    <div className="container">

    <span className='heading'>Welcome to PopX</span>
    <p className='desc'>Lorem ipsum consectetur <br />
     adipisicing elit incidunt</p>

      <Button className='mt-2 mb-2 signupBtn' size="lg">
      <Link style={{color: "white",textDecoration: "none"}} to="/signup">Create account</Link>
      </Button>
      
      <Button className='mb-4 signinBtn' size="lg">
        <Link style={{color: "black", textDecoration: "none"}} to="/signin">Already Registered?Login</Link>
      </Button>

    </div>
    </div>
  )
}

export default Home