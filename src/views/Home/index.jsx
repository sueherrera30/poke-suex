import React, { useState, useContext, useEffect } from 'react';

import {
  MainContainer, Name,SearchContainer,
  SearchText, Pokeball, Input, LoadingContainer,
  LoaderContainer,LoadingImg,
} from './components'
import PokemonCard from './components/PokemonCard';
import useFetch from '../../hooks/useFetch'; 
import { Context } from '../../context/index';

const Home = () => {
  const pokeApi = 'https://pokeapi.co/api/v2/pokemon?offset=1&limit=500';
  const pokeBall = '../../../assets/pokebola.png';
  const chemsImg = '../../../assets/cheems.png';
  const loadingTaquito = '../../../assets/eating.JPG'

  const [searchPokemon, setSearchPokemon] = useState('');
  const [favourites, setFavourite] = useState([]);
  const { state ,dispatch } = useContext(Context);
  const { data, loading, after, more } = state;
  const perPage = 6; 


  const fetchedPokemons = useFetch(pokeApi, {});
 
  useEffect(() => {
    dispatch({
      type: 'START',
      payload: {
        ...state,
        data: (fetchedPokemons?.response?.results || [] ).slice(0, perPage),
      },
    });
 }, [fetchedPokemons.response]);

  if (!fetchedPokemons.response) {
    return (
      <MainContainer>
        <LoadingContainer>
          Internet has anxiety - this is loading
          <img alt="img" src={chemsImg} />
        </LoadingContainer>
      </MainContainer>
    )
  }

  const { results: pokemons } = fetchedPokemons.response;

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
      const currentLoadedPokemons = [...state.data, ...newLoadedPokemons]
      console.log('currentLoadedPokemons', currentLoadedPokemons);
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
  
  const handleFavourite = (pokemonSelected, setSwtichImage, swtichImage ) => {
    if(!swtichImage) {
      setSwtichImage(true);
      setFavourite((prevState) => {
        dispatch({
          type: 'FAVOURITES',
          payload: {
          ...state,
          favourites: [...state.favourites, pokemonSelected],
          }
        });
        return [...prevState, {...state.favourites}];
      });
    } 
    else {
      setSwtichImage(false);
      setFavourite((prevState) => {
        let saved = [...state.favourites];
        const leftPokemons = saved.filter(fav => fav !== pokemonSelected);
        dispatch({
          type: 'FAVOURITES',
          payload: {
          ...state,
          favourites: leftPokemons,
          }
        });
        return [...prevState, {...state.favourites}];
      });
    }
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
            searchResults.map((pokemon, index) => {
              const splittedUrl = pokemon.url.split('/');
              const pokemonId = splittedUrl[splittedUrl.length - 2];
              return (
                <PokemonCard
                  id={pokemonId}
                  key={index}
                  pokemonSelected={pokemon}
                  handleFavourite={handleFavourite}
                  heartState={false}
                />
              )
            })
          }
          {
             loading &&
             <LoaderContainer>
              <LoadingImg src={loadingTaquito} alt="taquito-image" />
              <Name>Looking for more pokemons, take a taquito for a while... </Name>
             </LoaderContainer>
          }       
          {
            (!loading && more) && <LoaderContainer>
            <button onClick={handleMorePokemons}>Load more pokemons</button>
            </ LoaderContainer>
          }
      </MainContainer>
    </>
  );
}

export default Home;
