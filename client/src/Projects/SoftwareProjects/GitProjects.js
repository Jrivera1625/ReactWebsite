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
import Carousel from 'react-bootstrap/Carousel';
//import actions 
import { fetchGitUserData } from '../../actions/actions';

//import reducers/selectors
import getUserData from '../../reducers/reducers'

class GitProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      isLoaded: true

    };
  }
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
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
  createGitProjectsList = (projects) => {
    var gitDataPull = projects.gitData;
    if (gitDataPull != undefined) {
      var gitProjectsArr = JSON.parse(gitDataPull);
      let CardComponentArr = [];
   /*    for (var i = 0; i < gitProjectsArr.length; i++) {
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
          
          
            
          
         ); */
     var displayProjects = gitProjectsArr.map((GitProject, index) =>{
       return(
        
         <div key={GitProject.name + index} style = {{margin:"10px"}}>

         <div class="clash-card barbarian">
     
      <div class="clash-card__level clash-card__level--barbarian">Level 4</div>
      <div class="clash-card__unit-name">The Barbarian</div>
      <div class="clash-card__unit-description">
        The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
      </div>

      <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
        <div class="one-third">
          <div class="stat">20<sup>S</sup></div>
          <div class="stat-value">Training</div>
        </div>

        <div class="one-third">
          <div class="stat">16</div>
          <div class="stat-value">Speed</div>
        </div>


      </div>

       </div> 
         </div>
      
      
      )
        
       }
      ) 
    }
    return displayProjects
   // return CardComponentArr;


  }



  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      isLoaded: false
    });
  };

  componentDidMount() {
    this.wait(2000);
    this.renderGitData();

  }

  render() {
    let listGitProjects = this.createGitProjectsList(this.props.gitData)
    // this.renderGitData();
    if (this.state.isLoaded) {
      return (
        <Grid>
           <Cell col={6}>
        <div className = "jumbo">
        <div class="spinner-border">
          <span class="sr-only">Loading...</span>
        </div>
        </div>
        </Cell>
        </Grid>
      );
    } else {

      return (
         <IntlProvider>
          <div className="wrapper">
            {listGitProjects}
          </div>
         </IntlProvider>
       
      );
    }
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