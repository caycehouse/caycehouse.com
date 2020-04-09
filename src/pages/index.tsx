import React from "react"

import Layout from "../components/layout"
import Feature from "../components/feature"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Feature />
    <h1 className="display-1">Cayce House</h1>
    <h2 className="display-5">Web &amp; Mobile App Developer</h2>
  </Layout>
)

export default IndexPage
