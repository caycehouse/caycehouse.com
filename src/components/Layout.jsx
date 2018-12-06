import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import MainNavbar from './MainNavbar';
import EasterEgg from './EasterEgg';
import Footer from './Footer';

const Layout = ({ children }) => (
  <React.Fragment>
    <EasterEgg />
    <Header />
    <MainNavbar />
    <div className="mt-3">{children}</div>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
