import React from "react";
import Footer from "../footer/Footer";
import "./restaurantes.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Restaurantes = () => {
  const { pintarlocales } = useParams();
  const { locales } = useSelector((store) => store.locales);
  console.log(locales[pintarlocales].data);
  return (
    <>
      <div className="card__superior__contenedor">
        <div className="card__superior">
          <img
            src={locales[pintarlocales].data.logo}
            alt=""
            className="logo__restaurante"
          />
          <div className="card__inferior">
            <div className="contenedor__imagen__restaurantes">
              <img
                src={locales[pintarlocales].data.imagen}
                alt=""
                className="producto__restaurante"
              />
            </div>

            <div className="contenedor__letra__restaurantes">
              <div>{locales[pintarlocales].data.name}</div>
              <div>{locales[pintarlocales].data.descripcion}</div>
              <div className="card__super__inferior">
                <img
                  src={locales[pintarlocales].data.calificacion}
                  alt=""
                  className="calificacion"
                />
                <div>{locales[pintarlocales].data.tiempo}</div>
              </div>
            </div>
          </div>
        </div>

        <main className="main__productos">
          <div className="contenedor__productos">
            <img
              src={locales[pintarlocales].data.imagenproducto1}
              alt=""
              className="imagen__producto"
            />
            <div>{locales[pintarlocales].data.nameproducto1}</div>
            <div>${locales[pintarlocales].data.precioproducto1}</div>
          </div>
          <div className="contenedor__productos">
            <img
              src={locales[pintarlocales].data.imagenproducto2}
              alt=""
              className="imagen__producto"
            />
            <div>{locales[pintarlocales].data.nameproducto2}</div>
            <div>${locales[pintarlocales].data.precioproducto2}</div>
          </div>
          <div className="contenedor__productos">
            <img
              src={locales[pintarlocales].data.imagenproducto3}
              alt=""
              className="imagen__producto"
            />
            <div>{locales[pintarlocales].data.nameproducto3}</div>
            <div>${locales[pintarlocales].data.precioproducto3}</div>
          </div>
          <div className="contenedor__productos">
            <img
              src={locales[pintarlocales].data.imagenproducto4}
              alt=""
              className="imagen__producto"
            />
            <div>{locales[pintarlocales].data.nameproducto4}</div>
            <div>${locales[pintarlocales].data.precioproducto4}</div>
          </div>
          <div className="contenedor__productos">
            <img
              src={locales[pintarlocales].data.imagenproducto5}
              alt=""
              className="imagen__producto"
            />
            <div>{locales[pintarlocales].data.nameproducto5}</div>
            <div>${locales[pintarlocales].data.precioproducto5}</div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};
export default Restaurantes;
