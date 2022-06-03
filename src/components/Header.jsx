import React from "react";

import "./Header.styles.css";
import PokeCircle from "./PokeCircle";

function Header() {
    return (
        // <div className="container">
        <div className="header">
            <div className="top"></div>
            <div className="bottom"></div>
            <img
                className="logo"
                src="../src/assets/images/logo-l.png"
                alt=""
            />
            <PokeCircle top="75px" right="125px" />
        </div>
        // </div>
    );
}

export default Header;
