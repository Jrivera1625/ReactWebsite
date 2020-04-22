import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

import Jumbotron from 'react-bootstrap/Jumbotron';
/* eslint-disable */
import Container from 'react-bootstrap/Carousel';
import load from 'C:/Users/jrive/Desktop/Website/ReactWebsite/client/src/pspdfkit';

class WindTurbine extends Component {
  render() {
    return (
  
      <div>
          <div class="container narrow">
            <iframe src = "https://drive.google.com/file/d/1veg42QAzzyJkUrUf946fi4mCHaUWvOBT/preview" style={{width:"100%",height:"700px", overflow:"auto"}} >
          </iframe> 
     {/*     <object data="https://drive.google.com/file/d/1veg42QAzzyJkUrUf946fi4mCHaUWvOBT/preview"  width="600" height="500">    
           <embed src="https://drive.google.com/file/d/1veg42QAzzyJkUrUf946fi4mCHaUWvOBT/preview" width="600px" height="500px"/>       
             <p>This browser does not support PDFs. Please download the PDF to view it:
                <a href="https://drive.google.com/file/d/1veg42QAzzyJkUrUf946fi4mCHaUWvOBT/preview">View the PDF</a></p>     
             
                </object> */}
{/*            <ul style={{ listStyleType: "none", lineHeight: '1.1', textAlign: "left" }} >
              <li><a style={{color:"blue"}} href ="youtube.com">1.0 Project Description </a></li>

              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>


          </ul> */}
          </div>
          </div>

    );
  }
}
export default WindTurbine;
