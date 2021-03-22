import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

import { Context } from '../../context/index';
import { LittleImg, Container, stylesLink, MainContainer } from '../Details/components/index';
import {
  PokemonImgContainer, InfoContainer,
  PokemonImg, Name, PokemonContainer,
} from '../Home/components/index'

const jigglypuff = '../../../assets/jigglypuff.png';

const Favorites = () => {
    // const { id } = useParams();
    const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
    // const chemsImg = '../../../assets/cheems.png';

    const { state } = useContext(Context);
    const { favourites } = state;
  return (
    <>
    <Link to="/" style={stylesLink}>
        <p>BACK</p>
        <LittleImg alt="back icon" src={jigglypuff}/>
    </Link>
    <Container>
        <Link to="/">favs</Link>  
        <MainContainer
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap',
          }}
          >
        {
          !favourites ? <p>Not favs, sorry!</p>
          : favourites.map(pokemon => {
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
                      {/* <Tooltip title="ADD TO FAVS" arrow>
                        <FavButton onClick={(e) => handleFavourite(pokemon)} name={pokemon.name}>
                          {
                            !favouriteHeartState 
                            ? <Favourite alt="empty heart" src={emptyHeart} />
                            :  <Favourite alt="heart" src={heart} />
                          } 
                        </FavButton>
                      </Tooltip> */}
                  </InfoContainer>   
                </PokemonContainer>
              )  
            })
          } */}
        </MainContainer> 
    </Container>
    </>
  );
}

Favorites.propTypes = {
    informationUrl: PropTypes.string.isRequired
  };
export default Favorites;