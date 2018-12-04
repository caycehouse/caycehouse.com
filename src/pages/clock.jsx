import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

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
    const { data } = this.props;
    return (
      <div>
        <Header />
        <div className="container">
          <Img
            alt="Conley Viking Logo"
            fixed={data.vikingHeadImg.childImageSharp.fixed}
            style={{
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

Clock.propTypes = {
  data: PropTypes.shape({ vikingHeadImg: PropTypes.object }).isRequired,
};

export const query = graphql`
  query {
    vikingHeadImg: file(relativePath: { eq: "viking-head.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
