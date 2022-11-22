import React from "react";
import Card from "../card/Card";
import Carrucel from "../carrucel/Carrucel";
import Footer from "../footer/Footer";
import "./home.scss";
import descuento1 from '../imagenes.food/descuento1.PNG'
import descuento2 from '../imagenes.food/descuento2.png'
import descuento3 from '../imagenes.food/descuento3.png'
const Home = () => {
  return (
    <>
    
      <div className="home">
        <div className="descuentos__home">
<img src={descuento2} alt=""  className="img__descuento1"/>
<img src={descuento1} alt=""  className="img__descuento2"/>
<img src={descuento3} alt=""  className="img__descuento3"/>
        </div>
<Carrucel/>
        <Card />
      

      </div>
      
      <Footer />
    </>
  );
};
export default Home;
