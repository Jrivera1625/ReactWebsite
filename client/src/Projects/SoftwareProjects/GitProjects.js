/* eslint-disable */
import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { injectIntl, IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'
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

import { Form } from 'antd'

//import actions 
import { fetchUser, fetchUser1, fetchUser12 } from '../../actions/actions';

//import reducers/selectors
import getUserData from '../../reducers/reducers'

class GitProjects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  postData = () => {
    this.props.dispatch(fetchUser())
  }
  postData1 = () => {
    this.props.dispatch(fetchUser1())
  }
  postData12 = () => {
    this.props.dispatch(fetchUser12({ data: "jarvin" }))
  }
  createGitProjectsList = (a, b, v) => {
    //run some python code to grab projects then map to proper render es6
    let projects = [{ name: "project1", description: "Description", link: "dadada", demo: "dsdsd" }, { name: "project2", description: "Description", link: "aaaaa", demo: "11111d" }];
    let es6 = [];
    for (var i = 0; i < projects.length; i++) {
      es6.push(
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(http://media02.hongkiat.com/thumbs/250x160/react-js-web-developers-toolkit.jpg) center /cover"

            }}
          >
            {projects[i].name}
          </CardTitle>
          <CardText>{projects[i].description}</CardText>
          <CardActions border>
            <Button colored> {projects[i].link} </Button>
            <Button colored> Documentation </Button>
            <Button colored> Demo </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );

    }
    return es6
  }


  render() {
    let listGitProjects = this.createGitProjectsList(1, 3, 4)
    return (
      <IntlProvider locale="en">
        <div className="projects-tabs">
          {listGitProjects}
          
          <Button colored onClick={this.postData}> run python </Button>
          <Button colored onClick={this.postData1}> rasasdhon </Button>
          <Button colored onClick={this.postData12}> rasasdhon </Button>
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>

        </div>
      </IntlProvider>
    );
  }
}

//export default GitProjects;
const WrappedGitProjects = Form.create({})(GitProjects);
const mapStateToProps = state => ({
  ...state
})
WrappedGitProjects.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

WrappedGitProjects.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps)(
  injectIntl(withRouter(WrappedGitProjects))
);