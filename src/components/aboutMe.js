import React from "react"
import './style/aboutMe.css'

import styled from 'styled-components'
import Avatar from '../images/avatar.png'

const Initial = styled.div`
    padding: 8%;
    height: auto;
    background-color: mintcream;
    display: flex;
    font-family: "Acme", sans-serif;
    flex-wrap: nowrap;
    justify-content: space-between;
`
const PARA = styled.p` 
    
    font-size: 2vmax;
    line-height: 4vmax;
    text-align: left;
    padding-left: 5%
`;
const AVA = styled.img`
    height: 60vmin;
    width: 60vmin
`;

const AboutMe = () => (
  <Initial>
      
    <AVA src={Avatar} alt='avatar'></AVA>
    <PARA>I am a software developer that is trained in Full-Stack development and am a JavaScript nerd! I enjoy developing Web Apps and have found the challenges I come across to be really fulfilling. I always bring a new way of thinking of the problem and love sparking conversations that provide additional solutions to tough problems. Check out the languages I use and projects I made down below.</PARA>
    
    </Initial>
)



export default AboutMe