import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Header, Footer, NameLink, Counter,
    Content, Logo, FooterText, ImgFooter, FavsContainer,
 } from '../Layout/components';
 import { Context } from '../../context/index';

const Layout = ({ children }) => {
  const logo = '../../../assets/logoPokemon.png'
  const heart = '../../../assets/heart.png'
  const github = 'https://github.com/sueherrera30'

  const { state } = useContext(Context);
  const { favourites } = state;
  return (
    <Container>
        <Header>
            <Logo alt="logo" src={logo} />
            <FavsContainer>
                <Link to='/favorites'>Favourites</Link>
                <ImgFooter alt="heart" src={heart} /> 
                {
                favourites.length === 0
                    ? null
                    : <Counter>{favourites.length}</Counter>
                }
            </FavsContainer>
        </Header>
        <Content>{children}</Content>
        <Footer>
            <FooterText>Make with</FooterText>
            <ImgFooter alt="heart" src={heart} /> 
            <FooterText><NameLink href={github}>by Sue.</NameLink></FooterText>
        </Footer>
    </Container>
  );
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
  };
export default Layout;