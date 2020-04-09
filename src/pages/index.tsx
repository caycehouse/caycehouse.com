import React from "react"

import Layout from "../components/layout"
import Feature from "../components/feature"
import SEO from "../components/seo"
import Nav from "react-bootstrap/Nav"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Feature />
    <h1 className="display-1">Cayce House</h1>
    <h2 className="display-5">Web &amp; Mobile App Developer</h2>
    <Nav className="justify-content-center mt-5" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  </Layout>
)

export default IndexPage
