import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "../HomePage";
import NavBar from "../NavBar";
import Resume from "../Resume";
import Projects from "../Projects/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "../Main";
import styles from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }
  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Jarvin Rivera" scroll>
            <Navigation>
              <Link to="/Resume">Resume</Link>
              <Link to="/About">About</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Jarvin Rivera">
            <Navigation>
              <Link to="/Resume">Resume</Link>
              <Link to="/About">About</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
