import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Tooltip } from '@material-ui/core';

import {
    PokemonImgContainer,
    PokemonImg, Name, PokemonContainer,
    InfoContainer,Favourite, FavButton, 
  } from '../components';

const PokemonCard = ({ id, pokemonSelected, handleFavourite }) => {
    const [swtichImage, setSwtichImage] = useState(false);
    const emptyHeart = '../../../assets/like.png';
    const heart = '../../../assets/heart.png';
    const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

    return (
        <PokemonContainer>
            <Link to={`/pokemon/${id}`}>
            <PokemonImgContainer>
                <PokemonImg alt="img" src={`${urlImg}/${id}.png`} />
            </PokemonImgContainer>
            </Link>
            <InfoContainer>
                <Name>{pokemonSelected.name}</Name>
                {/* <Tooltip title="ADD TO FAVS" arrow> */}
                <FavButton onClick={() => handleFavourite(pokemonSelected, setSwtichImage, swtichImage)}>
                    {
                        !swtichImage 
                        ? <Favourite alt="empty heart" src={emptyHeart} />
                        : <Favourite alt="heart" src={heart} />
                    } 
                    </FavButton>
                {/* </Tooltip> */}
            </InfoContainer>   
        </PokemonContainer>
    )
};

export default PokemonCard;