import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

interface Props {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Container className="text-center">{children}</Container>
      <Navbar fixed="bottom" expand="lg" bg="dark" id="footer">
        <Navbar.Brand className="my-0 mx-auto text-white">
          Copyright © {new Date().getFullYear()} Cayce House
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Layout
