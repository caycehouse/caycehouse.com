import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import MainNavbar from './MainNavbar';
import EasterEgg from './EasterEgg';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div
    style={{
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
    }}
  >
    <EasterEgg />
    <Header />
    <MainNavbar />
    <main style={{ flexGrow: 1 }}>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
