import React from 'react'
import Footer from "../footer/Footer";
import './pedidos.scss'

const PedidosAnteriores = () => {
  return (
    <>
    <div className='contenedor__pedidos'>
      <div>All Orders</div>
      <div className='pedidos__card'>
        <img src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/4/2019/03/0080_t_pizza-logo_1.png" alt="" className='pedidos__logo'/>
        <div>
          <div>pizzeria</div>
          <div>$10</div>
        </div>
        <div> cancelado</div>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}
export default PedidosAnteriores;