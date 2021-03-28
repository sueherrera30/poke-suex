import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context/index';
import { LittleImg, Container, stylesLink, MainContainer, DataInformation } from '../Details/components/index';
import PokemonCard from '../Home/components/PokemonCard';

const Favorites = () => {
    const jigglypuff = '../../../assets/jigglypuff.png';

    const { state,  dispatch } = useContext(Context);
    const { favourites } = state;
    
    const deleteFromFavs = (pokemonSelected, setSwtichImage, swtichImage) => {
      if(swtichImage) {
        setSwtichImage(false);
          let saved = [...state.favourites];
          const leftPokemons = saved.filter(fav => fav !== pokemonSelected);
          dispatch({
            type: 'FAVOURITES',
            payload: {
            ...state,
            favourites: leftPokemons,
            }
          });
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
          favourites.length === 0 ? <DataInformation>Not favs yet, sorry!</DataInformation>
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