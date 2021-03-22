import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Header, Footer, NameLink,
    Content, Logo, FooterText, ImgFooter,
 } from '../Layout/components';

const Layout = ({ children }) => {
  const logo = '../../../assets/logoPokemon.png'
  const heart = '../../../assets/heart.png'
  const github = 'https://github.com/sueherrera30'
  return (
    <Container>
        <Header>
            <Link to='/favorites'>FAVS</Link>
            <Logo alt="logo" src={logo} />
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