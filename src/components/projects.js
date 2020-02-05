import React, { useState } from "react"
// import bagjav from '../images/bagjav.jpg'
import styled from 'styled-components'
import Bagjav from "../images/bagjav.png"
import backend from "../images/backend.png"
import gatsbyBlog from "../images/gatsbyBlog.png"
import hangman from "../images/hangman.png"

import solarSystem from "../images/solarSystem.png"
import movieDB from "../images/movieDB.png"
import Modal from 'react-modal';
//import { Link } from 'gatsby'




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
        a{  font-size: 4.5vw;
            text-decoration: underline;
            h2 {font-size: 5vw;}
        }
    
`;

const Projects = () =>{ 

    const [modalOpen, setModalOpen ] = useState(false)
    const modalCloseTimeout = 300;
    const closeModal = () => {
        setModalOpen(false);
        setTimeout( modalCloseTimeout)
    }
    const renderProjects = which => {
        return 
    }
    console.log(<PROJECT/>)
return (
    <PROJECTS>
        <h1>Projects!</h1>
        
    <PROJECT id='moviedb'>
        <a href="https://planets-ebag.glitch.me/" target="_blank" rel="noopener noreferrer" ><h2>Movie DB</h2></a>
        <img src={movieDB} alt="MovieDB"></img>
        <button onClick={setModalOpen}>See more</button>
           
            <Modal
            
                isOpen={modalOpen}
                onRequestClose={closeModal}
                // id={"moviedb"}
                
                parentSelector={() => document.getElementById("moviedb")}>
                    <img src={movieDB} alt="MovieDB"></img>
                    <h1>Hi</h1>
                    <p>He drove out the man; and at the time of the evening breeze, and the man said, This at last is bone of my flesh; this one shall be called Woman, for out of Eden to water the whole face of the field and every bird of the air and over every living thing that moves upon the ground of every kind. And God saw that it was a delight to the woman, Did God say, 'You shall not eat of it,' cursed is the ground of every tree of the garden. But of the tree about which I commanded you, 'You shall not eat from any tree in the earth and no herb of the first is Pishon; it is the ground because of you; in toil you shall eat the plants of the field. The earth of every tree of the garden. God saw that the LORD God said, It is not good that the man he made into a woman and brought her to the woman, What is this that you have done? The woman said, The woman whom you gave to be with me, she gave me fruit from the man he made into a woman and brought her to the man.</p>
                    <button onClick={closeModal}>Close</button>
            </Modal>

    </PROJECT>
    <PROJECT id='solarsystem'>
        <a href="https://planets-ebag.glitch.me/" target="_blank" rel="noopener noreferrer" ><h2>Solar System VR</h2></a>
        <img src={solarSystem} alt="Solar System in VR"></img>
        <button onClick={setModalOpen}>See more</button>
            <Modal
                isOpen={modalOpen}
                // onRequestClose={!modalOpen}
                parentSelector={() => document.getElementById("solarsystem")}>
                    <img src={solarSystem} alt="Solar System in VR"></img>

                    <button onClick={closeModal}>Close</button>
                </Modal>
    </PROJECT>
    <PROJECT id='Gblog'>
        <a href="https://gabegatsbyblog.netlify.com/" target="_blank" rel="noopener noreferrer" ><h2>Gatsby Blog</h2></a>
        <img src={gatsbyBlog} alt="Blog made with Gatsby"></img>
        <button onClick={setModalOpen}>See more</button>
            <Modal
                isOpen={modalOpen}
                // onRequestClose={!modalOpen}
                parentSelector={() => document.getElementById("Gblog")}>
                    <img src={gatsbyBlog} alt="Blog made with Gatsby"></img>

                    <button onClick={closeModal}>Close</button>
                </Modal>
    </PROJECT>
    <PROJECT id='bagjav'>
        <a href="https://gabesharpton.github.io/Bagjav/" target="_blank" rel="noopener noreferrer" ><h2>Bagjav</h2></a>
        <img src={Bagjav} alt="Bagjav game"></img>
        <button onClick={setModalOpen}>See more</button>
            <Modal
                isOpen={modalOpen}
                // onRequestClose={!modalOpen}
                parentSelector={() => document.getElementById("bagjav")}>
                    <img src={Bagjav} alt="Bagjav game"></img>

                    <button onClick={closeModal}>Close</button>
                </Modal>
    </PROJECT>
    <PROJECT id='backend'>
        <a href="https://fitness-planner-gls.herokuapp.com/" target="_blank" rel="noopener noreferrer" ><h2>Backend Project</h2></a>
        <img src={backend} alt="Fitness Planner"></img>
        <button onClick={setModalOpen}>See more</button>
            <Modal
                isOpen={modalOpen}
                // onRequestClose={!modalOpen}
                parentSelector={() => document.getElementById("backend")}>
                    <img src={backend} alt="Fitness Planner"></img>

                    <button onClick={closeModal}>Close</button>
                </Modal>
    </PROJECT>
    
    <PROJECT id='hangman'>
        <a href="https://gabesharpton.github.io/Hangman-Javascript-Game/" target="_blank" rel="noopener noreferrer" ><h2>Hangman</h2></a>
        <img src={hangman} alt="Hangman Game"></img>
        <button onClick={setModalOpen}>See more</button>
            <Modal
                isOpen={modalOpen}
                onRequestClose={!modalOpen}
                parentSelector={() => document.getElementById("hangman")}
                >
                    <img src={hangman} alt="Hangman Game"></img>
                    <button onClick={closeModal}>Close</button>
                </Modal>
    </PROJECT>
  </PROJECTS>
)}
console.log(Bagjav)



export default Projects