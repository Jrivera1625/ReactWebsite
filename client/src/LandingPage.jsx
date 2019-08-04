import React, { Component } from "react";
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
  render() {
    return <div style = {{ width: '100%', margin: 'auto'}}>
    <Grid className ='landing-grid'>
    <Cell col = {12}>
    <img
     src = "https://miro.medium.com/max/984/1*W26o1ajbW7oc2BxLZm7_Aw.png"
     alt = "avatar"
     className = "avatar-img"
   />
   <div className="banner-text">
   <h1> Web Developer </h1>
   <hr/>
   <p> HTML/CSS | Bootstrap | JavaScript | React | NodeJS </p>
   <div className="social-links">
   <a href="http://linkedin.com" target ="_blank" rel="noopener nonreferrer">
   <i class="fa fa-linkedin" aria_hidden = "true" />
   </a>
   <a href="http://github.com" target ="_blank" rel="noopener nonreferrer">
   <i class="fa fa-github" aria-hidden = "true" />
   </a>

   </div>
  
  
  
  
  </div>
    </Cell>
    </Grid>
    </div>;
  }
}
export default LandingPage;
