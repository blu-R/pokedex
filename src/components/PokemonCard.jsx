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
        <div
            className="card-pokemon"
            onClick={() => navigate(`/pokedex/${pokemon.id}`)}
        >
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.other.dream_world.front_default} />
            <p>{url}</p>
        </div>
    );
}

export default PokemonCard;
