import React from 'react';

import vikingHead from './viking-head.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString().replace(/([AP]M)/, ' '),
      date: new Date().toLocaleDateString(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString().replace(/([AP]M)/, ' '),
      date: new Date().toLocaleDateString(),
    });
  }

  render() {
    const { time, date } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <img
            src={vikingHead}
            alt="Conley Viking Logo"
            style={{
              width: '150px',
              position: 'absolute',
              top: '25px',
              right: '25px',
            }}
          />
          <h1
            className="display-1"
            style={{ color: '#2d499d', fontSize: '10rem' }}
          >
            Conley Time:
          </h1>
          <p
            className="display-1 text-center p-5"
            style={{ fontSize: '20rem' }}
          >
            {time}
          </p>
          <p className="display-4 text-right">{date}</p>
        </div>
        <Footer />
      </div>
    );
  }
}
