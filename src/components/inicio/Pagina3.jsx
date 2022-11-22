import React from "react";
import logo from "../imagenes.food/pag3.png";
import "../inicio/pagina3.scss";
import letra from "../imagenes.food/letra2.png";
import boton from "../imagenes.food/Button.png";
import { useNavigate } from "react-router-dom";
 const Pagina3 = () => {
    const navigate = useNavigate();
  const pagina4 = () => {
    navigate("/pagina4");
  };
  return (
    <>
    <div className="pagina3">
      <div className="pagina3__logo">
      <button className="boton__logo" >
            <img src={logo} alt="" className="pagina1__logo__img" />
          </button>
      </div>
      <div className="letra__pagina3">
          <img src={letra} alt="" className="pagina2__logo__img" />
        </div>
        <div className="boton__pagina3">
          <button className="boton__logo" onClick={pagina4}>
            <img src={boton} alt="" className="pagina2__logo__img"/>
          </button>
        </div>
    </div>
  </>
  )
}
export default Pagina3;