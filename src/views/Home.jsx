import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch'; 

const Home = () => {
  const pokeApi = 'https://pokeapi.co/api/v2/pokemon?offset=110&limit=5';
  const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  const fetchedPokemons = useFetch(pokeApi, {});
  const [searchPokemon, setSearchPokemon] = useState('');


  if (!fetchedPokemons.response) {
    return <p>poke suex is searching for results ...</p>
  }
  const { results: pokemons } = fetchedPokemons.response;

  console.log('pokemons', pokemons);

  const handleSerchingPokemon = event => {
    setSearchPokemon(event.target.value);
  };

  const searchResults = !searchPokemon
    ? pokemons
    : pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase()))

  return (
    <>
        <input
          type="text"
          placeholder="Search"
          value={searchPokemon}
          onChange={handleSerchingPokemon}
        />
        {
          searchResults.map(pokemon => {
            const splittedUrl = pokemon.url.split('/');
            const pokemonId = splittedUrl[splittedUrl.length - 2];
            return (
              <div>
                <Link to={`/pokemon/${pokemonId}`}>
                  <div key={pokemonId}>
                    <div>{pokemon.name}</div>
                    <img alt="img" src={`${urlImg}/${pokemonId}.png`} />
                  </div>
                </Link>   
              </div>
            )  
          })
        }
    </>
  );
}

export default Home;