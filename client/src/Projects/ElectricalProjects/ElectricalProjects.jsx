/* eslint-disable */
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

 import WindTurbine from './WindTurbine';

class ElectricalProjects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
      }

      toggleCategories() {
        if (this.state.activeTab === 0) {
          return (
            <div className>
            asdfasdfasdf
            </div>
          );
        } else if (this.state.activeTab === 1) {
          return (
          <WindTurbine/>
          
          );
        } 
      }


  render() {
    return  <div className="projects-tabs">
    <Tabs
      activeTab={this.state.activeTab}
      onChange={tabId => this.setState({ activeTab: tabId })}
      ripple
    > 
      <Tab  style={{fontSize:"11px"}}> Robot</Tab>
      <Tab  style={{fontSize:"11px"}}> Maximum Power tracking wind turbine</Tab>
    </Tabs>


   <div className="content"> {this.toggleCategories()}</div>
      
    
  </div>;
  }
}
export default ElectricalProjects;
