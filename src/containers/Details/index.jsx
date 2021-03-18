import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { 
    MainContainer, NameContainer, IconContainer,Name,
    Icon, InfoContainer, TitleInfo, Information, Container,
    MainImgContainer, MainImg,DecorationGameContainer,DecorationControl,
    ImgSpriteContainer, ImgSprite, InformationList,
} from './components';

import useFetch from '../../hooks/useFetch'; 

const Details = () => {
    const { id } = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
    const chemsImg = '../../../assets/cheems.png';
    const pokeImg = '../../../assets/pokedex.png';
    const pikachu = '../../../assets/pika2.png';

    const pokemon = `${urlImg}/${id}.png`
    
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
        <Container>
        <MainContainer>
            <NameContainer>
                <Name>n{response.name}</Name>
                <IconContainer>
                    <Icon alt="img" src={pokeImg} />  
                </IconContainer>
            </NameContainer>
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
                <TitleInfo>
                    Sprites
                </TitleInfo>
                <ImgSpriteContainer>
                    <ImgSprite alt="sprite1" src={response.sprites.front_default} />
                    <ImgSprite alt="sprite2" src={response.sprites.back_shiny} />
                </ImgSpriteContainer>
            </InfoContainer>
            <MainImgContainer>
                <MainImg alt="pokemon" src={pokemon} />  
            </MainImgContainer> 
            <DecorationGameContainer>
                <MainImg alt="controls" src={pikachu} />
            </DecorationGameContainer> 
        </MainContainer>
        </Container>
    </>
  );
}

Details.propTypes = {
    // informationUrl: PropTypes.string.isRequired
  };
export default Details;