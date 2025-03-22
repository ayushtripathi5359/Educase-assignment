import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "./Styling.css";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const { state } = useLocation();

  return (
    <div className='screen border-bottom pb-3'>
      <h4 className='p-3' style={{ backgroundColor: "white" }}>Account Settings</h4>
        <div className='border-bottom border-gray-900 border-4 pb-3'>
      <Container>
        <Row className="align-items-center mt-4 mb-4 ">
          <Col xs={12} md={4} className="text-left">
            <div className="position-relative d-inline-block">
              <Image src="Ellipse.png" roundedCircle className="profile-image" />
              <Image src="Group.png" roundedCircle className="logo position-absolute bottom-0 end-0" />
            </div>
          </Col>
          <Col xs={12} md={8} className="text-md-start text-left ps-md-3 ps-2">
            <h5 className='profName'>{state ? state.name : "Marry Doe"}</h5>
            <p className='profid'>{state ? state.email : "Marry@Gmail.com"}</p>
          </Col>
        </Row>
        <p className="text-md-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti maiores sit quos voluptate itaque.
        </p>
      </Container>
        </div>
    </div>
  );
};

export default Profile;