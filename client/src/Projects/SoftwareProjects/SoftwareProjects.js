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
import GitProjects from './GitProjects';
import {injectIntl,IntlProvider} from 'react-intl'

class SoftwareProjects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
      }

      toggleCategories() {
        if (this.state.activeTab === 0) {
          return (
            <div className>
            Anyother type of projects???
            </div>
          );
        } else if (this.state.activeTab === 1) {
          return (
            <IntlProvider locale="en"><GitProjects /></IntlProvider>
          
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
      <Tab> Random software Projects</Tab>
      <Tab> Git Projects</Tab>
    </Tabs>

    <Grid>
      <Cell col={15}>
        <div className="content"> {this.toggleCategories()}</div>
      </Cell>
    </Grid>
  </div>;
  }
}
export default SoftwareProjects;
