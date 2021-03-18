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
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;
const NameContainer = styled.div`
    min-width: 30%;
    width: auto;
    height: 80px;
    background: #403a3a;
    display: flex;
    justify-content: center;
    position: relative;
    top: 24px;
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
`;
const IconContainer = styled.div`
    width: 60px;
    height: 60px;
    object-fit: contain;
    position: absolute;
    top: 45px;
    right: -35px;
    transform: rotate(45deg);
`;
const Icon = styled.img`
    width: 100%;
    height: auto;
`;
const InfoContainer = styled.div`
    display: flex;
    width: 40%;
    background: lightgray;
    border: 40px solid #BE0001;
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
const ImgSpriteContainer = styled.div`
    
`;
const ImgSprite = styled.img`
    width: 100px;
    height: 100px;
`;
const MainImgContainer = styled.div`
    width: 160px;
    height: 160px;
    border: 40px solid #BE0001;
    border-radius: 50%;
    position: absolute;
    bottom: 2px;
    right: 16px;
    transform: rotate(20deg);
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgray;
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
    left: 29px;
    transform: rotate(270deg);
    display: flex;
    justify-content: center;
    align-items: center;
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
    MainImg,
};