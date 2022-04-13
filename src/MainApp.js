import React from "react";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Info } from "./components/sections/Info";
import { SomeProducts } from "./components/sections/SomeProducts";
import { Start } from "./components/sections/Start";
import { Video } from "./components/sections/Video";

const MainApp = () => {
    return (
        <div className="content">
            <NavBar />
            <Start />
            <Info />
            <About />
            <Video />
            <SomeProducts />
            <Contact />
            <Footer />
        </div>
    )
}

export default MainApp;