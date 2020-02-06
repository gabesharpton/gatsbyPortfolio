import React from "react";
import styled from "styled-components";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
  DiSass,
  DiPhotoshop,
  DiMongodb,
  DiDjango,
  DiNodejs,
  DiMysql,
  DiPostgresql,
  DiPython
} from "react-icons/di";
import { FaVuejs, FaBootstrap, FaLess, FaPython } from "react-icons/fa";

const Intro = styled.h2`
  font-size: 3rem;
  margin-bottom: 7%;
  font-family: "acme";
`;
const Lang = styled.div`
  background-color: mintcream;
  display: grid;
  font-size: 4vw;
  text-align: center;
  font-family: "Baloo Bhai", cursive;
`;

const Front = styled.div`
  background-color: ivory;
  display: grid;
  align-content: center;
  grid-template-columns: auto auto auto;
  animation: 0;
  font-size: 5rem;
  border: 1px solid black;
  margin: 1%;
`;

const Back = styled.div`
  background-color: ivory;
  display: grid;
  align-content: center;
  grid-template-columns: auto auto auto;
  font-size: 5rem;
  border: 1px solid black;
  margin: 1%;
`;

const Stack = styled.h3`
  font-family: bangers;
  letter-spacing: 1.5;
  font-size: 3rem;
`;

const LName = styled.h5`
  font-family: valera + round;
  margin-top: 20px;
`;

const Languages = () => (
  <Lang id="languages">
    <Intro>My favorite languages and frameworks:</Intro>

    <Stack>Front end</Stack>
    <Front id="front-end">
      <div>
        <DiJavascript1 className="icons" style={{ color: "black" }} />
        <LName>Javascript</LName>
      </div>
      <div>
        <DiHtml5 className="icons" style={{ color: "darkblue" }} />
        <LName>HTML</LName>
      </div>
      <div>
        <DiCss3 className="icons" style={{ color: "red" }} />
        <LName>CSS</LName>
      </div>
      <div>
        <DiReact className="icons" style={{ color: "#00CED1" }} />
        <LName>React</LName>
      </div>
      <div>
        <DiSass className="icons" style={{ color: "magenta" }} />
        <LName>SASS</LName>
      </div>
      <div>
        <FaVuejs className="icons" style={{ color: "mediumaquamarine" }} />
        <LName>Vue</LName>
      </div>
      <div>
        <FaBootstrap className="icons" style={{ color: "purple" }} />
        <LName>Bootstrap</LName>
      </div>
      <div>
        <FaLess className="icons" style={{ color: "darkblue" }} />
        <LName>LESS</LName>
      </div>
      <div>
        <DiPhotoshop className="icons" style={{ color: "purple" }} />
        <LName>Photoshop</LName>
      </div>
    </Front>
    <Stack style={{ paddingTop: 25 }}>Back end</Stack>
    <Back id="back-end">
      <div>
        <DiMongodb className="icons" style={{ color: "lightgreen" }} />
        <LName>MongoDB</LName>
      </div>
      <div>
        <DiDjango className="icons" style={{ color: "black" }} />
        <LName>Django</LName>
      </div>
      <div>
        <DiNodejs className="icons" style={{ color: "chartreuse" }} />
        <LName>Node.JS</LName>
      </div>
      <div>
        <DiPostgresql className="icons" style={{ color: "darkblue" }} />
        <LName>PostgreSQL</LName>
      </div>
      <div>
        <DiMysql className="icons" style={{ color: "darkslateblue" }} />
        <LName>MySQL</LName>
      </div>
      <div>
        <DiPython className="icons" style={{ color: "#4B8BBE" }} />
        <LName>Python</LName>
      </div>
    </Back>
  </Lang>
);

export default Languages;