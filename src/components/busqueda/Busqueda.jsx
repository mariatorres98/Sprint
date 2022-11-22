import React from 'react'
import './busqueda.scss'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../footer/Footer";
import recientes from '../imagenes.food/recientes.png'
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
            <img src={recientes} alt="" className='recientes__busqueda'/>
            
            <Footer/>
    </>
    
  )
}
export default Busqueda;