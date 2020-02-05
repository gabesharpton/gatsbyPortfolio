import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"


export default ({ data }) => (
    <div>
      <h1>Hello gatsby-image</h1>
      <div>
        {data.allImageSharp.edges.map(edge => 
          <Img fluid={edge.node.fluid} alt={edge.node.id} />
        )}
      </div>
    </div>
  )
  
  export const query = graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 350, maxHeight: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }`

