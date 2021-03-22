import React, { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';

import {
  MainContainer, PokemonImgContainer,
  PokemonImg, Name, PokemonContainer,
  SearchContainer, SearchText, Pokeball,
  Input, ErrorContainer, InfoContainer,
  Favourite, FavButton, LoaderContainer,
  LoadingImg,
} from './components'
import useFetch from '../../hooks/useFetch'; 
import { Context } from '../../context/index';

const Home = () => {
  const pokeApi = 'https://pokeapi.co/api/v2/pokemon?offset=1&limit=500';
  const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  const pokeBall = '../../../assets/pokebola.png';
  const chemsImg = '../../../assets/cheems.png';
  const emptyHeart = '../../../assets/like.png';
  const heart = '../../../assets/heart.png'
  const loadingTaquito = '../../../assets/eating.JPG'

  const [searchPokemon, setSearchPokemon] = useState('');
  const [favourites, setFavourite] = useState([]);
  const [favouriteHeartState, setFavouriteHeartState] = useState(false);
  // const [element, setElement] = useState(null);
  const perPage = 6;
  const fetchedPokemons = useFetch(pokeApi, {});
  let currentPokemons;
  
  // const observer = useRef(
  //   new IntersectionObserver(
  //     entries => {
  //       const first = entries[0];
  //       if (first.isIntersecting) {
  //         loader.current();
  //       }
  //     },
  //     { threshold: 1 }
  //   )
  // );

  const { state ,dispatch } = useContext(Context);
  const { data, loading, after, more } = state;


  // const loader = useRef();

  // useEffect(() => {
  //   const currentElement = element;
  //   const currentObserver = observer.current;

  //   if (currentElement) {
  //     currentObserver.observe(currentElement);
  //   }

  //   return () => {
  //     if (currentElement) {
  //       currentObserver.unobserve(currentElement);
  //     }
  //   };
  // }, [element]);

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
  // const { results: pokemons } = fetchedPokemons.response;
  // try {
  //   currentPokemons = pokemons.slice( 0, perPage);
  // } 
  // catch {
  //   console.log('Error in catch')
  // }

  const { results: pokemons } = fetchedPokemons.response;
  currentPokemons = pokemons.slice( 0, perPage);

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

  const handleFavourite = (pokemonSelected) => {
    if(!favouriteHeartState) {
      setFavouriteHeartState(true); 
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
    } else {
      setFavouriteHeartState(false); 
      let savedFavourites = [...favourites];
      savedFavourites = savedFavourites.filter((pokemonDeleted) => pokemonDeleted.id !== pokemonSelected.id);
      setFavourite((prevState) => {
        dispatch({
          type: 'FAVOURITES',
          payload: {
          ...state,
          favourites: savedFavourites,
          }
        });
        return [...prevState, {...state.favourites}]
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
            searchResults.map(pokemon => {
              const splittedUrl = pokemon.url.split('/');
              const pokemonId = splittedUrl[splittedUrl.length - 2];
              return (
                <PokemonContainer key={pokemonId}>
                  <Link to={`/pokemon/${pokemonId}`}>
                    <PokemonImgContainer>
                      <PokemonImg alt="img" src={`${urlImg}/${pokemonId}.png`} />
                    </PokemonImgContainer>
                  </Link>
                  <InfoContainer>
                      <Name>{pokemon.name}</Name>
                      <Tooltip title="ADD TO FAVS" arrow>
                        <FavButton onClick={(e) => handleFavourite(pokemon)} name={pokemon.name}>
                          {
                            !favouriteHeartState 
                            ? <Favourite alt="empty heart" src={emptyHeart} />
                            :  <Favourite alt="heart" src={heart} />
                          } 
                        </FavButton>
                      </Tooltip>
                  </InfoContainer>   
                </PokemonContainer>
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