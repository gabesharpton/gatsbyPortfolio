// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import './style/header.css'
import Image from './image'
// import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail  } from 'react-icons/md'


const Header = () => (
  <div>
    <h1 id="title" >Gabriel Sharpton || Full-Stack Developer</h1>
    <Image style={{height: `350px`, width: `300px`}} />
       
       
       <a id='linkedin-profile' href='https://www.linkedin.com/in/gabesharpton/'><FaLinkedin /></a>
        <a id="github-profile" href="https://github.com/gabesharpton"> <FaGithub /> </a>
        <a id='email-address' href="mailto:Gabriel.sharpton@gmail.com"><MdEmail /></a>
    </div>
)



export default Header
