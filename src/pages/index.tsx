import React from "react"

import Layout from "../components/layout"
import Feature from "../components/feature"
import SEO from "../components/seo"
import Nav from "react-bootstrap/Nav"
import { FaEnvelope, FaFacebookF, FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Feature />
    <h1 className="display-2 d-none d-sm-block">Cayce House</h1>
    <h1 className="d-block d-sm-none">Cayce House</h1>
    <h2 className="d-none d-sm-block">Web &amp; Mobile App Developer</h2>
    <h2 className="h6 d-block d-sm-none">
      Web &amp; Mobile App Developer, CCENT, CCNA
    </h2>
    <Nav className="justify-content-center mt-5" activeKey="/home">
      <IconContext.Provider value={{ size: "4em" }}>
        <Nav.Item>
          <Nav.Link href="https://www.facebook.com/caycehouse">
            <FaFacebookF />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://github.com/caycehouse">
            <FaGithub />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="mailto:cayce@caycehouse.com">
            <FaEnvelope />
          </Nav.Link>
        </Nav.Item>
      </IconContext.Provider>
    </Nav>
  </Layout>
)

export default IndexPage
