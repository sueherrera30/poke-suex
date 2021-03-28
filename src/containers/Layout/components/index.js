import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: auto;
    min-height: calc(100vh - 290px);
    position: relative;
`;
const Header = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    justify-content: center;
    align-items: center;
    position: relative;
    background: rgb(238,85,100);
    background: linear-gradient(180deg, rgba(238,85,100,1) 3%, rgba(64,58,58,1) 88%);
    @media screen and (max-width: 425px) {
        height: 300px;
    }
`;
const Counter = styled.div`
display: flex;
width: 15px;
height: 15px;
border-radius: 50%;
justify-content: center;
align-items: center;
position: relative;
top: -10px;
right: 15px;
background: white;
color: red;
font-size: 10px;
`;
 const FavsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    & > a {
        text-decoration: unset;
        color: #f3d67b;
        font-size: 24px;
        font-weight: 600;
        text-transform: capitalize;
        font-family: 'Cedarville Cursive', cursive;
        letter-spacing: 4px;
        padding: 4px 10px;
        &:hover {
            font-size: 30px;
            color: white;
        }
    }
    @media screen and (max-width: 425px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 100px 0px;
    }
`;

const Logo = styled.img`
    width: 300px;
    height: auto;
    @media screen and (max-width: 320px) {
        width: 250px;
    }
`;

const Content = styled.div`
    background: rgb(64,58,58);
    background: linear-gradient(180deg, rgba(64,58,58,1) 3%, rgba(85,110,121,0.9626225490196079) 67%);
`;

const Footer = styled.div`
    width: 100%;
    background: white;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(91,115,126);
    background: linear-gradient(180deg, rgba(91,115,126,1) 0%, rgba(91,115,126,1) 19%, rgba(91,115,126,1) 20%, rgba(243,214,123,1) 96%);
`;

const FooterText = styled.span`
    color: #5b737e;
    font-size: 20px;
    font-family: 'Cedarville Cursive', cursive;
`;
const ImgFooter = styled.img`
    width: 20px;
    height: 20px;
    margin: 0px 8px;
`;

const NameLink = styled.a`
    text-decoration: none;
    color: #5b737e;
    &:hover {
        font-size: 24px;
    }
`;
export {
    Container, Header, FooterText, NameLink, Counter,
    Footer, Content, Logo, ImgFooter, FavsContainer,
};