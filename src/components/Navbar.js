import React from "react";
import { Link } from "react-scroll";
import logo from '../assets/img/logo-negro.jpg'

export const NavBar = () => {

    return (
        <>
            <div className="header">
                <nav className="navbar">

                    <Link className="logo"
                        to="start"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <img src={logo} alt='logo' />
                    </Link>

                    <ul className="navbar-options">
                        <li className="nav-item">
                            <Link

                                to="start"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Inicio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link

                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Conozcanos
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link

                                to="some-products"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Productos
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link

                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Contacto
                            </Link>
                        </li>

                    </ul>

                </nav>
            </div>
        </>
    );

}