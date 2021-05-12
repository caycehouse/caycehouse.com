import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Feature = () => {
  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "feature.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 150, height: 150, layout: FIXED)
    }
  }
}
`)

  return (
    <div className="pt-5">
      <GatsbyImage
        image={data.placeholderImage.childImageSharp.gatsbyImageData}
        className="shadow-lg rounded-circle mx-auto"
        alt="Cayce House" />
    </div>
  );
}

export default Feature
