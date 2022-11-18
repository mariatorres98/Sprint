import React from "react";
import './footer.scss'
import { useNavigate} from "react-router-dom";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const busqueda = () => {
    navigate("/busqueda");
  };
  const perfil = () => {
    navigate("/perfil");
  };
  const pedidos = () => {
    navigate("/pedidos");
  };
  return (
    <div className="footer">
      <button className="footer__boton">
        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845022.png"
          alt=""
          className="footer__icono"
        />
         <NavLink to="/home">•</NavLink>
      </button>
      <button className="footer__boton" onClick={busqueda}> 
        <img
          src="https://cdn-icons-png.flaticon.com/512/2618/2618254.png"
          alt=""
          className="footer__icono"
        />
      </button>
      <button className="footer__boton" onClick={pedidos}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/66/66162.png"
          alt=""
          className="footer__icono"
        />
      </button>
      <button className="footer__boton" onClick={perfil}>
        <img src="https://cdn-icons-png.flaticon.com/512/456/456283.png" alt="" className="footer__icono"/>
      </button>
    </div>
  );
};

export default Footer;
