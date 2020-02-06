import React from 'react';
import "./style/header.css";
import Image from "./image";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Head = styled.div`
  height: 100%;
  background-color: cornflowerblue;
  text-align: center;
`;

const Header = () => (
  <Head>
    <h1 id="title" style={{ paddingTop: 20, color: "black" }}>
      Gabriel Sharpton || Full-Stack Developer
    </h1>
    <Image style={{ height: `350px`, width: `300px` }} />
<div id='profiles'>
    <a id="linkedin-profile" 
    target="_blank"
    rel="noopener noreferrer" 
    href="https://www.linkedin.com/in/gabesharpton/">
      <FaLinkedin />
      <h5 style={{color: 'black'}}>Linkedin Profile</h5>
    </a>
    <a id="github-profile"
    target="_blank"
    rel="noopener noreferrer" 
    href="https://github.com/gabesharpton">
      
      <FaGithub />
      <h5>Github Profile</h5>
    </a>
    <a id="email-address" 
    target="_blank"
    rel="noopener noreferrer" 
    href="mailto:Gabriel.sharpton@gmail.com">
      <MdEmail />
      <h5 style={{color: 'black'}}>Send email</h5>
    </a>
    </div>
  </Head>
);

export default Header;
