import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { Magnify, Food } from 'mdi-material-ui'
import GridList from '../components/GridList.js'
import SearchBar from '../components/SearchBar.js'
import Logo from '../components/Logo.js'
import { Route } from 'react-router';
import NProgress from 'nprogress';
import AnimatedWrapper from "../HOCs/AnimatedWrapper";


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

class IndexComponent extends Component {

	state = {
		listings: [],
		isLoading: false
	}

	handleUpdateSearchInput = (searchInput) => {
	  this.setState({searchInput}) 
	}

	handleSubmit = (e) => {
	  e.preventDefault()

	  const location = this.props.AVAILABLE_PLACES[this.state.searchInput]
	  this.props.fetchListings(location)
	}

	componentDidMount() {
		const strictBounds = true
		const language = 'sp'
		const componentRestrictions = {country: 'do'}
		// const autocomplete = new google.maps.places.Autocomplete(this.refs.searchTextField, { language, strictBounds});
		// autocomplete.addListener('place_changed', () => {
			// this.fetchListings()
		// })
		// this.getAvailablePlaces()
	}

	render() {
		return (
			<div className="index-wrapper">
			  <AppBar
			  	className="header transparent"
			    iconElementLeft={<Link to="/" className="logo-container-header" ><Logo height={20} width={100} className="logo-header" /><h4>Techo Unido</h4></Link>}
			    iconElementRight={<div className="header-btns-container"><FlatButton className="publish-btn-header" label="Publicar" /><FlatButton className="signup-btn-header" label="Signup" onClick={() => this.props.history.push('/signup')}/><FlatButton className="login-btn-header" label="Login" onClick={() => this.props.history.push('/login')} /></div>}
			  />
			  <div className="form-container">
			  	<div className="slogan-container">
				  	<div className="slogan">
				  		<h1>Dile a tu mamá que te vas.</h1>
				  	</div>
			  	</div>
				  <form className="search-input-main-container" onSubmit={(e) => this.handleSubmit(e)}>
				  	<SearchBar handleUpdateSearchInput={this.handleUpdateSearchInput} />
				  </form>
				</div>
			</div>
		)
	}
}


export default AnimatedWrapper(IndexComponent)