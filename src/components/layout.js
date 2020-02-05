import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import AboutMe from './aboutMe'
import Languages from './languages'
import Header from "./header"
import Projects from "./projects"
import Footer from "./footer"
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
        <Footer />
      </LayoutBody>
  )
}



export default Layout
