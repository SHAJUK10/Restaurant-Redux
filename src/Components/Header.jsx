import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../Redux/restaurantSlice';

function Header() {
  const dispatch = useDispatch()
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
           
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>FOOD SPOT</Link></Navbar.Brand>
            
            <div className="d-flex align-items-center ms-auto me-2">
            <i className="fas fa-search" style={{ color: "white" }}></i>
            <input
              type="text"
              className='form-control w-100'
              onChange={(e) => dispatch(search(e.target.value))}
              style={{ backgroundColor: 'white', marginLeft: '10px',color:"black" }}
            />
            
          </div>

          <img src="https://p.kindpng.com/picc/s/69-695644_eatfirst-logo-restaurant-delivery-service-logo-hd-png.png"
            height={50}
            width={"100px"}
            // style={{mixBlendMode: 'multiply'}}
            alt="" />



        </Container>
      </Navbar>
    </>
  )
}

export default Header