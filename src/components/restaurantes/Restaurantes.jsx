import React from 'react'
import Footer from '../footer/Footer';
import './restaurantes.scss'

const Restaurantes = () => {
  return (
    <>
     <div className='card__superior__contenedor'>
      <div className='card__superior'>
        <img src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/4/2019/03/0080_t_pizza-logo_1.png" alt="" className='logo__restaurante' />
        <div className='card__inferior'>
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/68/4a/55/getlstd-property-photo.jpg" alt="" className='producto__restaurante'/>
          <div>
            <div>pizzeria</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dolor assumenda nobis dignissimos !</div>
            <div className='card__super__inferior'>
              <img src="https://cdn-icons-png.flaticon.com/512/7372/7372056.png" alt="" className='calificacion'/>
              <div>De 15-20min</div>
            </div>
          </div>
        </div>
      </div>
      </div>
     <Footer/>
    </>
   
  )
}
export default Restaurantes;