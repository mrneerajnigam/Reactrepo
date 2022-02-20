import React, {Component} from "react";
import './Scard.css';
import jslogo from './images/jslogo.png';

class Scard extends Component{

        constructor(props){
            super(props);
        }

    render(){
        return(<>


         <div className="Scard-main-container">
            <div className="Scard-div-container">
             <img  src={this.props.imgs}  alt="image loading" />
             <h2> {this.props.heading2} </h2>
             <p> {this.props.para} These are the three technology which can boost you in Web World Learn And Makes Difference in the World of Web Technology.</p> 
             <button> {this.props.btn}  </button>
           </div>                                  

          

        </div>
            
            </>
                  
        )
    }
}


export default Scard;