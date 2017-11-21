import React, { Component } from 'react';
import Router from 'react-router';
import { Link } from 'react-router-dom'
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Logo from '../components/Logo.js'
import AnimatedWrapper from '../HOCs/AnimatedWrapper.js'


class LoginComponent extends Component {

  state = {
    email: '',
    password : ''
  }

  handleLogin = (e) => {
    e.preventDefault()
    console.log("Hello")
  }

  handleEmailChange = (e) => {
    const email = e.target.value
    this.setState({email}) 
  }

  handlePasswordChange = (e) => {
    const password = e.target.value
    this.setState({password}) 
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
          <form className="login-form">
            <div className="login-input-container">
              <label>email</label>
              <input ref="emailInput" type="email" />
            </div>
            <div className="login-input-container">
              <label>password</label>
              <input type="password" pattern="^[A-Za-z0-9]{8,}"/>
            </div>
            <input className="login-form-btn" type="submit" value="LOG IN" />
          </form>
          <div className="helper-links">
            <Link to="/" className="helper-link" >Home</Link>
            <Link to="/" className="helper-link" >Olvidaster tu contraseña</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default AnimatedWrapper(LoginComponent)