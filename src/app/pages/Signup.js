import React, { Component } from 'react';
import Router from 'react-router';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Logo from '../components/vector-images/Logo.js'
import AnimatedWrapper from '../HOCs/AnimatedWrapper.js'
import signup from '../actions/ui/signup.js'


class SignupComponent extends Component {

  state = {
    email: '',
    password : '',
    passwordConfirmation : ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signup(this.state)
  }

  handleEmailChange = (e) => {
    const email = e.target.value
    this.setState({email}) 
  }

  handlePasswordChange = (e) => {
    const password = e.target.value
    this.setState({password}) 
  }

  handlePasswordConfirmationChange = (e) => {
    const passwordConfirmation = e.target.value
    this.setState({passwordConfirmation}) 
  }

  componentDidMount() {
      this.refs.emailInput.focus()
  }

  render() {
    return(
      <div className="login-wrapper">
        <div className="login-title">
          <Logo width={100} height={40} className="login-logo" />
          <h1>Techo Unido</h1>
        </div>
        <div className="login-form-container">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="login-input-container">
              <label>email</label>
              <input ref="emailInput" type="email" onChange={this.handleEmailChange}/>
            </div>
            <div className="login-input-container">
              <label>password</label>
              <input type="password" pattern="^[A-Za-z0-9]{8,}" onChange={this.handlePasswordChange}/>
            </div>
            <div className="login-input-container">
              <label>password confirmation</label>
              <input type="password" pattern="^[A-Za-z0-9]{8,}" onChange={this.handlePasswordConfirmationChange}/>
            </div>
            <input className="login-form-btn" type="submit" value="REGISTRATE" />
          </form>
          <div className="helper-links">
            <Link to="/" className="helper-link" >Home</Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signup: (user) => dispatch(signup(user))
  }
}
export default connect(null, mapDispatchToProps)(AnimatedWrapper(SignupComponent))









