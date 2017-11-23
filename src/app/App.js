import React, { Component } from 'react';
import { render } from 'react-dom';
import { createHashHistory, useBasename } from 'history';
import { Route } from 'react-router';
import "../assets/styles/app.less";
import NProgress from 'nprogress';
import Welcome from './pages/Welcome.js'
import Listings from './pages/Listings.js'
import Listing from './pages/Listing.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import AVAILABLE_PLACES from '../assets/AVAILABLE_PLACES.js'
import TransitionGroup from "react-transition-group/TransitionGroup";

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};


export default class App extends Component {

  state = {
    listings: [],
    isLoading: false
  }

  isLoggedIn = () => {
    return !!localStorage.getItem('token')
  }

  render() {
    return (
      <div className="main-wrapper">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/listings/browse/:city/:location" history={this.props.history}  component={Listings} />
        <Route exact path="/listings/show/:listingId" history={this.props.history}  component={Listing} />
        <Route path="/login" history={this.props.history} component={Login} />
        <Route path="/signup" history={this.props.history} component={Signup}  /> 
      </div>
    )
  }
}