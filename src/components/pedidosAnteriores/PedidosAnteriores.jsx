import React from 'react'
import Footer from "../footer/Footer";
import './pedidos.scss'
import orden1 from '../imagenes.food/orden1.png'
import orden2 from '../imagenes.food/orden2.png'
import orden3 from '../imagenes.food/orden3.png'
const PedidosAnteriores = () => {
  return (
    <>
    <div className='contenedor__pedidos'>
      <div className='titulo__ordenes'>All Orders</div>
      {/* <div className='pedidos__card'>
        <img src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/4/2019/03/0080_t_pizza-logo_1.png" alt="" className='pedidos__logo'/>
        <div>
          <div>pizzeria</div>
          <div>$10</div>
        </div>
        <div> cancelado</div>
      </div> */}
<img src={orden1} alt="" />
<img src={orden2} alt="" />
<img src={orden3} alt="" />
    </div>
    <Footer/>
    </>
    
  )
}
export default PedidosAnteriores;