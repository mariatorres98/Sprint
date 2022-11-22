import React from 'react'
import Footer from '../footer/Footer';
import './restaurantes.scss'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

const Restaurantes = () => {
  const {pintarlocales}=useParams();
  const {locales} = useSelector((store) => store.locales);
  console.log(locales[pintarlocales].data)
  return (
    <>
     <div className='card__superior__contenedor'>
      <div className='card__superior'>
        <img src={locales[pintarlocales].data.logo} alt="" className='logo__restaurante' />
        <div className='card__inferior'>
          <img src={locales[pintarlocales].data.imagen} alt="" className='producto__restaurante'/>
          <div>
            <div>{locales[pintarlocales].data.name}</div>
            <div>{locales[pintarlocales].data.descripcion}</div>
            <div className='card__super__inferior'>
              <img src={locales[pintarlocales].data.calificacion} alt="" className='calificacion'/>
              <div>{locales[pintarlocales].data.tiempo}</div>
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