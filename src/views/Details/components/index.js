import styled from 'styled-components'

const Container = styled.div`   
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const MainContainer = styled.div`
    display: flex;
    width: 60%;
    height: 100%;
    min-height: calc(100vh - 290px);
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
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

const NameContainer = styled.div`
    min-width: 30%;
    width: auto;
    height: 80px;
    background: #536066;
    display: flex;
    top: 24px;
    justify-content: center;
    position: relative;
    z-index: 999;
`;
const Name = styled.p` 
    display: flex;
    color: white;
    font-family: 'DotGothic16', sans-serif;
    letter-spacing:10px;
    font-size: 40px;
    padding: 8px;
    margin: 0;
    text-transform: Capitalize;
    @media screen and (max-width: 320px) {
        font-size: 30px;
        padding: 4px;
    }
`;
const IconContainer = styled.div`
    width: 60px;
    height: 60px;
    object-fit: contain;
    position: absolute;
    top: 45px;
    right: -35px;
    transform: rotate(45deg);
    @media screen and (max-width: 320px) {
        width: 50px;
        height: 50px;
        right: -20px;
    }
`;
const Icon = styled.img`
    width: 100%;
    height: auto;
`;
const InfoContainer = styled.div`
    display: flex;
    width: 40%;
    background: lightgray;
    border: 40px solid #ee5564;
    border-radius: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    @media screen and (max-width: 1024px) {
        width: 60%;
        flex-wrap: wrap;
      }
      @media screen and (max-width: 425px) {
        width: 100%;
      }
`;
const TitleInfo= styled.p`
    color: #556e79;
    font-size: 18px;
    margin: 8px;
    letter-spacing: 7px;
    font-family: 'DotGothic16', sans-serif;
    text-transform: uppercase;

`;
const InformationList = styled.ul`
    list-style: none;
    padding: 0;
`;
const Information = styled.li`
    font-size: 16px;
    letter-spacing: 1.5px;
    font-family: 'Quicksand', sans-serif;
`;
const Text = styled.p`
    font-size: 16px;
    letter-spacing: 1.5px;
    font-family: 'Quicksand', sans-serif;
    text-align: center;
    color: #ee5564;
    font-weight: 600;
    width: 50%
`;

const ImgSprite = styled.img`
    width: 100px;
    height: 100px;
    @media screen and (max-width: 320px) {
        height: 80px;
        width: 80px;
    }
`;
const ImgSpriteContainer = styled.div`
    display: flex;
`;

const MainImgContainer = styled.div`
    width: 160px;
    height: 160px;
    border: 40px solid #ee5564;
    border-radius: 50%;
    position: absolute;
    bottom: 2px;
    transform: rotate(20deg);
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgray;
    @media screen and (max-width: 2560px) {
        right: 185px;
    } 
    @media screen and (max-width: 1440px) {
        right: 0px;
    }
    @media screen and (max-width: 1024px) {
        width: 100px;
        height: 100px;
      }
      @media screen and (max-width: 768px) {
        right: -60px;
      }
      @media screen and (max-width: 425px) {
        display: none;
      }
`;
const DecorationGameContainer = styled.div`
    width: 250px;
    height: 160px;
    position: absolute;
    bottom: 100px;
    transform: rotate(270deg);
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 2560px) {
        left: 154px;
    }
    @media screen and (max-width: 1440px) {
        left: 29px;
    }
    @media screen and (max-width: 1024px) {
        left: -107px;
    }
      @media screen and (max-width: 768px) {
        left: -137px;
      }
      @media screen and (max-width: 425px) {
        transform: rotate( 0deg);
        top: -95px;
        left: 150px;
        width: 160px;
      }
      @media screen and (max-width: 375px) {
            top: -92px;
            left: 55px;
            width: 150px;
      }
      @media screen and (max-width: 320px) {
        left: 25px;
    }
`;
const MainImg = styled.img`
    width: calc(100% - 20px);
    height: auto;
`;
export {
    MainContainer, NameContainer,
    IconContainer,Name, Container,
    Icon, InfoContainer,InformationList,
    TitleInfo, Information,
    DecorationGameContainer,
    ImgSpriteContainer, ImgSprite, MainImgContainer,
    MainImg, Text, ErrorContainer,
};