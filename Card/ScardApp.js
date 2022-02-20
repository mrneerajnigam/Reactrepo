import sCard from "./Scard";
import React, {Component} from "react";

import Scard from './Scard.js';
import './Scard.css';
import js from './images/jslogo.png';
import node from './images/node logo.png';
import react from './images/react logo.png';


class ScardApp extends Component{
    render(){
        return( <>
            
            
        <div className="Scard-App">
            
             <Scard  heading2= "JavaScript" para=" This is the paragraphs of JAvaScript" imgs= {js}  btn="Read More" />

             <Scard  heading2= "React js"   para=" This is the paragraphs of React js" imgs= {react} btn="Read More" /> 

             <Scard  heading2= "Node js"    para=" This is the paragraphs of Node js"  imgs ={node} btn="Read More" />

        </div>


            </>

        )
    }
}

export default ScardApp;
