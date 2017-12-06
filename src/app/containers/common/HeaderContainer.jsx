import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import resetUser from '../../actions/ui/resetUser'
import HeaderLogo from '../../components/header/HeaderLogo'
import HeaderSearchBar from '../../components/header/HeaderSearchBar'

const Header = (props) => {

  function handleLogOut() {
    localStorage.removeItem('token')
    props.resetUser()
    props.history.push('/')
  }

  function renderOptionBtns() {
    return (
      <div className="header-btns-container">
        <FlatButton className="publish-btn-header" label="Log out" onClick={handleLogOut} />
      </div>
    )
  }

  function renderAuthBtns() {
    return (
      <div className="header-btns-container">
        <FlatButton className="signup-btn-header" label="Signup" onClick={() => props.history.push('/signup')} />
        <FlatButton className="login-btn-header" label="Log In" onClick={() => props.history.push('/login')} />
      </div>
    )
  }

  return (
    <section className="header-container">
      <AppBar
        className={props.className}
        iconElementLeft={
          <div style={{ display: 'flex', flexDirection: 'row', alignitems: 'center' }}>
            <HeaderLogo isLogoColored={props.isLogoColored} />
            {props.location.pathname !== '/' ? <HeaderSearchBar /> : null}
          </div>}
        iconElementRight={localStorage.getItem('token') ? renderOptionBtns() : renderAuthBtns()}
      />
    </section>
  )
}

const { shape, string, bool } = PropTypes

Header.propTypes = {
  location: shape({
    pathname: string.isRequired
  }).isRequired,
  history: shape([string]).isRequired,
  className: string,
  isLogoColored: bool
}

Header.defaultProps = {
  className: 'header'
}

function mapDispatchToProps(dispatch) {
  return {
    resetUser: token => dispatch(resetUser())
  }
}

export default connect(null, mapDispatchToProps)(Header)
