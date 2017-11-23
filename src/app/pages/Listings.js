import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { Magnify, Food } from 'mdi-material-ui'
import GridList from '../components/GridList.js'
import Header from '../components/Header.js'
import { Route } from 'react-router';
import AnimatedWrapper from "../HOCs/AnimatedWrapper";
import Toolbar from '../components/Toolbar.js'
import ListingsTitle from '../components/ListingsTitle.js'
import fetchListings from '../actions/listings/fetchListings.js'
import AVAILABLE_PLACES from '../../assets/AVAILABLE_PLACES.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoadingGrid from '../components/LoadingGrid.js'
import Listing from '../components/Listing.js'
import Gridlist from '../components/Gridlist.js'

class Listings extends Component {

	handleUpdateSearchInput = (searchInput) => {
	  this.setState({searchInput}) 
	}

	handleSubmit = (e) => {
	  e.preventDefault()

	  const location = AVAILABLE_PLACES[this.state.searchInput]
	  this.fetchListings(location)
	}

	state = {
		location: ''
	}

	// componentDidUpdate() {
	// 	if (!this.props.isLoading) {
 //    	TweenMax.staggerFromTo(document.getElementsByClassName('listing-container listing'), 0.3, {opacity: 0}, {opacity: 1}, 0.1)
 //    }
	// }


	componentWillReceiveProps(nextProps) {
	    if (nextProps.match.params.location != this.props.match.params.location) {
				const { location } = nextProps.match.params
				if (AVAILABLE_PLACES[location]) {
					this.props.fetchListings(AVAILABLE_PLACES[location])
					.then(() => document.title = location)
				}
	    }
	}

	componentWillUnmount() {
	    console.log("UNMOUNTING PROPS", this.props)
	}

	componentDidMount() {
		const { location } = this.props.match.params
		if (AVAILABLE_PLACES[location] && this.props.showingLocation != AVAILABLE_PLACES[location]) {
			console.log("WILL FETCH")
			this.props.fetchListings(AVAILABLE_PLACES[location])
			.then(() => document.title = location)
		}
	}

	render() {
	  const ListingsHTML = this.props.listings.map((listing, i) => <div key={i} className="listing-outer-container"><Listing key={i} listing={listing} history={this.props.history}/></div>)
		return (
	    <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={100} transitionLeaveTimeout={100}>
				<Header className={'header'} location={this.props.location} history={this.props.history} />
				<div className="results-container-inner" >
		    	<ListingsTitle match={this.props.match} />
				  <Toolbar />
				  <Gridlist isLoading={this.props.isLoading} listings={this.props.listings} history={this.props.history}/>
		    </div>
	    </ReactCSSTransitionGroup>
		)
	}
}

function mapStateToProps(state) {
	return {
		isLoading: state.uiReducer.isLoading,
		listings: state.listingsReducer.listings,
		showingLocation: state.listingsReducer.showingLocation,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchListings: (locationId) => dispatch(fetchListings(locationId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedWrapper(Listings))