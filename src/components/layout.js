/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

const Layout = ({ children }) => {
  return (
    <>
      <Container className="text-center">{children}</Container>
      <Navbar fixed="bottom" expand="lg" bg="light">
        <Navbar.Brand className="my-0 mx-auto">
          Copyright © {new Date().getFullYear()} Cayce House
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
