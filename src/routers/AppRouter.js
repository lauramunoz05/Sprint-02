import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {InfoProducto} from '../components/InfoProducto';
import Carrito from '../components/Carrito';
import Home from '../components/Home';
import Login from "../components/Login";
import Registro from "../components/Registro";
import Pago from '../components/Pago';
import Search from '../components/Search';


const AppRouter = () => {
  return <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/info-producto" element={<InfoProducto />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/pagar" element={<Pago /> } />
            <Route path="*" element={<Navigate to="/" />}/>

        </Routes>
      </BrowserRouter>
  </div>;
};

export default AppRouter;
