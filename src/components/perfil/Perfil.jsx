import React from 'react'
import './perfil.scss'
import Footer from "../footer/Footer";
import boton from '../imagenes.food/botonSave.png'
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { actionRegisterAsync } from "../../redux/actions/userActions.js";
import { useSelector } from "react-redux";
 const Perfil = () => {
  const userStorage = useSelector((store) => store.user);
 console.log(userStorage)
// const perfiluser=useSelector(store=>store.userStore)
// console.log(perfiluser)
// const dispatch = useDispatch();
// const {userStore} = useSelector((store) => store.userStore);
// useEffect(() => {
//   dispatch(actionRegisterAsync());
// }, [dispatch]);

  return (
    <>
    <div className='contenedor__perfil'>
    {/* {
      userStore && userStore.length ? (userStore.map((element, index)=>{
          return(
            <div key={index}>

             
              <div className="card__derecha">
                <p>{element.data.name}</p>
              </div>
              
            </div>
          )
        })):(<></>)
        } */}
      <img src="https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png" alt="" className='foto__perfil'/>
      <p>{userStorage.name}</p>
      <form action="" className='formulario__perfil'>
      <input
                  className="imput"
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo"
                />
                <input
                  className="imput"
                  type="text"
                  name="nombre"
                  placeholder="Correo"
                />
                <input
                  className="imput"
                  type="text"
                  name="nombre"
                  placeholder="telefono"
                />
                <input
                  className="imput"
                  type="text"
                  name="nombre"
                  placeholder="URL imagen"
                />
                {/* <select name="select" className="imput">
  <option value="value1">Efectivo</option>
  <option value="value2" selected>Targeta</option>
</select> */}
                <button className='guardar__perfil'>
                <img src={boton} alt="" className='img__boton__perfil'/>
                </button>
      </form>
    </div>
    <Footer/>
    </>
  )
}
export default Perfil;