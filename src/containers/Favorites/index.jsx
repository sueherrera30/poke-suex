import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch'; 

const Favorites = () => {
    const { id } = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
    const chemsImg = '../../../assets/cheems.png';

    const pokemonData = useFetch(url, {});
    const { response } = pokemonData;
    if (!response) {
        return <>
        <h1>Sorry, I'm broken, internet is having anxiety</h1>
        <img alt="img" src={chemsImg} />
        <Link to="/">HOME</Link>
    </>
    }
  return (
    <div>
        <Link to="/">HOME</Link>
        
    </div>
  );
}

Favorites.propTypes = {
    informationUrl: PropTypes.string.isRequired
  };
export default Favorites;