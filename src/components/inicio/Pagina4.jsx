import React from "react";
import logo from "../imagenes.food/pag4.png";
import "../inicio/pagina4.scss";
import letra from "../imagenes.food/letra3.png";
import boton from "../imagenes.food/Button.png";
import { useNavigate } from "react-router-dom";
const Pagina4 = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/");
  };
  return (
    <>
      <div className="pagina4">
        <div className="pagina4__logo">
        <button className="boton__logo" >
            <img src={logo} alt="" className="pagina1__logo__img" />
          </button>
        </div>
        <div className="letra__pagina4">
          <img src={letra} alt="" className="pagina2__logo__img" />
        </div>
        <div className="boton__pagina4">
          <button className="boton__logo" onClick={login}>
            <img src={boton} alt="" className="pagina2__logo__img"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagina4;
