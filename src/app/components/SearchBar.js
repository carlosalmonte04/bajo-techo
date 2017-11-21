import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import AVAILABLE_PLACES from '../../assets/AVAILABLE_PLACES.js'
import { Magnify, Food } from 'mdi-material-ui'
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import fetchListings from '../actions/listings/fetchListings.js'
import startProgressBar from '../actions/ui/startProgressBar.js'

const availablePlaces = Object.keys(AVAILABLE_PLACES)

const menuStyle = {
	transition: 'all 0.3s ease',
	fontSize: 22
}

const listStyle = {
	fontSize: 22
}

class SearchBar extends Component {

	state = {
		listings: [],
		searchInput: '',
		isLoading: false,
		locationOptions: availablePlaces
	}

	handleInputChange = (e) => {
		const searchInput = e.target.value
		this.setState({searchInput})
	}

	render() {
		const optionsList = this.state.locationOptions.filter(location => location.toLowerCase().includes(this.state.searchInput.toLowerCase()))
		const optionsListHTML = optionsList.map((location, key) => <li key={key} id={location} className="option-container"> <Link to={`/listings/santiago/${location}`} className="option">{location}</Link></li>)
		return (
		  <div className="row-wrap">
		  	<Magnify className="icon" />
		  		<input className="search-input" onChange={this.handleInputChange} value={this.state.searchInput} placeholder={`Intenta '${availablePlaces[Math.floor(Math.random() * availablePlaces.length)]}'`}/>
		  		<ul className="options-container">
		  			{optionsListHTML.length >= 1 ? optionsListHTML : <li className="option-container"><span className="option disabled">No resultados</span></li>}
		  		</ul>
					{/*<input ref="searchTextField" type="text" className="search-input-main" placeholder="Intenta 'La Trinitaria'" />*/}
		  	<div className="search-input-main-btn-container">
		  		<FlatButton className="search-input-main-btn"label="Buscar" type="submit"/>
		  	</div>
		  </div>
		)
	}
}


const style = {
  height: 400,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

function mapDispatchToProps(dispatch) {
	return {
		startProgressBar: () => dispatch(startProgressBar()),
		fetchListings: (location) => dispatch(fetchListings(location))
	}
}

export default connect(null, mapDispatchToProps)(SearchBar)


