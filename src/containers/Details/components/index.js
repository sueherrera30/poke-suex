import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 200px);
    background: pink;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;
const NameContainer = styled.div`
    width: calc(100% - 50px);
    height: 50px;
    background: black;
    transform: rotate(-10deg);
    position: absolute;
    left: -90px;
    display: flex;
    justify-content: center;
`;
const Name = styled.p` 
    display: flex;
    color: white;
    font-family: 'Permanent Marker',cursive;
    letter-spacing: 1px;
    font-size: 30px;
    margin: 0;
`;
const IconContainer = styled.div`
    width: 60px;
    height: 60px;
    object-fit: contain;
    position: absolute;
    top: 20px;
    right: -24px;
    transform: rotate(45deg);
`;
const Icon = styled.img`
    width: 100%;
    height: auto;
`;
const InfoContainer = styled.div`
    display: flex;
    width: 70%;
    height: 400px;
    background: gray;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;
const TitleInfo= styled.p`
    display: flex;
    font-family: 'DotGothic16', sans-serif;
`;
const InformationList = styled.ul`
    display: flex;
`;
const Information = styled.li`
    display: flex;
    font-family: 'Quicksand', sans-serif;
`;
const DecorationGameContainer = styled.div`
    display: flex;
`;
const DecorationControl = styled.div`
    display: flex;
`;
const DecorationButton = styled.div`
    display: flex;
`;
const ImagesContainer = styled.div`
        display: flex;
`;
const ImgSpriteContainer = styled.div`
    display: flex;
`;
const ImgSprite = styled.img`
    display: flex;
`;
export {
    MainContainer, NameContainer,
    IconContainer,Name,
    Icon, InfoContainer,InformationList,
    TitleInfo, Information,
    DecorationGameContainer, DecorationControl,
    DecorationButton,ImagesContainer,
    ImgSpriteContainer, ImgSprite,
};