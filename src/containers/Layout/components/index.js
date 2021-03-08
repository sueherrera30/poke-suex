import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    min-height: 100vh;
    background: lightcyan;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const Header = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    background: papayawhip;
`;
const Footer = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    background: white;
`;

export {
    Container, Header,
    Footer,
};