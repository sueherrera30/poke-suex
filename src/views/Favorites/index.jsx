import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Context } from '../../context/index';
import { LittleImg, Container, stylesLink, MainContainer } from '../Details/components/index';
import PokemonCard from '../Home/components/PokemonCard';

const Favorites = () => {
    const jigglypuff = '../../../assets/jigglypuff.png';

    const { state,  dispatch } = useContext(Context);
    const [swtichImage, setSwtichImage] = useState(true);
    const { favourites } = state;

    // const handleFavourite = (pokemonSelected, setSwtichImage, swtichImage ) => {
    //   if(!swtichImage) {
    //     setSwtichImage(true);
    //     setFavourite((prevState) => {
    //       dispatch({
    //         type: 'FAVOURITES',
    //         payload: {
    //         ...state,
    //         favourites: [...state.favourites, pokemonSelected],
    //         // favourites: state.favourites.includes(pokemonSelected) ? [...state.favourites] : [...state.favourites, pokemonSelected],
    //         }
    //       });
    //       return [...prevState, {...state.favourites}];
    //     });
    //   } 
    //   else {
    //     setSwtichImage(false);
    //     let savedFavourites = [...favourites];
    //     savedFavourites = savedFavourites.filter((pokemonDeleted) => pokemonDeleted.id !== pokemonSelected.id);
    //     setFavourite((prevState) => {
    //       dispatch({
    //         type: 'FAVOURITES',
    //         payload: {
    //         ...state,
    //         favourites: savedFavourites,
    //         }
    //       });
    //       return [...prevState, {...state.favourites}]
    //     });
    //   }   
    // };
    
    const deleteFromFavs = (pokemonSelected, setSwtichImage, swtichImage) => {
      if(swtichImage) {
        setSwtichImage(false);
      } else {
        setSwtichImage(true);
      }
    };

  return (
    <>
    <Link to="/" style={stylesLink}>
        <p>BACK</p>
        <LittleImg alt="back icon" src={jigglypuff}/>
    </Link>
    <Container>
        <MainContainer
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap',
          }}
          >
        {
          favourites.length === 0 ? <h1>Not favs yet, sorry!</h1>
          : favourites.map(pokemon => {
              const splittedUrl = pokemon.url.split('/');
              const pokemonId = splittedUrl[splittedUrl.length - 2];
              return (
                <PokemonCard
                id={pokemonId}
                pokemonSelected={pokemon}
                handleFavourite={deleteFromFavs}
                heartState={true}
              />
              )  
            })
          }
        </MainContainer> 
    </Container>
    </>
  );
}
export default Favorites;