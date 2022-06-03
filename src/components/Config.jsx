import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPokemonsQuantity } from "../store/slices/config.slice";

import "./Config.styles.css";

function Config() {
    const [quantity, setQuantity] = useState(0);

    const pokemonsPerPage = useSelector(
        (state) => state.config.pokemonsPerPage
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const setPokemons = () => {
        if (quantity) {
            dispatch(setPokemonsQuantity(quantity));
            navigate("/pokedex");
        }
    };

    return (
        <div className="config-container">
            <h1>Settings</h1>
            <p>
                <i className="fa-solid fa-circle-arrow-right"></i>Set number of
                pokémons per page
            </p>
            <span>Current value: {pokemonsPerPage}</span>
            <div className="config-input">
                <input
                    type="text"
                    placeholder="Enter new number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button onClick={setPokemons}>Set</button>
            </div>
        </div>
    );
}

export default Config;
