import React from "react"
import {FaDev} from 'react-icons/fa'
import {GiBigGear} from 'react-icons/gi'
import styled from 'styled-components'


const FOOT = styled.div`
display: grid;
align-content: center;
grid-template-columns: auto auto;
text-align: center;
background-color: cornflowerblue;
justify-content: space-evenly;
padding: 5%;


a {
    font-size: 3vw;
    margin: 4%;
    
}
h3{
    font-size: 2vw;
    align-self: left;

}
button {
    font-size: 2vw;
    padding: 2%;
    position: relative;
}
`;

const Footer = () => (
  
      <FOOT id='foot'>
         <h2>Contact Info:</h2>
            <a id='resume' href='resume.pdf' download><button>Download my resume here!</button></a>
         <h3>Email: Gabriel.Sharpton@gmail.com</h3>
            <a id='dev-to-profile' href="https://dev.to/gabesharpton" target="_blank" rel="noopener noreferrer">Dev.to Blog<FaDev></FaDev></a>
         <h3>Phone: (512) 844 - 3330</h3>
            <a id='general-assembly-profile' href = "https://profiles.generalassemb.ly/profiles/gabriel-sharpton" target="_blank" rel="noopener noreferrer">GA Profile<GiBigGear></GiBigGear></a>
        
        </FOOT>

  
)



export default Footer