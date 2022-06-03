import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import PokemonCard from "./PokemonCard";
import "./Pokedex.styles.css";

function Pokedex() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector((state) => state.userName);
    const [pokemonsUrl, setPokemonsUrl] = useState([]);
    const [characterSearch, setCharacterSearch] = useState("");
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
            .then((res) => setPokemonsUrl(res.data.results));

        axios
            .get("https://pokeapi.co/api/v2/type/")
            .then((res) => setTypes(res.data.results));
    }, []);
    // const pokemons = useSelector((state) => state.pokemons);
    // console.log(pokemons);

    const [page, setPage] = useState(1);

    const pokemonPerPage = useSelector((state) => state.config.pokemonsPerPage);
    const lastIndex = pokemonPerPage * page;
    const firstIndex = lastIndex - pokemonPerPage;
    const pokemonPaginated = pokemonsUrl.slice(firstIndex, lastIndex);

    const lastPage = Math.ceil(pokemonsUrl.length / pokemonPerPage);

    const numbers = [];

    for (let i = 1; i <= lastPage; i++) {
        if (i < page + 3 && i > page - 3) {
            numbers.push(i);
        }
    }

    const filterCharacters = (e) => {
        if (e.target.value === "all") {
            axios
                .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
                .then((res) => setPokemonsUrl(res.data.results));
        } else {
            axios
                .get(e.target.value)
                .then((res) => setPokemonsUrl(res.data.pokemon));
        }
        setPage(1);
    };

    return (
        <div className="pokedex">
            <div className="body">
                <p className="greeting">
                    <strong>Welcome {userName},</strong> here you can find your
                    favorite pokemon
                </p>
                <div className="selectors">
                    <div className="search-box-main">
                        <input
                            type="text"
                            value={characterSearch}
                            onChange={(e) => setCharacterSearch(e.target.value)}
                            placeholder="Search pokémon"
                        />
                        <button
                            onClick={() => {
                                navigate(`/pokedex/${characterSearch}`);
                                // console.log(characterSearch);
                            }}
                        >
                            Search
                        </button>
                    </div>
                    <select onChange={filterCharacters}>
                        <option value="all">All pokémons</option>
                        {types.map((type, index) => (
                            <option key={index} value={type.url}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                    <i
                        className="fa-solid fa-gear"
                        onClick={() => navigate("/config")}
                    ></i>
                </div>
                <div className="pokemon-list">
                    {pokemonPaginated.map((pokemon, index) => (
                        <PokemonCard
                            key={index}
                            id={index}
                            // url={pokemon.url}
                            url={
                                pokemon.url !== undefined
                                    ? pokemon.url
                                    : pokemon.pokemon.url
                            }
                        />
                    ))}
                </div>
                <div className="pagination">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                    >
                        Prev
                    </button>
                    {numbers.map((number, index) => (
                        <button
                            className="btn-pages"
                            onClick={() => setPage(number)}
                            key={index}
                        >
                            {number}
                        </button>
                    ))}
                    <button
                        disabled={page === lastPage}
                        onClick={() => setPage(page + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pokedex;
