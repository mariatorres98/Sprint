import React from "react";
import Card from "../card/Card";
import Carrucel from "../carrucel/Carrucel";
import Footer from "../footer/Footer";
import "./home.scss";

const Home = () => {
  return (
    <>
    
      <div className="home">
<Carrucel/>
        <Card />
      

      </div>
      
      <Footer />
    </>
  );
};
export default Home;
