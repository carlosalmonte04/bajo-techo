import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { Magnify, Food } from 'mdi-material-ui'
import GridList from '../components/GridList.js'
import { Route } from 'react-router';
import NProgress from 'nprogress';
import AVAILABLE_PLACES from '../../assets/AVAILABLE_PLACES.js'
import AutoComplete from 'material-ui/AutoComplete';
import logo from '../../assets/images/logo.svg'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

export default class AppBarExampleIcon extends Component {

	state = {
		listings: [],
		availablePlaces: AVAILABLE_PLACES,
		searchInput: '',
		isLoading: false
	}

	handleUpdateSearchInput = (searchInput) => {
	  this.setState({searchInput}) 
	}

	fetchListings(location) {
		if (location) { // special case for todos los sectores
			NProgress.start()
			this.setState({listings: [], isLoading: true})
			this.props.history.push('/results')
		  fetch(`${process.env.API_URL}/listings/${location}`)
		  .then(res => res.json())
		  .then(res => { console.log("RES!?", res); return res} )
		  .then(response => this.setState({listings: response.listings, isLoading: false}))
		}
	}

	handleSubmit = (e) => {
	  e.preventDefault()

	  const location = this.state.availablePlaces[this.state.searchInput]
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
			<div className="index-wrapper">
			  <AppBar
			  	className="header"
			    title="Bajo Techo"
			    iconElementLeft={<div className="logo-container" onClick={() => this.props.history.push('/')}><div className="logo" style={{backgroundImage: `url(${logo})` }} /></div>}
			    iconElementRight={<div className="header-btns-container"><FlatButton className="publish-btn-header" label="Publicar" /><FlatButton className="signup-btn-header" label="Signup" onClick={() => this.props.history.push('/signup')}/><FlatButton className="login-btn-header" label="Login" onClick={() => this.props.history.push('/login')} /></div>}
			  />
			  <div className="form-container">
			  	<div className="logo-container">
			  		<div className="logo" style={{backgroundImage: `url(${logo})` }} />
			  	</div>
				  <h1>0 contrato, 0 comisíon, 0 'ayudante'.</h1>
				  <form className="search-input-main-container" onSubmit={(e) => this.handleSubmit(e)}>
					  <div className="row-wrap">
					  	<Magnify className="icon" />
	  	        <AutoComplete
	  	        	id="autocomplete"
	  	        	ref="locationInput"
		  	        className="search-input-main" 
    						dataSource={Object.keys(this.state.availablePlaces)}
    						filter={AutoComplete.caseInsensitiveFilter}
    						fullWidth={true}
    						onUpdateInput={this.handleUpdateSearchInput}
    						searchText={this.state.searchInput}
							/>
								{/*<input ref="searchTextField" type="text" className="search-input-main" placeholder="Intenta 'La Trinitaria'" />*/}
					  	<div className="search-input-main-btn-container">
					  		<FlatButton className="search-input-main-btn"label="Buscar" type="submit"/>
					  	</div>
					  </div>
				  </form>
				</div>
				<Route exact path="/results" render={(props) => <GridList isLoading={this.state.isLoading} listings={this.state.listings}/> } />
			</div>
		)
	}
}