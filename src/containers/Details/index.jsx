import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch'; 

const Details = () => {
    const { id } = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
    const chemsImg = '../../../assets/cheems.png';

    const pokemonData = useFetch(url, {});
    
    const { response } = pokemonData;
    if (!response) {
        return <>
        <h1>Sorry, I'm broke, internet is having anxiety</h1>
        <img alt="img" src={chemsImg} />
        <Link to="/">
             BACK
        </Link>
    </>
    }
  return (
    <div>
        <Link to="/">
             BACK
        </Link>
        <h1>details</h1>
        <p>name: {response.name}</p>
        <h3>Abilities: </h3>
        <ul>
            {
                response.abilities.map(ability => (
                    <li key={ability.ability.name}>
                        {ability.ability.name}
                    </li>
                ))
            }
        </ul>
        <h3>Forms: </h3>
        <ul>
            {
                response.forms.map(form => (
                    <li key={form.name}>
                        {form.name}
                    </li>
                ))
            }
        </ul>
        <h3>Species: </h3>
        <p>{response.species.name}</p>
        <h3>sprites: </h3>
        <div>
            <img alt="img" src={response.sprites.front_default} />
            <img alt="img" src={response.sprites.back_shiny} />
        </div>
        <img alt="img" src={`${urlImg}/${id}.png`} />
    </div>
  );
}

Details.propTypes = {
    informationUrl: PropTypes.string.isRequired
  };
export default Details;