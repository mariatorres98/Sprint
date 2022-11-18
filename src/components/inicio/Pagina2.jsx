import React from "react";
import logo from "../imagenes.food/pag2.png";
import letra from "../imagenes.food/letra1.png";
import boton from "../imagenes.food/Button.png";
import "../inicio/pagina2.scss";
import { useNavigate, Link } from "react-router-dom";
const Pagina2 = () => {
  const navigate = useNavigate();
  const pagina3 = () => {
    navigate("/pagina3");
  };
  return (
    <>
      <div className="pagina2">
        <div className="pagina2__logo">
          <button className="boton__logo" >
            <img src={logo} alt="" className="pagina2__logo__img" />
          </button>
        </div>
        <div className="letra__pagina2">
          <img src={letra} alt="" className="pagina2__logo__img" />
        </div>
        <div className="boton__pagina2">
          <button className="boton__logo" onClick={pagina3}>
            <img src={boton} alt="" className="pagina2__logo__img"/>
          </button>
        </div>
      </div>
    </>
  );
};
export default Pagina2;
