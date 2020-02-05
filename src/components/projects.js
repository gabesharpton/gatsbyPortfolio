import React from "react"
// import bagjav from '../images/bagjav.jpg'
import styled from 'styled-components'
import Bagjav from "../images/bagjav.png"
import backend from "../images/backend.png"
import gatsbyBlog from "../images/gatsbyBlog.png"
import hangman from "../images/hangman.png"

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
    margin: 3%;
    
`;

const Projects = () => (
    <PROJECTS>
        <h1>Projects!</h1>
    <PROJECT>
        <a href="https://gabesharpton.github.io/Bagjav/" target="_blank" rel="noopener noreferrer" ><h2>Bagjav</h2></a>
        <img src={Bagjav} alt="Bagjav game"></img>
    </PROJECT>
    <PROJECT>
        <a href="https://fitness-planner-gls.herokuapp.com/" target="_blank" rel="noopener noreferrer" ><h2>Backend Project</h2></a>
        <img src={backend} alt="Fitness Planner"></img>
    </PROJECT>
    <PROJECT>
        <a href="https://gabegatsbyblog.netlify.com/" target="_blank" rel="noopener noreferrer" ><h2>Gatsby Blog</h2></a>
        <img src={gatsbyBlog} alt="Blog made with Gatsby"></img>
    </PROJECT>
    <PROJECT>
        <a href="https://gabesharpton.github.io/Hangman-Javascript-Game/" target="_blank" rel="noopener noreferrer" ><h2>Hangman</h2></a>
        <img src={hangman} alt="Hangman Game"></img>
    </PROJECT>
  </PROJECTS>
)
console.log(Bagjav)



export default Projects