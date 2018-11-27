import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="mt-3">{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
