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
        <div style={{ textAlign: "center" }}>
          <header class="pt-5 pb-3">
            <small style={{ fontFamily: "suisse intl, Helvetica, microsoft yahei, sans-serif" }} >
              ELEC 391
</small>
            <h1 class="bold" style={{
              fontSize: "3em", fontWeight: "700"
              , fontFamily: "suisse intl, Helvetica, microsoft yahei,sans-serif"
            }} >Wind Turbine Design Report</h1>
            <p  class = "container narrow" style={{ borderBottom: '1px solid', textAlign: "center" }}>Created 2019-04-18</p>
          </header>
          <div class="container narrow">
          <iframe src = "../../../../../Report.pdf" style={{width:"100%",height:"700px", overflow:"auto"}} >
          </iframe>
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
          </div>

    );
  }
}
export default WindTurbine;
