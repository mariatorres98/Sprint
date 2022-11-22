import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { actionLogoutAsync } from "../../redux/actions/userActions";
import './navigationbar.scss'
import logo from '../imagenes.food/Play.gif'
import direccion from '../imagenes.food/direccion.png'
import logout from '../imagenes.food/logout.PNG'

const Navigationbar = ({ isAuthentication }) => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(actionLogoutAsync());
  };
  return (
    <Navbar bg="light" expand="md" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="" className="logo__nav"/></Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${"md"}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
              Delivery app
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {isAuthentication ? (
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <img src={direccion} alt="" className="direccion__home"/>
                <button className="boton__logout" onClick={logOut}><img src={logout} alt="" className="img__logout" /></button>
              </Nav>
            ) : (
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to="/" className="crear__cuenta">Login</NavLink>
                
              </Nav>
            )}

            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
