import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import MainNavbar from './MainNavbar';
import Footer from './Footer';
import '../styles/main.scss';

const Layout = ({ children }) => (
  <React.Fragment>
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
