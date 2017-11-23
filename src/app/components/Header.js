import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Logo from '../components/vector-images/Logo.js'
import ListingsHeaderLeft from '../components/ListingsHeaderLeft.js'
import FlatButton from 'material-ui/FlatButton';

const Header = (props) => {

	function renderOptionBtns() {
		return (
			<div className="header-btns-container">
		    <FlatButton className="publish-btn-header" label="Publicar" />
		    <FlatButton className="publish-btn-header" label="Log out" onClick={() => !localStorage.removeItem('token') && Header(props)} />
    	</div>
    )
	}

	function renderAuthBtns() {
		return (
			<div className="header-btns-container">
		    <FlatButton className="publish-btn-header" label="Publicar" />
	  		<FlatButton className="signup-btn-header" label="Signup" onClick={() => props.history.push('/signup')}/>
    		<FlatButton className="login-btn-header" label="Log In" onClick={() => props.history.push('/login')} />
    	</div>
		)
	}

	function renderSearchbar() {
		return (
			<div>
				<ListingsHeaderLeft />
			</div>
		)
	}

	return (
		<section className="header-container">
		  <AppBar
		  	className={props.className}
		    iconElementLeft={
		    	<div style={{display: 'flex', flexDirection: 'row', alignitems: 'center'}}>
			    	<Link to="/" className="logo-container-header" >
			    		<Logo height={20} width={100} className="logo-header" />
			    		<h4>Techo Unido</h4>
			    	</Link>
		    		{props.location.pathname != "/" ? renderSearchbar() : null}
		    </div>}
		    iconElementRight={ !!localStorage.getItem('token') ? renderOptionBtns() : renderAuthBtns() }
		  />
		</section>
	)
}

export default Header