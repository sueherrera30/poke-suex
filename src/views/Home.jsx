import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch'; 

const Home = () => {
  const pokeApi = 'https://pokeapi.co/api/v2/pokemon?offset=110&limit=200';

  const fetchedPokemons = useFetch(pokeApi, {});
  if (!fetchedPokemons.response) {
    return <p>poke suex is searching for results ...</p>
  }

  console.log('poke dataaaaaa:', fetchedPokemons);
  const { results: pokemons } = fetchedPokemons.response 
  console.log('pokemons:', pokemons );

  return (
    <>
        {
          pokemons.map(pokemon => (
            <Link to='/pokemon'>
              <div>
                <div>{pokemon.name}</div>
              </div>
            </Link>
            
          ))
        }
    </>
  );
}

export default Home;