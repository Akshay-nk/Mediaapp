import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div><Navbar className="bg-black">
    <Container>
      <Navbar.Brand>
        <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>
        <i className="fa-solid fa-play"></i>
        {' '}
        Media Player 
        </Link>
      
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header