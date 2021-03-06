import React from 'react';
import Contador from './Contador';
import {Container, Slides, Thumbnails } from '../styleds/ProductoStyled';
// import { useParams } from "react-router-dom";


const Producto = () => {
    
    // const params = useParams();
    // const { id } = params;

    // const findProducto = datos.find((obj) => obj.id === Number(id));
    // const {imagen, sabor, precio} = findProducto;
  return <div>
    <Container>
        {/* aqui en el slider se pintan todos los productos con informacion  */}
        <Slides>
            <li id="slide1">
                <div>
                    <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474121/Sprint-02/Guappjolota-verde_.png" alt="Producto" />
                    <h1>Guajolota de <br/>verde</h1>
                    <span>$25 MXN</span>
                </div>
            </li>
            
        </Slides>

        <Contador /> <br/>
        <h6 style={{margin: "20px", float: "left"}}>Sabor</h6><br/><br/><br/>
        
        {/* Aqui se pintarian los sabores */}
        <Thumbnails>
                <li>
                    <a href="#slide1"><img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643522517/Sprint-02/Guappjalota1.png" alt="sabor" /></a>
                </li>
            
        </Thumbnails>
    </Container>
  </div>;
};

export default Producto;
