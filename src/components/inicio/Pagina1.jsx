import React from "react";
import logo from "../imagenes.food/logo.png";
import "../inicio/pagina1.scss";
import { useNavigate, Link } from "react-router-dom";
const Pagina1 = () => {
  const navigate = useNavigate();
  const pagina2 = () => {
    navigate("/pagina2");
  };
  return (
    <>
      <div className="pagina1">
        <div className="pagina1__logo">
          <button className="boton__logo" onClick={pagina2}>
            <img src={logo} alt="" className="pagina1__logo__img" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagina1;
