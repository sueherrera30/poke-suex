import React, { useState, useReducer, useEffect, createContext } from 'react';
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
  const perPage = 6;
  const fetchedPokemons = useFetch(pokeApi, {});
  let currentPokemons;

  
  const reducer = (state, action) => {
    switch(action.type){
      case 'START':
      return {...state,  ...action.payload}
      case 'LOADED':
         return {...state,  ...action.payload}
      default: 
        throw new Error('internet is broken')
    }
  }
  
  const [state, dispatch ] = useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: perPage,
  })

  const { data, loading, after, more } = state;

//   const { results: pokemons } = fetchedPokemons.response;
//   currentPokemons = pokemons.slice( 0, perPage);

//   useEffect(() => {
//     dispatch({
//       type: 'START',
//       payload: {
//         ...state,
//         data: currentPokemons,
//       },
//     });
//  }, []);
 
  if (!fetchedPokemons.response) {
    return (
      <MainContainer>
        <ErrorContainer>
          Internet is having anxiety
          <img alt="img" src={chemsImg} />
        </ErrorContainer>
      </MainContainer>
    )
  }

  const { results: pokemons } = fetchedPokemons.response;
  currentPokemons = pokemons.slice( 0, perPage);

//   useEffect(() => {
//     dispatch({
//       type: 'START',
//       payload: {
//         ...state,
//         data: currentPokemons,
//       },
//     });
//  }, []);


  const handleMorePokemons = () => {
    dispatch({
      type: 'START',
      payload: {
        ...state,
        loading: true,
      },
    })
    setTimeout(() => {
      const newLoadedPokemons = pokemons.slice(after, after + perPage);
      const currentLoadedPokemons = [...currentPokemons, ...newLoadedPokemons]
      dispatch({
        type: 'LOADED',
        payload: {
          loading: false,
          data: currentLoadedPokemons,
          more: newLoadedPokemons.length === perPage,
          after: state.after + currentLoadedPokemons.length,
        }
      });
    }, 1000);
  };

  const searchResults = !searchPokemon
    ? data
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
          {
             loading && <p>L O A D I N G more little pokemons! </p>
          }
          {
            (!loading && more) && <button onClick={handleMorePokemons}>Load more pokemons</button>
          }
          
      </MainContainer>
    </>
  );
}

export default Home;