import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { 
    MainContainer, NameContainer, IconContainer,Name,
    Icon, InfoContainer, TitleInfo, Information,
    DecorationGameContainer,DecorationControl, DecorationButton,
    ImagesContainer, ImgSpriteContainer, ImgSprite, InformationList,
} from './components';

import useFetch from '../../hooks/useFetch'; 

const Details = () => {
    const { id } = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
    const chemsImg = '../../../assets/cheems.png';
    const pokeImg = '../../../assets/pokedex.png';
    
    const pokemonData = useFetch(url, {});
    
    const { response } = pokemonData;
    if (!response) {
        return <>
        <h1>Sorry, I'm broken, internet is having anxiety</h1>
        <img alt="img" src={chemsImg} />
        <Link to="/">
             BACK
        </Link>
    </>
    }
  return (
    <>
    <Link to="/">
        BACK
    </Link>
    <MainContainer>
        <NameContainer>
            <Name>n{response.name}</Name>
            <IconContainer>
                <Icon alt="img" src={pokeImg} />  
            </IconContainer>
        </NameContainer>
        {/* <img alt="img" src={`${urlImg}/${id}.png`} />   */}
        <InfoContainer>
            <TitleInfo>
                Abilities
            </TitleInfo>
            <InformationList>  
                {
                response.abilities.map(ability => (
                    <Information key={ability.ability.name}>
                        {ability.ability.name}
                    </Information>
                ))
                }
            </InformationList>
            <TitleInfo>
                Forms
            </TitleInfo>
            <InformationList>  
                {
                response.forms.map(form => (
                    <Information key={form.name}>
                        {form.name}
                    </Information>
                ))
            }
            </InformationList>
        </InfoContainer>
        <ImagesContainer>
            <TitleInfo>
                Sprites
            </TitleInfo>
            <ImgSpriteContainer>
                <ImgSprite alt="img" src={response.sprites.front_default} />
            </ImgSpriteContainer>
            <ImgSpriteContainer>
                <ImgSprite alt="img" src={response.sprites.back_shiny} />
            </ImgSpriteContainer>
        </ImagesContainer>
        <div>
        </div>
    </MainContainer>
    </>
  );
}

Details.propTypes = {
    informationUrl: PropTypes.string.isRequired
  };
export default Details;