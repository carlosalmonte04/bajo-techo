import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../components/vector-images/Logo'
import AnimatedWrapper from '../HOCs/AnimatedWrapper'
import signup from '../actions/ui/signup'

class SignUpComponent extends Component {

  state = {
    email: '',
    password: '',
    passwordConf: ''
  }

  componentDidMount() {
    this.emailInput.focus()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signup(this.state)
  }

  handleEmailChange = (e) => {
    const email = e.target.value
    this.setState({ email })
  }

  handlePasswordChange = (e) => {
    const password = e.target.value
    this.setState({ password })
  }

  handlePasswordConfirmationChange = (e) => {
    const passwordConf = e.target.value
    this.setState({ passwordConf })
  }

  render() {
    return (
      <div className="login-wrapper">
        <div className="login-title">
          <Logo width={100} height={40} className="login-logo" />
          <h1>Techo Unido</h1>
        </div>
        <div className="login-form-container">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="login-input-container">
              <label htmlFor="email-input">
                email
                <input id="email-input" ref={(e) => { this.emailInput = e }} type="email" onChange={this.handleEmailChange} value={this.state.email} />
              </label>
            </div>
            <div className="login-input-container">
              <label htmlFor="password-input">
                password
                <input id="password-input" type="password" pattern="^[A-Za-z0-9]{8,}" onChange={this.handlePasswordChange} value={this.state.password} />
              </label>
            </div>
            <div className="login-input-container">
              <label htmlFor="passwordConf-input">
                password confirmation
                <input id="passwordConf-input" type="password" pattern="^[A-Za-z0-9]{8,}" onChange={this.handlePasswordConfChange} value={this.state.passwordConf} />
              </label>
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

const { func } = PropTypes

SignUpComponent.propTypes = {
  signup: func.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    signup: user => dispatch(signup(user))
  }
}

export default connect(null, mapDispatchToProps)(AnimatedWrapper(SignUpComponent))
