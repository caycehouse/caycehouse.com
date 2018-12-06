import React from 'react';
import ReactDOM from 'react-dom';
import Konami from 'react-konami-code';

const EasterEgg = () => (
  <React.Fragment>
    <iframe
      title="Subscribe to PewDiePie"
      id="pewdiepie"
      src="https://www.youtube.com/embed/6Dh-RL__uN4?modestbranding=1&autoplay=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        height: '100vh',
        width: '100vw',
        zIndex: -1,
      }}
    />
    <a
      href="https://youtube.com/pewdiepie"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        bottom: '25px',
        color: '#ffffff',
        fontSize: '4rem',
        left: 0,
        position: 'fixed',
        right: 0,
        textAlign: 'center',
      }}
    >
      Subscribe to PewDiePie on YouTube
    </a>
  </React.Fragment>
);

class EasterEggLoader extends React.Component {
  easterEgg = () => {
    document.body.style = 'overflow: hidden';
    ReactDOM.render(<EasterEgg />, document.getElementById('___gatsby'));
  };

  render() {
    return <Konami action={this.easterEgg} />;
  }
}

export default EasterEggLoader;
