import React from 'react';
import logo from '../img/LOGO SIDOPLASMA.png';
import { Navbar,Nav,Form,FormControl,Button,Image } from 'react-bootstrap'
import './navbar.css'
// import kai from '../img/KAI.png';
// import {Navbar}  from 'reeact-bootstrap/Navbar';

// console.log(logo);
const Navibar = () => {
  return (
    
 
    <Navbar className=" uwu" variant="light" expand="lg" sticky="top">
      
      <Navbar.Brand href="/" ><Image   src="" className="imagelogo m-1" fluid ></Image></Navbar.Brand>
      <Image className="sidoplasma" src={logo} />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          
        <Nav className="me-auto p-4 ">
          <Nav.Link href="/" className = "textnavbar" activeClassName="activetextnavbar" exact={true}>Home</Nav.Link>
          <Nav.Link href="/menu1" className = "textnavbar" >PMI</Nav.Link>
          <Nav.Link href="/menu2" className = "textnavbar">RS</Nav.Link>
          <Nav.Link href="/menu4" className = "textnavbar">Laporan</Nav.Link>
          <Nav.Link href="/Tabel1" className = "textnavbar">Tabel</Nav.Link>
          <Nav.Link href="/aboutus" className = "textnavbar">About Us</Nav.Link>
        
        </Nav>
        
          <Form className="d-flex ">
              <div class = "button p-2">
                <Button variant="outline-danger" className="profile" >Profile </Button>
                {/* <Button variant="outline-danger" size = "sm">Sign Up </Button> */}
              </div>
          </Form>
       
      </Navbar.Collapse>
     
    </Navbar>
  )
};

export default Navibar;