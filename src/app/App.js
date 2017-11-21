import React, { Component } from 'react';
import { render } from 'react-dom';
import { createHashHistory, useBasename } from 'history';
import { Route } from 'react-router';
import "../assets/styles/app.less";
import NProgress from 'nprogress';
import Index from './pages/Index.js'
import Listings from './pages/Listings.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import AVAILABLE_PLACES from '../assets/AVAILABLE_PLACES.js'
import TransitionGroup from "react-transition-group/TransitionGroup";

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  console.log("Children ARR", childrenArray)
  return childrenArray[0] || null;
};


export default class App extends Component {

  state = {
    listings: [],
    isLoading: false
  }

  render() {
    return (
      <div className="main-wrapper">
        <Route exact path="/" render={ (props) => <TransitionGroup><Index {...props} /></TransitionGroup> }/>
        <Route path="/listings" history={this.props.history} render={ (props) => <TransitionGroup><Listings {...props} /></TransitionGroup> }/>
        <Route path="/login" history={this.props.history} render={ (props) => <TransitionGroup><Login {...props} /></TransitionGroup> }/>
        <Route path="/signup" history={this.props.history} component={Signup}  /> 
      </div>
    )
  }
}