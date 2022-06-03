import React from "react";

import "./Footer.styles.css";
import PokeCircle from "./PokeCircle";

function Footer() {
    return (
        <div className="footer">
            <PokeCircle left="46vw" bottom="0px" right="" />
            <div className="top"></div>
            <div className="bottom"></div>
        </div>
    );
}

export default Footer;
