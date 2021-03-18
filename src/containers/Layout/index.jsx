import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Footer, Content,
 } from '../Layout/components';

const Layout = ({ children }) => {
  return (
    <Container>
        <Header>
            holi header
        </Header>
        <Content>{children}</Content>
        <Footer>
            by footer
        </Footer>
    </Container>
  );
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
  };
export default Layout;