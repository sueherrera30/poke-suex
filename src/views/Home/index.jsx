import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  MainContainer, PokemonImgContainer,
  PokemonImg, Name, PokemonContainer,
  SearchContainer, SearchText, Pokeball,
  Input, ErrorContainer,
} from './components'
import useFetch from '../../hooks/useFetch'; 

const Home = () => {
  const pokeApi = 'https://pokeapi.co/api/v2/pokemon?offset=1&limit=500';
  const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  const pokeBall = '../../../assets/pokebola.png';
  const chemsImg = '../../../assets/cheems.png';

  
  const [searchPokemon, setSearchPokemon] = useState('');
  let currentPokemons;
  const perPage = 9;
  const fetchedPokemons = useFetch(pokeApi, {});

  if (!fetchedPokemons.response) {
    return (
      <MainContainer>
        <ErrorContainer>
          <h1>Internet is having anxiety</h1>
          <img alt="img" src={chemsImg} />
        </ErrorContainer>
      </MainContainer>
    )
  }

  const { results: pokemons } = fetchedPokemons.response;

  currentPokemons = pokemons.slice(0, perPage);

  const searchResults = !searchPokemon
    ? currentPokemons
    : pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase()))
  

  const handleSerchingPokemon = event => {
    setSearchPokemon(event.target.value);
  };

  return (
    <>
      <SearchContainer>
      <SearchText className="animate__animated animate__swing">
        Find a pokemon 
        <Pokeball alt="pokeball" src={pokeBall} />
      </SearchText>
      <Input
          type="text"
          placeholder="Write its name here"
          value={searchPokemon}
          onChange={handleSerchingPokemon}
      />
    </SearchContainer>
      <MainContainer>
          {
            searchResults.map(pokemon => {
              const splittedUrl = pokemon.url.split('/');
              const pokemonId = splittedUrl[splittedUrl.length - 2];
              return (
                <PokemonContainer key={pokemonId}>
                  <Link to={`/pokemon/${pokemonId}`}>
                    <PokemonImgContainer>
                      <PokemonImg alt="img" src={`${urlImg}/${pokemonId}.png`} />
                    </PokemonImgContainer>
                    <Name>{pokemon.name}</Name>
                  </Link>   
                </PokemonContainer>
              )  
            })
          }
      </MainContainer>
    </>
  );
}

export default Home;