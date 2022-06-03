import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./PokemonInfo.styles.css";

function PokemonInfo() {
    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then((res) => setPokemon(res.data));
    }, []);

    return (
        <div className="poke-body">
            <div className="poke-container">
                <div className="pokemon-card">
                    <div
                        className={`background ${pokemon.types?.[0].type.name}-grd`}
                    ></div>
                    <div className="poke-info">
                        <img
                            src={
                                pokemon.sprites?.other.dream_world.front_default
                            }
                        />
                        <p className="id">#{pokemon.id}</p>
                        <div className="poke-name">
                            <div className="poke-br"></div>
                            <p>{pokemon.name}</p>
                        </div>
                        <div className="stats-1">
                            <div>
                                <span>Weight</span>
                                <p>{pokemon.weight}</p>
                            </div>
                            <div>
                                <span>Height</span>
                                <p>{pokemon.height}</p>
                            </div>
                        </div>
                        <div className="stats-2">
                            <div className="stat-section">
                                <span>Type</span>
                                <div className="poke-type">
                                    {pokemon.types?.map((type, index) => (
                                        <p
                                            key={index}
                                            className={type.type.name}
                                        >
                                            {type.type.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="stat-section">
                                <span>Abilities</span>
                                <div className="poke-ability">
                                    {pokemon.abilities?.map(
                                        (ability, index) => (
                                            <p key={index}>
                                                {ability.ability.name}
                                            </p>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="poke-stats">
                        <div className="title">
                            <span>Stats</span>
                            <div className="stats-br"></div>
                            <img
                                src="../src/assets/images/ball-white-l.png"
                                alt=""
                            />
                        </div>
                        <div className="bars">
                            <div className="poke-hp">
                                <p>HP</p>
                                <span>{pokemon.stats?.[0].base_stat}/150</span>
                            </div>
                            <div className="bar-container">
                                <div
                                    className="bar-hp"
                                    style={{
                                        width: `${pokemon.stats?.[0].base_stat}%`,
                                    }}
                                ></div>
                            </div>
                            <div className="poke-attack">
                                <p>Attack</p>
                                <span>{pokemon.stats?.[1].base_stat}/150</span>
                            </div>
                            <div className="bar-container">
                                <div
                                    className="bar-attack"
                                    style={{
                                        width: `${pokemon.stats?.[1].base_stat}%`,
                                    }}
                                ></div>
                            </div>
                            <div className="poke-defense">
                                <p>Defense</p>
                                <span>{pokemon.stats?.[2].base_stat}/150</span>
                            </div>
                            <div className="bar-container">
                                <div
                                    className="bar-defense"
                                    style={{
                                        width: `${pokemon.stats?.[2].base_stat}%`,
                                    }}
                                ></div>
                            </div>
                            <div className="poke-speed">
                                <p>Speed</p>
                                <span>{pokemon.stats?.[5].base_stat}/150</span>
                            </div>
                            <div className="bar-container">
                                <div
                                    className="bar-speed"
                                    style={{
                                        width: `${pokemon.stats?.[5].base_stat}%`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movements-container">
                    <div className="mov-title">
                        <span>Movements</span>
                        <div className="stats-br"></div>
                        <img
                            src="../src/assets/images/ball-white-l.png"
                            alt=""
                        />
                    </div>
                    <div className="movement-list">
                        {pokemon.moves?.map((move, index) => (
                            <p key={index} className="poke-move">
                                {move.move.name}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonInfo;
