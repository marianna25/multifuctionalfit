import React from "react";
import foto from '../../assets/img/foto1.png';

export const About = () => {

    return (

        <div id="about" className="section">
            <div className="container">

                <img src={foto} alt="foto" />
                <div className="about-content">
                    <h2 className="titulo">Sobre Nosotros</h2>
                    <p>Somos una empresa de San Ramón de Alajuela, Costa Rica.
                        Creada en el 2017.</p>
                        <br/>
                    <p>Nos dedicamos a la fabricación de estructuras personalizadas para su lugar de entrenamiento.</p>
                    <br/>
                    <p>Vendemos productos para su centro de entrenamiento o bien su hogar.</p>
                    <br/>
                    <p>Nuestra prioridad es brindar la mejor calidad en nuestros productos y la mayor satisfacción en nuestros clientes.</p>
                </div>
            </div>
        </div>

    );

}