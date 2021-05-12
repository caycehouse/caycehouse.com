import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

const Feature = () => {
  return (
    <div className="pt-5">
      <StaticImage
        src="../images/feature.jpg"
        id="feature-image"
        className="shadow-lg rounded-circle mx-auto"
        placeholder="blurred"
        layout="fixed"
        width={150}
        height={150}
        quality={90}
        alt="Cayce House" />
    </div>
  );
}

export default Feature
