import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export default ({ data }) => (
    <div>
      <h1>Hello gatsby-image</h1>
      <div>
        {data.allImageSharp.edges.map(edge => 
          <Img fluid={edge.node.fluid} />
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
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }`

// const projectImage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allFile(filter: { extension: { eq: "pdf" } }){
//         edges{
//             node {
//                 publicURL
//                 name
//             }
//         }
//       }
          
//     }
//   `)

//   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
// }

//export default projectImage