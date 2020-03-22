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
import { fetchGitUserData } from '../../actions/actions';

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
  renderGitData = () => {
    this.props.dispatch(fetchGitUserData())
  }
  createGitProjectsList = (a, b, v) => {
    var gitDataPull = a.gitData;
    if (gitDataPull != undefined) {
      var gitProjectsArr = JSON.parse(gitDataPull);
      let CardComponentArr = [];
      for (var i = 0; i < gitProjectsArr.length; i++) {
        CardComponentArr.push(
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://media02.hongkiat.com/thumbs/250x160/react-js-web-developers-toolkit.jpg) center /cover"

              }}
            >
              {gitProjectsArr[i].name}
            </CardTitle>
            <CardText>{gitProjectsArr[i].description}</CardText>
            <CardText>{gitProjectsArr[i].language}</CardText>
            <CardActions border>
              <Button colored>  {gitProjectsArr[i].svn_url} </Button>
              <Button colored>  {gitProjectsArr[i].language} </Button>

            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        );



      }
      return CardComponentArr;

    }
    else {
      return (
        <div>
          Component did not mount
        </div>
      )
    }
    //console.log(yen.length);
    /* let projects = [{ name: "project1", description: "Description", link: "dadada", demo: "dsdsd" }, { name: "project2", description: "Description", link: "aaaaa", demo: "11111d" }];
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
 
     } */
    // return es6
  }


  render() {
    let listGitProjects = this.createGitProjectsList(this.props.gitData, 3, 4)
    return (
      <IntlProvider locale="en">
        <div className="projects-tabs">
          {listGitProjects}
          <Button colored onClick={this.renderGitData}> FetchGitData </Button>

        </div>
      </IntlProvider>
    );
  }
}

//export default GitProjects;
const WrappedGitProjects = Form.create({})(GitProjects);
const mapStateToProps = state => {
  return {
    gitData: state.gitReducer
  }

}
WrappedGitProjects.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

WrappedGitProjects.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps)(
  injectIntl(withRouter(WrappedGitProjects))
);