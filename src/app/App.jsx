import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route } from 'react-router'
import fetchUser from './actions/ui/fetchUser'
import Welcome from './pages/Welcome'
import Listings from './pages/Listings'
import Listing from './pages/Listing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import User from './pages/User'

class App extends Component {

  componentDidMount() {
    console.log("WILL FETCH USER")
    const token = localStorage.getItem('token')
    if (token) this.props.fetchUser(token)
  }

  render() {
    return (
      <div className="main-wrapper">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/listings/browse/:city/:location" history={this.props.history} component={Listings} />
        <Route exact path="/listings/show/:listingId" history={this.props.history} component={Listing} />
        <Route exact path="/users/:userId/" history={this.props.history} component={User} />
        <Route path="/login" history={this.props.history} component={Login} />
        <Route path="/signup" history={this.props.history} component={Signup} />
      </div>
    )
  }
}

const { shape, func } = PropTypes

App.propTypes = {
  history: shape([]).isRequired,
  fetchUser: func.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: token => dispatch(fetchUser(token))
  }
}

export default connect(null, mapDispatchToProps)(App)
