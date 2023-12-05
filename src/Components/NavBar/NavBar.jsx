import React from 'react';
import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, NavLink} from 'react-router-dom';


function NavBoot() {


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={'/'} ><img src="../../../public/Data/Images/PHOTO-2022-01-23-15-25-32.jpg" alt="Logo" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Nosotros" id="basic-nav-dropdown" className='item' >
              <NavDropdown.Item as={Link} to={'/quehacemos'}>Que hacemos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/trayectoria'}>
                Trayectoria
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/vision'}>Visión</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/mision'}>Misión</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/nuestrafilosofia'}>
                Nuestra filosofía
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={'/proyectos'} className='item'>Proyectos</Nav.Link>
            <Nav.Link as={Link} to={'/propuesta'} className='item'>Nuestra propuesta</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBoot;
