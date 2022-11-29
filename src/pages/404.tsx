import React from "react"
import Layout from "../components/layout"
import { HeadFC } from "gatsby"
import { SEO } from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1 className="pt-5 display-1">NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

export const Head: HeadFC = () => (
  <SEO title="404: Not found" />
)
