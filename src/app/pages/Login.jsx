import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../components/vector-images/Logo'
import AnimatedWrapper from '../HOCs/AnimatedWrapper'
import login from '../actions/ui/login'
import fetchUser from '../actions/ui/fetchUser'

class LoginComponent extends Component {

  state = {
    email: '',
    password: ''
  }

  componentDidMount() {
    this.emailInput.focus()
  }

  handleEmailChange = (e) => {
    const email = e.target.value
    this.setState({ email })
  }

  handlePasswordChange = (e) => {
    const password = e.target.value
    this.setState({ password })
  }

  handleLogin = (token) => {
    localStorage.setItem('token', token)
    this.props.fetchUser(token)
      .then(() => this.props.history.push('/'))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state)
      .then((res) => {
        res.error ? this.renderError(res.error) : this.handleLogin(res.token)
      })
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
                <input id="email-input" ref={(e) => { this.emailInput = e }} type="email" onChange={this.handleEmailChange} value={this.state.email} required />
              </label>
            </div>
            <div className="login-input-container">
              <label htmlFor="password-input">
                password
                <input id="password-input" type="password" pattern="^[A-Za-z0-9]{8,}" onChange={this.handlePasswordChange} value={this.state.password} required />
              </label>
            </div>
            <input className="login-form-btn" type="submit" value="LOG IN" />
          </form>
          <div className="helper-links">
            <Link to="/" className="helper-link" >Home</Link>
            <Link to="/" className="helper-link" >Olvidaste tu contraseña</Link>
          </div>
        </div>
      </div>
    )
  }
}

const { shape, func } = PropTypes

LoginComponent.propTypes = {
  history: shape({
    push: func.isRequired
  }).isRequired,
  login: func.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    login: user => dispatch(login(user)),
    fetchUser: token => dispatch(fetchUser(token))
  }
}
export default connect(null, mapDispatchToProps)(AnimatedWrapper(LoginComponent))