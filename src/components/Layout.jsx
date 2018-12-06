import React from 'react';
import PropTypes from 'prop-types';
import Konami from 'react-konami-code';

import Header from './Header';
import MainNavbar from './MainNavbar';
import Footer from './Footer';

class Layout extends React.Component {
  easterEgg = () => {
    document.write(`<iframe
        title="Subscribe to PewDiePie"
        id="pewdiepie"
        src="https://www.youtube.com/embed/6Dh-RL__uN4?modestbranding=1&autoplay=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style="height: 100vh; width:100vw;z-index:-1"
      />`);
    const link = document.createElement('a');
    link.setAttribute('href', 'https://youtube.com/pewdiepie');
    link.setAttribute(
      'style',
      'bottom:15px;right:0;left:0;position:absolute;z-index: 999;font-size:5rem;text-align:center;color:#ffffff;text-decoration: none',
    );
    const linkContent = document.createTextNode(
      'Subscribe to PewDiePie on Youtube',
    );
    link.appendChild(linkContent);
    document.body.append(link);
    document.body.style = 'margin: 0;';
  };

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Konami action={this.easterEgg} />
        <Header />
        <MainNavbar />
        <div className="mt-3">{children}</div>
        <Footer />
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
