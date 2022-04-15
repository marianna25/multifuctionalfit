import React from "react";
import rack from "../../assets/img/rack-movil.png"
import paralelas from "../../assets/img/mini-paralelas.png"
import barra from "../../assets/img/barra-pullups.png"
import banca from "../../assets/img/banca.png";

export const SomeProducts = () => {

    return (

        <div id="some-products" className="section">
            <h2 className="titulo">Algunos Productos</h2>
            <div className="container">

                <div className="products-content">
                    <img src={rack} alt="foto" />
                    <img src={paralelas} alt="foto" />
                    <img src={barra} alt="foto" />
                    <img src={banca} alt="foto" />
                </div>
            </div>
        </div>

    );

}