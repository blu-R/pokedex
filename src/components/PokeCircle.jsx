import React from "react";

import "./PokeCircle.styles.css";

function PokeCircle({ left, top, right, bottom }) {
    return (
        <div
            className="poke-circle"
            style={{
                top: `${top}`,
                right: `${right}`,
                left: `${left}`,
                bottom: `${bottom}`,
            }}
        >
            <div className="outer-circle">
                <div className="inner-circle"></div>
            </div>
        </div>
    );
}

export default PokeCircle;
