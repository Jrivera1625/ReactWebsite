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

import Resume from "./Resume";
import ElectricalProjects from "./ElectricalProjects";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://media02.hongkiat.com/thumbs/250x160/react-js-web-developers-toolkit.jpg) center /cover"
              }}
            >
              Java Project#1
            </CardTitle>
            <CardText>Sample Project text</CardText>
            <CardActions border>
              <Button colored> GitHub </Button>
              <Button colored> Documentation </Button>
              <Button colored> Demo </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://media02.hongkiat.com/thumbs/250x160/react-js-web-developers-toolkit.jpg) center /cover"
              }}
            >
              Java Project#1
            </CardTitle>
            <CardText>Sample Project text</CardText>
            <CardActions border>
              <Button colored> GitHub </Button>
              <Button colored> Documentation </Button>
              <Button colored> Demo </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://media02.hongkiat.com/thumbs/250x160/react-js-web-developers-toolkit.jpg) center /cover"
              }}
            >
              Java Project#1
            </CardTitle>
            <CardText>Sample Project text</CardText>
            <CardActions border>
              <Button colored> GitHub </Button>
              <Button colored> Documentation </Button>
              <Button colored> Demo </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://media02.hongkiat.com/thumbs/250x160/react-js-web-developers-toolkit.jpg) center /cover"
              }}
            >
              Java Project#1
            </CardTitle>
            <CardText>Sample Project text</CardText>
            <CardActions border>
              <Button colored> GitHub </Button>
              <Button colored> Documentation </Button>
              <Button colored> Demo </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://media02.hongkiat.com/thumbs/250x160/react-js-web-developers-toolkit.jpg) center /cover"
              }}
            >
              Java Project#2
            </CardTitle>
            <CardText>Sample Project text</CardText>
            <CardActions border>
              <Button colored> GitHub </Button>
              <Button colored> Documentation </Button>
              <Button colored> Demo </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return <ElectricalProjects/>;
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab> Java </Tab>
          <Tab> React </Tab>
          <Tab> ELEC </Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content"> {this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
