import React from "react";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";

export const Contact = () => {

    const inst = "https://www.instagram.com/_multifunctionalfit/";

    return (
        
            <div id="contact" className="section">
                <div>
                    <h4>Contactanos</h4>
                    <div  className="info">
                        <p>maorodsanta@gmail.com</p>
                        <p>85527303</p>
                    </div>
                </div>
                <div className="social">
                    <h4>Redes Sociales</h4>
                    <ul className="social-media">
                        <li>
                            <a >
                                <img className="icon" src={facebook} alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href={inst}>
                                <img className="icon" src={instagram} alt="instagram" />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        
    );

}