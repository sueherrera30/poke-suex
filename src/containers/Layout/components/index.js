import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    height: auto;
    position: relative;
`;
const Header = styled.div`
    display: flex;
    width: 100%;
    // height: 80px;
    background: transparent;
`;
const Content = styled.div`
    height: 100vh;
    background: rgb(64,58,58);
    background: linear-gradient(180deg, rgba(64,58,58,1) 3%, rgba(85,110,121,0.9626225490196079) 67%);
`;

const Footer = styled.div`
    width: 100%;
    // height: 60px;
    background: white;
    position: absolute;
    bottom: 0;
    background: transparent;

`;

export {
    Container, Header,
    Footer, Content,
};