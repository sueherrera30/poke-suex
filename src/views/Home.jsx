import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch'; 

const Home = () => {
  const pokeApi = 'https://pokeapi.co/api/v2/pokemon?offset=110&limit=200';
  const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  const fetchedPokemons = useFetch(pokeApi, {});


  if (!fetchedPokemons.response) {
    return <p>poke suex is searching for results ...</p>
  }
  const { results: pokemons } = fetchedPokemons.response;
  return (
    <>
        {
          pokemons.map(pokemon => {
            const splittedUrl = pokemon.url.split('/');
            const pokemonId = splittedUrl[splittedUrl.length - 2];
          
            return (
              <Link to={`/pokemon/${pokemonId}`}>
              <div key={pokemonId}>
                <div>{pokemon.name}</div>
                <img alt="img" src={`${urlImg}/${pokemonId}.png`} />
              </div>
            </Link>   
            )  
          })
        }
    </>
  );
}

export default Home;