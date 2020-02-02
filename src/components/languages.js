import React from "react";
import './style/languages.css';
import styled from 'styled-components';
import { DiJavascript1, DiHtml5, DiCss3, DiReact, DiSass, DiPhotoshop, DiMongodb, DiDjango, DiNodejs, DiMysql, DiPostgresql } from 'react-icons/di'
import {FaVuejs, FaBootstrap, FaLess} from 'react-icons/fa'


const Intro = styled.h2`    font-size: 2.5rem;
`
const Lang = styled.div`
    background-color: mintcream;
    display: grid;
    font-size: 4vw;
    text-align: center;
    font-family: "Baloo Bhai", cursive;
`

const Front = styled.div`
    background-color: ivory;
    display: grid;
    align-content: center;
    grid-template-columns: auto auto auto;
    animation: 0;
    padding-left: 20%;
    font-size: 5rem;

    `

const Back = styled.div`
    background-color: ivory;
    display: grid;
    align-content: center;
    grid-template-columns: auto auto auto;
    padding-left: 20%;
    font-size: 5rem;
`

const Languages = () => (
  <Lang id="languages">
      <Intro>My favorite languages and frameworks:</Intro>

      <Front id='front-end'>
    
    <DiJavascript1 className="icons" style={{color: 'black'}}/>
    <DiHtml5 className="icons" style={{color: 'blue'}}/>
    <DiCss3 className="icons" style={{color: 'red'}} />
    <DiReact className="icons" style={{color: 'blue'}} />
    <DiSass className="icons" style={{color: 'magenta'}}/>
    <FaVuejs className="icons" style={{color: 'aquamarine'}}/>
    <FaBootstrap className="icons" style={{color: 'purple'}}/>
    <FaLess className="icons" style={{color: 'darkblue'}}/>
    <DiPhotoshop className="icons" style={{color: 'purple'}}/>
      </Front>
      <Back id="back-end">
<DiMongodb className="icons" style={{color: 'lightgreen'}}/>
<DiDjango className="icons" style={{color: 'black'}}/>
<DiNodejs className="icons" style={{color: 'chartreuse'}}/>
<DiPostgresql className="icons" style={{color: 'darkblue'}}/>
<DiMysql className="icons" style={{color: 'darkslateblue'}}/>
      </Back>
   
    </Lang>
)



export default Languages