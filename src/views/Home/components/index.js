import styled from 'styled-components'

const MainContainer = styled.div`   
    display: flex;
    height: auto;
    min-height: 100vh;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 64px;
`;

const PokemonContainer = styled.div`
   width: calc(100%/3);
   display: flex;
   flex-direction: column;
   align-items: center;
    &:hover {
        & img {
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
    width: 200px;
    height: 200px;
    object-fit: contain;
    background: #F3D68B;
    border-radius: 50%;
    padding: 20px;
    border: 10px solid #ee5564;
    @media screen and (max-width: 768px) {
        width: 180px;
        height: 180px;
        padding: 0;
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
    font-size: 26px;
    font-weight: 600;
    margin: 20px;
    letter-spacing: 5px;
    text-align: center;
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
const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Favourite = styled.img`
    width: 30px;
    height: 30px;
`;
const FavButton = styled.button`
   background: transparent;
   border: none;
   display: flex;
   flex-direction: column;
   align-items: center;
   color: white;
`;

export {
    MainContainer, PokemonImgContainer, PokemonImg,
    PokemonContainer, SearchContainer, SearchText,
    Name, Pokeball, Input, ErrorContainer, InfoContainer,
    Favourite, FavButton,
};