import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';

import SocialIcons from './SocialIcons';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  footer: {
    bottom: 0,
    position: 'fixed',
    width: '100%',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

class MainNavbar extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;
    const { mobileOpen } = this.state;

    const drawer = (
      <div>
        <Divider />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <StaticQuery
                query={graphql`
                  query {
                    profileImg: file(relativePath: { eq: "icon.jpeg" }) {
                      childImageSharp {
                        fixed(width: 50, height: 50, quality: 85) {
                          ...GatsbyImageSharpFixed_withWebp
                        }
                      }
                    }
                  }
                `}
                render={({ profileImg }) => (
                  <Avatar
                    alt="Cayce House"
                    component={Img}
                    fixed={profileImg.childImageSharp.fixed}
                  />
                )}
              />
            </ListItemIcon>
            <ListItemText primary="Cayce House" />
          </ListItem>
          <ListItem>
            <SocialIcons />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <FontAwesomeIcon icon={faHome} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <List className={classes.footer}>
          <ListItem button>
            <ListItemText
              primary={`© ${new Date().getFullYear()} Cayce House`}
            />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://sumojoe.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ListItemText primary="Powered by SUMOjoe" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <React.Fragment>
        <Hidden smUp implementation="css">
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Hidden>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </React.Fragment>
    );
  }
}

MainNavbar.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainNavbar);
