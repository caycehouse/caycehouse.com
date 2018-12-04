import React from 'react';
import Link from 'gatsby-link';
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';

export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar color="light" light expand="md" style={{ zIndex: 999 }}>
        <NavbarBrand href="/" className="d-md-none">
          caycehouse.com
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} aria-label="Toggle navigation" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link" activeClassName="active">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/blog" className="nav-link" activeClassName="active">
                Blog
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
