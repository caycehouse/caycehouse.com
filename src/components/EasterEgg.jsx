import React from 'react';
import ReactDOM from 'react-dom';
import Konami from 'react-konami-code';

const EasterEgg = () => (
  <React.Fragment>
    <iframe
      title="Subscribe to PewDiePie"
      id="pewdiepie"
      src="https://www.youtube.com/embed/6Dh-RL__uN4?autoplay=1&cc_lang_pref=en&cc_load_policy=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playlist=6Dh-RL__uN4&rel=0"
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
      className="display-3"
      style={{
        top: '25px',
        color: '#ffffff',
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
