import React from "react";
import "./card.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLocalesAsync } from "../../redux/actions/localesAction";
import { useNavigate} from "react-router-dom";

const Card = () => {

  const dispatch = useDispatch();

  const {locales} = useSelector((store) => store.locales);
  console.log(locales)

  useEffect(() => {
    dispatch(getLocalesAsync());
  }, [dispatch]);


  const navigate = useNavigate();
  
  const restaurantes = (indice) => {
    navigate(`/restaurantes/${indice}`);
  };
  return (
    <>
    
      <div className="pintar__restaurantes">{
      locales && locales.length ? (locales.map((element, index)=>{
          return(
            <div key={index}>
              <div className="card__restaurante" onClick={()=>restaurantes(index)} >
              <img
                src={element.data.imagen}
                alt=""
                className="restaurante"
              />

              <div className="card__derecha">
                <p>{element.data.name}</p>
                <img
                  src={element.data.calificacion}
                  alt=""
                  className="calificacion"
                />
                <p>{element.data.horario}</p>
                <p>Desde {element.data.precio}$</p>
              </div>
              </div>
            </div>
          )
        })):(<></>)
        }

      </div>
    
    
    </>
  );
};
export default Card;

