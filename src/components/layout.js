/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import AboutMe from './aboutMe'
import Languages from './languages'
import Header from "./header"
import Projects from "./projects"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const LayoutBody = styled.div`
    margin: 0 auto,
    padding: 0 ,
    text-align: center,
    footer {font-size: 2rem,}


  `
    
console.log(data)

  return (
      <LayoutBody>
        <Header />
        <AboutMe />
        <Languages />
        <Projects />
      </LayoutBody>
  )
}



export default Layout
