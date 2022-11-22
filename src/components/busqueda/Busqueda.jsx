import React from 'react'
import './busqueda.scss'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../footer/Footer";
const Busqueda = () => {
  return (
    <>
    
    <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              
            </Form>
            
            
            <Footer/>
    </>
    
  )
}
export default Busqueda;