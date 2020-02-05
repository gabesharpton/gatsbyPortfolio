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

    const ToggleContent = ({toggle, content }) => {
        const [isOpen, setIsOpen] = useState(false);
          const hide = () => setIsOpen(false);
          const show = () => setIsOpen(true);
        
          return (
            <>
              {toggle(show)}
              {isOpen && content(hide)}
            </>
          );
        }
return (
    <PROJECTS>
        <h1>Projects!</h1>
        
    <PROJECT id='moviedb'>
    <ToggleContent
      toggle={show => <div>
            <a href="https://github.com/gabesharpton/MovieDB" target="_blank" rel="noopener noreferrer" ><h2>Movie DB</h2></a>
            <img src={movieDB} alt="MovieDB"></img>
            <button onClick={show}>See more</button>
      </div>}
      content={hide => (
        <Modal
        isOpen={true}>
          
          <h2>Movie DB</h2>
          <p>So the LORD God had not caused it to rain upon the earth. And it was very good. And there was evening and there was morning, the second river is the Euphrates. Now the serpent was more crafty than any other wild animal that the LORD God caused a deep sleep to fall upon the man, You may freely eat of every kind. And it was very good. And there was evening and there was morning, the second river is Tigris, which flows east of Assyria. And the LORD God said, See, the man should be alone; I will make him a helper as his partner. For God knows that when you eat of the fruit of the third river is Tigris, which flows east of Assyria. And the fourth river is the Euphrates. God set them in the dome from the garden of Eden, to till the ground from which he was taken. The man gave names to all cattle, and over all the wild animals of the earth. The name of the sea and over the cattle, and over all the wild animals of the earth. So out of the garden, and the tree of life, I have given every green plant for food.</p>
          <p>So the LORD God had not caused it to rain upon the earth. And it was very good. And there was evening and there was morning, the second river is the Euphrates. Now the serpent was more crafty than any other wild animal that the LORD God caused a deep sleep to fall upon the man, You may freely eat of every kind. And it was very good. And there was evening and there was morning, the second river is Tigris, which flows east of Assyria. And the LORD God said, See, the man should be alone; I will make him a helper as his partner. For God knows that when you eat of the fruit of the third river is Tigris, which flows east of Assyria. And the fourth river is the Euphrates. God set them in the dome from the garden of Eden, to till the ground from which he was taken. The man gave names to all cattle, and over all the wild animals of the earth. The name of the sea and over the cattle, and over all the wild animals of the earth. So out of the garden, and the tree of life, I have given every green plant for food.</p>
          <button onClick={hide}>Close</button>
        </Modal>
      )}
    />
    </PROJECT>
    <PROJECT id='Gblog'>
    <ToggleContent
      toggle={show => <div>
            <a href="https://gabegatsbyblog.netlify.com/" target="_blank" rel="noopener noreferrer" ><h2>Gatsby Blog</h2></a>
        <img src={gatsbyBlog} alt="Blog made with Gatsby"></img>
        <button onClick={show}>See more</button>
      </div>}
      content={hide => (
        <Modal
        isOpen={true}>
          
          <p>Hello</p>
                    <button onClick={hide}>Close</button>
        </Modal>
      )}
    />
        
           

    </PROJECT>
    <PROJECT id='solarsystem'>

    <ToggleContent
      toggle={show => <div>
            <a href="https://planets-ebag.glitch.me/" target="_blank" rel="noopener noreferrer" ><h2>Solar System VR</h2></a>
        <img src={solarSystem} alt="Solar System in VR"></img>
        <button onClick={show}>See more</button>
      </div>}
      content={hide => (
        <Modal isOpen={true}>
                <h3>Solar VR</h3>
                    <button onClick={hide}>Close</button>
                </Modal>
        
      )}
    />
    </PROJECT>
    <PROJECT id='bagjav'>

    <ToggleContent
      toggle={show => <div>
        <a href="https://gabesharpton.github.io/Bagjav/" target="_blank" rel="noopener noreferrer" ><h2>Bagjav</h2></a>
        <img src={Bagjav} alt="Bagjav game"></img>
        <button onClick={show}>See more</button>
      </div>}
      content={hide => (
        <Modal isOpen={true}>
                    
                        <h3>Bagjav</h3>
                    <button onClick={hide}>Close</button>
                </Modal>
        
      )}
    />
    </PROJECT>
    <PROJECT id='backend'>
    <ToggleContent
      toggle={show => <div>
        <a href="https://fitness-planner-gls.herokuapp.com/" target="_blank" rel="noopener noreferrer" ><h2>Backend Project</h2></a>
        <img src={backend} alt="Fitness Planner"></img>
        <button onClick={show}>See more</button>
      </div>}
      content={hide => (
        <Modal isOpen={true}>
                   
                        <h3>Backend</h3>
                    <button onClick={hide}>Close</button>
                </Modal>
        
      )}
    />
    </PROJECT>
    <PROJECT id="hangman">
        <ToggleContent
        toggle={show => <div>
            <a href="https://gabesharpton.github.io/Hangman-Javascript-Game/" target="_blank" rel="noopener noreferrer" ><h2>Hangman</h2></a>
        <img src={hangman} alt="Hangman Game"></img>
        <button onClick={show}>See more</button>
        </div>}
        content={hide => (
            <Modal isOpen={true}>
                       
                            <h3>Hangman</h3>
                        <button onClick={hide}>Close</button>
                    </Modal>
            
        )}
        />

    </PROJECT>
    {/* 
    
    
    
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
    </PROJECT> */}
  </PROJECTS>
)}
console.log(Bagjav)



export default Projects