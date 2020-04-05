import React, { useState } from "react";
import styled from "styled-components";
import Bagjav from "../images/bagjav.png";
import backend from "../images/backend.png";
import gatsbyBlog from "../images/gatsbyBlog.png";
import hangman from "../images/hangman.png";
import solarSystem from "../images/solarSystem.png";
import movieDB from "../images/movieDB.png";
// import daysrepo from "../images/daysrepo.png";
import Modal from "react-modal";

const PROJECTS = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: auto;
  text-align: center;
  background-color: mintcream;
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
  background-color: LightGoldenRodYellow;
  padding: 3%;
  margin: 3%;

  a {
    font-size: 4.5vmin;
    text-decoration: underline;
    h2 {
      font-size: 4.5vmin;
    }
  }
`;
const PROJ = styled.h1`
  text-align: center;
  background-color: mintcream;
  margin-bottom: 0;
  padding: 3%;
`;

const Projects = () => {
  const ToggleContent = ({ toggle, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hide = () => setIsOpen(false);
    const show = () => setIsOpen(true);

    return (
      <>
        {toggle(show)}
        {isOpen && content(hide)}
      </>
    );
  };
  return (
    <>
      <PROJ>Projects!</PROJ>
      <PROJECTS>
        <PROJECT id="moviedb">
          <ToggleContent
            toggle={show => (
              <div>
                <a
                  href="https://github.com/gabesharpton/MovieDB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Movie DB</h2>
                </a>
                <img src={movieDB} alt="MovieDB"></img>
                <button onClick={show}>See more</button>
              </div>
            )}
            content={hide => (
              <Modal className="modal-background" isOpen={true}>
                <h2>Movie DB</h2>
                <p>
                  This is a project I made to get better at pulling data from an
                  API while using React JS. I pulled the data from
                  TheMovieDB(TMBD) and did not show the files with the API calls
                  as my API Key is attached. If you would like to see how I will
                  gladly explain and show you the actual files. There is 2
                  components not pushed to git and it is a MoviesList and
                  MovieDetail, List shows a grid view of movie posters and
                  Detail shows the single movie detail. I also added React
                  Overdrive for the animation.{" "}
                </p>
                <h3>Tech used:</h3>
                <ul>
                  <li>React</li>
                  <li>React Overdrive</li>
                  <li>API Calls</li>
                </ul>
                <a
                  href="https://github.com/gabesharpton/MovieDB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Check out my source code here!</h2>
                </a>
                <button onClick={hide}>Close</button>
              </Modal>
            )}
          />
        </PROJECT>
        <PROJECT id="Gblog">
          <ToggleContent
            toggle={show => (
              <div>
                <a
                  href="https://gabegatsbyblog.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Gatsby Blog</h2>
                </a>
                <img src={gatsbyBlog} alt="Blog made with Gatsby"></img>
                <button onClick={show}>See more</button>
              </div>
            )}
            content={hide => (
              <Modal className="modal-background" isOpen={true}>
                <h3>Gatsby Blog</h3>
                <p>
                  This is a blog site I made while learning Gatsby. It really
                  opened my eyes to how great Gatsby can be for making
                  dynamically generated pages. All of the posts on the site are
                  ones from my Dev.to blog site and they are all markdown files.
                  Which made it even easier for me because the Dev.to blogs are
                  written in markdown!
                </p>
                <p>
                  I also learned GraphQL and use it to generate a new page for
                  each markdown file in the folder posts. Gatsby will be my go
                  to for any SPA personal projects after working with this. And
                  you gotta love the speed of that Gatsby Link!
                </p>
                <h3>Tech used</h3>
                <ul>
                  <li>Gatsby</li>
                  <li>React</li>
                  <li>GraphQL</li>
                </ul>
                <a href="https://github.com/gabesharpton/gatsbyBlog">
                  <h2>Check out my source code here!</h2>
                </a>
                <a href="https://gabegatsbyblog.netlify.com/">
                  <h2>Check out the live app here!</h2>
                </a>
                <button onClick={hide}>Close</button>
              </Modal>
            )}
          />
        </PROJECT>
        <PROJECT id="solarsystem">
          <ToggleContent
            toggle={show => (
              <div>
                <a
                  href="https://planets-ebag.glitch.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Solar System VR</h2>
                </a>
                <img src={solarSystem} alt="Solar System in VR"></img>
                <button onClick={show}>See more</button>
              </div>
            )}
            content={hide => (
              <Modal className="modal-background" isOpen={true}>
                <h3>Solar VR</h3>
                <p>
                  This is a small project I made after learning about a tech
                  called A-Frame. It is an in browser Virtual Reality app. This
                  was a fun side project that took me a few hours to put
                  together. It was very interesting to see A-Frame in action and
                  the majority of the code is written in HTML element with an
                  A-Frame script tag. I used Glitch as a Repl to see what was
                  happening in the browser.
                </p>
                <h3>Tech used:</h3>
                <ul>
                  <li>A-Frame</li>
                  <li>HTML</li>
                </ul>
                <a
                  href="https://planets-ebag.glitch.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Checkout the live app here!</h2>
                </a>
                <a
                  href="https://github.com/gabesharpton/A-frame-solarSystem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Checkout the source code here!</h2>
                </a>
                <button onClick={hide}>Close</button>
              </Modal>
            )}
          />
        </PROJECT>
        <PROJECT id="bagjav">
          <ToggleContent
            toggle={show => (
              <div>
                <a
                  href="https://gabesharpton.github.io/Bagjav/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Bagjav</h2>
                </a>
                <img src={Bagjav} alt="Bagjav game"></img>
                <button onClick={show}>See more</button>
              </div>
            )}
            content={hide => (
              <Modal className="modal-background" isOpen={true}>
                <h3>Bagjav</h3>
                <p>
                  This is a React App I made as my Capstone project for my
                  General Assembly Immersive course. The game is a card game I
                  made up with a couple of my good friends. And while I still
                  havnt worked out the kinks, it is still a very minimal viable
                  product. It allows you to chose a card and with the buttons at
                  the top the other players match if they have that card and
                  places as many in the pile as they have. This project taught
                  me a lot about how to deal with state and comparing elements
                  of state to one another.
                </p>
                <h3>Tech used:</h3>
                <ul>
                  <li>React</li>
                </ul>
                <a
                  href="https://gabesharpton.github.io/Bagjav/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Checkout the live app here!</h2>
                </a>
                <a
                  href="https://github.com/gabesharpton/Bagjav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Checkout the source code here!</h2>
                </a>
                <button onClick={hide}>Close</button>
              </Modal>
            )}
          />
        </PROJECT>
        <PROJECT id="backend">
          <ToggleContent
            toggle={show => (
              <div>
                <a
                  href="https://fitness-planner-gls.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Backend Project</h2>
                </a>
                <img src={backend} alt="Fitness Planner"></img>
                <button onClick={show}>See more</button>
              </div>
            )}
            content={hide => (
              <Modal className="modal-background" isOpen={true}>
                <h3>Bagjav</h3>
                <p>
                  This is the first backend project I made during my coding
                  Bootcamp. It is a fitness tracker that allows you to add
                  different workouts and then allows you to add different reps
                  or amount of weight you are using. This is made with Express
                  and uses handlebars as the views and was deployed to Heroku.
                  It uses a MVC architecture and has full CRUD capability.
                </p>
                <h3>Tech used:</h3>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>Handlebars</li>

                <a
                  href="https://fitness-planner-gls.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Checkout the live app here!</h2>
                </a>
                <a
                  href="https://github.com/gabesharpton/Express-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Checkout the source code here!</h2>
                </a>
                <button onClick={hide}>Close</button>
              </Modal>
            )}
          />
        </PROJECT>
        <PROJECT id="hangman">
          <ToggleContent
            toggle={show => (
              <div>
                <a
                  href="https://github.com/gabesharpton/100daysofcode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Hangman</h2>
                </a>
                <img src={hangman} alt="Hangman Game"></img>
                <button onClick={show}>See more</button>
              </div>
            )}
            content={hide => (
              <Modal className="modal-background" isOpen={true}>
                <h3>Hangman</h3>
                <p>
                  This was my first project I made during my coding bootcamp. It
                  is the classic Hangman game that you can play in the browser.
                  One cool thing I learned in this project was how to use key
                  codes so that the player can type on their keyboard to guess
                  letters instead of having to push buttons on a clunky
                  keyboard. This was good practice for using DOM elements as
                  well as comparing letters to a word.
                </p>
                <h3>Tech used:</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Vanilla Javascript</li>
                </ul>
                <a
                  href="https://github.com/gabesharpton/100daysofcode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Checkout the live app here!</h2>
                </a>
                <a
                  href="https://github.com/gabesharpton/Hangman-Javascript-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Checkout the source code here!</h2>
                </a>
                <button onClick={hide}>Close</button>
              </Modal>
            )}
          />
        </PROJECT>
        
        {/* <PROJECT id="100days">
          <ToggleContent
            toggle={show => (
              <div>
                <a
                  href="https://github.com/gabesharpton/100daysofcode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>100 Days of Code</h2>
                </a>
                <img src={daysrepo} alt="Hangman Game"></img>
                <button onClick={show}>See more</button>
              </div>
            )}
            content={hide => (
              <Modal className="modal-background" isOpen={true}>
                <h3>100 Days of Code</h3>
                <p>
                  This is a Github Repo that I have that contains all of my 100 Days of Code Markdown Blogs. I started the challenge during the COVID-19 quarentine to help expand my skills and give me something to look forward to every day. I am a life long learner so a challenge that is all about learning something new everyday is right up my alley. I try to challenge myself by learning something new each day or to brush up on a skill. It has been a fun experience and cant wait to see it grow to day 100!
                </p>
                
                <a
                  href="https://github.com/gabesharpton/100daysofcode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Checkout the repo here!</h2>
                </a>
               
                <button onClick={hide}>Close</button>
              </Modal>
            )}
          />
        </PROJECT> */}
      </PROJECTS>
    </>
  );
};
console.log(Bagjav);

export default Projects;