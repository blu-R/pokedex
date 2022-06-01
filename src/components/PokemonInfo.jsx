import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonInfo() {
    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then((res) => setPokemon(res.data));
    }, []);

    return (
        <div>
            <div className="pokemon-card">
                {pokemon.name} {id}
            </div>
            <div className="pokemon-movements">Movements</div>
        </div>
    );
}

export default PokemonInfo;
