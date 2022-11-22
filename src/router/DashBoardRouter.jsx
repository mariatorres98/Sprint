import React from 'react'
import Home from '../components/Home/Home'
import { Route, Routes } from "react-router-dom";
import Restaurantes from '../components/restaurantes/Restaurantes';
import Perfil from '../components/perfil/Perfil';
import Busqueda from '../components/busqueda/Busqueda';
import PedidosAnteriores from '../components/pedidosAnteriores/PedidosAnteriores';


const DashBoardRouter = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path="/restaurantes/:pintarlocales" element={<Restaurantes />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/busqueda" element={<Busqueda />} />
        <Route path="/pedidos" element={<PedidosAnteriores />} />


    </Routes>
  )
}

export default DashBoardRouter