import styled from 'styled-components'

const MainContainer = styled.div`   
    display: flex;
    height: auto;
    min-height: 100vh;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

const PokemonContainer = styled.div`
   width: calc(100%/3);
    &:hover {
        &  img {
            transform: rotate(20deg);
        }
    }
   @media screen and (max-width: 425px) {
    width: 100%;
    }
   & > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: unset;
   }
`;
const PokemonImgContainer = styled.div`
    width: 250px;
    height: 250px;
    object-fit: contain;
    @media screen and (max-width: 320px) {
        width: 180px;
        height: 180px;
    }
`;
const PokemonImg = styled.img`
    width: 100%;
    height: auto;
`;

const Pokeball = styled.img`
    width: 20px;
    height: 20px;
    margin: 0 8px;
`;

const Name= styled.p`
    text-transform: uppercase;
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin: 8px;
    letter-spacing: 5px;
    font-family: 'DotGothic16', sans-serif;
`;

const ErrorContainer = styled.h1`
    color: #f3d67b;
    font-size: 20px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    font-family: 'DotGothic16', sans-serif;
`;

const SearchContainer = styled.div`   
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100px;
`;

const SearchText= styled.p`
    color: #f3d67b;
    font-size: 20px;
    font-weight: 600;
    margin: 8px;
    letter-spacing: 7px;
    font-family: 'DotGothic16', sans-serif;
    text-transform: uppercase;
`;
const Input = styled.input`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.5px;
  padding: 10px;
  margin: 10px;
  background: white;
  border: none;
  width: 30%;
  border-radius: 20px;
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  @media screen and (max-width: 425px) {
    width: 80%;
  }
    &:focus,
    &:active {
        outline: none;
    }
    &::placeholder {
        color: #ee5564;
    }
`;
export {
    MainContainer, PokemonImgContainer, PokemonImg,
    PokemonContainer, SearchContainer, SearchText,
    Name, Pokeball, Input, ErrorContainer,
};