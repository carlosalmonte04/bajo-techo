import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { Magnify, Food } from 'mdi-material-ui'
import GridList from '../components/GridList.js'
import SearchBar from '../components/SearchBar.js'
import ResultsHeaderLeft from '../components/ResultsHeaderLeft.js'
import { Route } from 'react-router';
import AnimatedWrapper from "../HOCs/AnimatedWrapper";

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

class Listings extends Component {

	handleUpdateSearchInput = (searchInput) => {
	  this.setState({searchInput}) 
	}

	handleSubmit = (e) => {
	  e.preventDefault()

	  const location = AVAILABLE_PLACES[this.state.searchInput]
	  this.fetchListings(location)
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
			<div className="">
			  <AppBar
			  	className="header"
			    iconElementLeft={<ResultsHeaderLeft />}
			    iconElementRight={<div className="header-btns-container"><FlatButton className="publish-btn-header" label="Publicar" /><FlatButton className="signup-btn-header" label="Signup" onClick={() => this.props.history.push('/signup')}/><FlatButton className="login-btn-header" label="Login" onClick={() => this.props.history.push('/login')} /></div>}
			  />
			  <Route exact path="/listings/:city/:location" component={GridList}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		isLoading: state.uiReducer.isLoading,
		listings: state.listingsReducer.listings
	}
}

export default connect(mapStateToProps)(AnimatedWrapper(Listings))