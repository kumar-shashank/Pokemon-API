import React from 'react';
import typeColors from '../../helpers/typeColors'
import './style.css';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>



            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>

 <div className="Card__data Card__data--weight">
                    <p className="title">XP</p>
                    <p>{pokemon.base_experience}</p>
                </div>

                <div className="Card__data Card__data--ability">
                    <p className="title">Powers</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Attack</p>
                    <p>{pokemon.moves[0].move.name}</p>
                </div>

  <div className="Card__data Card__data--ability">
                    <p className="title">Stats</p>
                    <p>{pokemon.stats[0].base_stat}</p>
                </div>

            </div>
        </div>
    );
}

export default Card;
