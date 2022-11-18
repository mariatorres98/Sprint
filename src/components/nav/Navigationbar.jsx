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
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {isAuthentication ? (
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to="/home" className="boton__home" >Home</NavLink>
                <button className="boton__logout" onClick={logOut}>Logout</button>
              </Nav>
            ) : (
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to="/" className="crear__cuenta">Login</NavLink>
                <NavLink to="/register" className="crear__cuenta">Register</NavLink>
              </Nav>
            )}

            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
