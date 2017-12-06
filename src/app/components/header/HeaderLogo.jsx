import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Logo from '../vector-images/Logo'

const HeaderLogo = (props) => {
  return (
    <Link to="/" className="logo-container-header" >
      <Logo height={20} width={100} className="logo-header" />
      <h4 className={`${props.isLogoColored ? 'colored' : ''}`}>Techo Unido</h4>
    </Link>
  )
}

const { bool } = PropTypes

HeaderLogo.propTypes = {
  isLogoColored: bool
}

export default HeaderLogo