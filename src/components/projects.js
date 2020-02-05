import React from "react"
// import bagjav from '../images/bagjav.jpg'
import styled from 'styled-components'
import Bagjav from "../images/bagjav.png"
import gatsbyAstro from "../images/gatsby-astronaut.png"

const PROJECTS = styled.div`
    display: grid;
    align-content: center;
    text-align: center;
    background-color: ivory;
    justify-content: space-evenly;
    padding-left: 8%;
    padding-right: 8%;
    h2 {
        font-family: "Righteous", cursive;
        text-decoration: underline;
    }
`;
const PROJECT = styled.div`
    border: 2px solid black;
    padding: 3%;
`;

const Projects = () => (
    <PROJECTS>
        <h1>Projects!</h1>
    <PROJECT>
        <a href="https://gabesharpton.github.io/Bagjav/" target="_blank" rel="noopener noreferrer" ><h2>Bagjav</h2></a>
        <img src={Bagjav} style={{width: 800}} alt=""></img>
        {/* <Bagjav alt="Test" /> */}
    </PROJECT>
    <>
        <a href="https://gabesharpton.github.io/Bagjav/"><h2>Bagjav</h2></a>
        <img src={gatsbyAstro} style={{width: 800}} alt=""></img>
        {/* <Bagjav alt="Test" /> */}
    </>
  </PROJECTS>
)
console.log(Bagjav)



export default Projects