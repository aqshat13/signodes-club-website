import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import 'animate.css';
import giphy from "../assets/img/giphy.gif"
import TrackVisibility from 'react-on-screen';
import axios from "axios";

export const Regis = () => {
  const [user, setUser]= useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    branch:'',
    sem:'',
    message: ''
   })


   const handleChange=e=>{
    const {name,value}=e.target
    setUser({
      ...user,
      [name]:value
    })

   }

   const register=()=>{
     const{ firstName, lastName, email, phone, branch, sem, message} = user
     if(firstName && lastName && email && phone && branch && sem && message ) {
        
      axios.post("http://localhost:27017/register",user)
      .then(res => alert(res))
    

     }else 
     {
       alert("fill all details")
     }
     
     
     

   }


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={giphy} alt="Contact Us"/>
                
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Register!!</h2>
                <form>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={user.firstName} name="firstName" placeholder="First Name" onChange={handleChange} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastName" value={user.lastName} placeholder="Last Name" onChange={handleChange}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"name="email" value={user.email} placeholder="Email Address" onChange={handleChange} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" value={user.phone} placeholder="Phone No." onChange={handleChange}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="branch" value={user.branch} placeholder="Branch" onChange={handleChange}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="sem"  value={user.sem} placeholder="Semester" onChange={handleChange}/>
                    </Col>
                   <Col size={12} className="px-1">
                      <textarea rows="6" name="message" value={user.message} placeholder="Message" onChange={handleChange}></textarea>
                      <button type="submit" onClick={register}>Register!</button>
                    </Col>

                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
