import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Footer
 } from '../Layout/components';

const Layout = ({ children }) => {
  return (
    <Container>
        <Header>
            holi header
        </Header>
        <div>{children}</div>
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