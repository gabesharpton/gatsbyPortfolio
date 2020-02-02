import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
console.log(data)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid}
              style= {{
                border: 0,
                borderRadius: 0,
                justifyContent: 'left',
                margin: 0,
                display: 'block',
                    }}
  />
}

export default Avatar