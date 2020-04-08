import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Header from '../components/Header';

const styles = {
  header: {
    color: '#2d499d',
  },
};

class Clock extends React.Component {
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
    const { classes, data } = this.props;
    return (
      <>
        <Header />
        <Grid container align="center">
          <Grid item xs={8}>
            <Typography className={classes.header} variant="h1">
              Conley Time:
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Img
              alt="Conley Viking Logo"
              fixed={data.vikingHeadImg.childImageSharp.fixed}
              style={{
                position: 'absolute',
                top: '25px',
                right: '25px',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h1">
              {time}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h3">
              {date}
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  }
}

Clock.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({ vikingHeadImg: PropTypes.object }).isRequired,
};

export default withStyles(styles)(Clock);

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
