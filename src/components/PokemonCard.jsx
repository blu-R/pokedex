import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import PokemonInfo from "./PokemonInfo";

import "./PokemonCard.styles.css";

function PokemonCard({ id, url }) {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState({});
    // console.log(pokemon);

    useEffect(() => {
        axios.get(url).then((res) => setPokemon(res.data));
    }, [url]);
    // const pokemon = useSelector((state) => state.pokemons[id]);
    // console.log(url);

    return (
        <div className="card-container">
            <div
                className={`card-pokemon ${pokemon.types?.[0].type.name}-gr `}
                onClick={() => navigate(`/pokedex/${pokemon.id}`)}
            >
                <div className="info">
                    <img
                        src={
                            pokemon.sprites?.other["official-artwork"]
                                .front_default
                        }
                    />
                    <h1>{pokemon.name}</h1>
                    <p className="types">
                        {pokemon.types?.[0].type.name}{" "}
                        {pokemon.types?.[1] &&
                            ` / ${pokemon.types?.[1]?.type.name}`}
                        {pokemon.types?.[2] &&
                            ` / ${pokemon.types?.[2]?.type.name}`}
                    </p>
                    <p className="lbl-type">Type</p>
                </div>
                <div className="br"></div>
                <div className="stats">
                    <div>
                        <p className="lbl-stat">HP</p>
                        <p className="hp">{pokemon.stats?.[0].base_stat}</p>
                    </div>
                    <div>
                        <p className="lbl-stat">Attack</p>
                        <p className="attack">{pokemon.stats?.[1].base_stat}</p>
                    </div>
                    <div>
                        <p className="lbl-stat">Defense</p>
                        <p className="defense">
                            {pokemon.stats?.[2].base_stat}
                        </p>
                    </div>
                    <div>
                        <p className="lbl-stat">Speed</p>
                        <p className="speed">{pokemon.stats?.[5].base_stat}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;
