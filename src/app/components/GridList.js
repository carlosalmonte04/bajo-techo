import React, { Component } from 'react';
import { connect } from 'react-redux'
import Listing from './Listing.js'
import LoadingGrid from './LoadingGrid.js'
import Toolbar from './Toolbar.js'
import fetchListings from '../actions/listings/fetchListings.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TweenMax }  from 'gsap'
import NProgress from 'nprogress'

import AVAILABLE_PLACES from '../../assets/AVAILABLE_PLACES.js'


class GridList extends Component {

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

	componentDidMount() {
		const { location } = this.props.match.params
		if (AVAILABLE_PLACES[location]) {
			this.props.fetchListings(AVAILABLE_PLACES[location])
			.then(() => document.title = location)
		}
	}

	render() {
	  const ListingsHTML = this.props.listings.map((listing, i) => <div key={i} className="listing-outer-container"><Listing key={i} listing={listing}/></div>)
	  return (
	    <ReactCSSTransitionGroup className="results-container-inner" transitionName="fade" transitionEnterTimeout={100} transitionLeaveTimeout={100}>
	    	<div className="results-title-container">
	    		<h1 className="results-title">
	    			{this.props.match.params.location}
	    		</h1>
	    		<div className="divider">
	    			<svg xmlns="http://www.w3.org/2000/svg" version="1.0" id="Capa_1" x="0px" y="0px" width="550px" height="50px" viewBox="50 150 1000 100">
							<path fill="none" stroke="#3f5040" strokeWidth="4" strokeMiterlimit="10" d="M17.9,169h132.9c0.3,0,0.6,0,0.8-0.1  c13.2,41.8,59.8,65.3,101.4,51.6c22.1-7.2,41-21.1,61.5-31.6c19.8-10.2,53.4-22,71.3-1.9c8.2,9.2,6,29.9-8.4,31.5  c-10,1.1-17.2-9.1-16.1-18.3c1-8.1,7.1-14.6,13.8-18.7c23.2-14.5,51.2-12.4,77.3-12.4c12.2,0,24.3,0,36.5,0c1.1,0,2.4,0,2.4,0  c28.9,0,45.6,17.4,41.8,42c-3.2,20.8-25.4,35.3-45.3,25.8c-18.3-8.7-22.2-34.4-5.9-47c15.2-11.8,42-1.3,37.6,20.1  c-1.8,8.8-10.3,15.6-19.5,14.7c-9-0.9-15.3-9-14.9-17.8"/>
							<path fill="none" stroke="#3f5040" strokeWidth="4" strokeMiterlimit="10" d="M1080,169H947.1c-0.3,0-0.6,0-0.8-0.1  c-13.2,41.8-59.8,65.3-101.4,51.6c-22.1-7.2-41-21.1-61.5-31.6c-19.8-10.2-53.4-22-71.3-1.9c-8.2,9.2-6,29.9,8.4,31.5  c10,1.1,17.2-9.1,16.1-18.3c-1-8.1-7.1-14.6-13.8-18.7c-23.2-14.5-51.2-12.4-77.3-12.4c-12.2,0-24.3,0-36.5,0c-1.1,0-2.4,0-2.4,0  c-28.9,0-45.6,17.4-41.8,42c3.2,20.8,25.4,35.3,45.3,25.8c18.3-8.7,22.2-34.4,5.9-47c-15.2-11.8-42-1.3-37.6,20.1  c1.8,8.8,10.3,15.6,19.5,14.7c9-0.9,15.3-9,14.9-17.8"/>
						</svg>
	    		</div>
	    		<h2 className="results-subtitle">
	    			{this.props.match.params.city}
	    		</h2>
			  	<Toolbar />
	    	</div>
	    	<div className="listings-container">
	      	{this.props.isLoading ? <LoadingGrid /> : ListingsHTML}
	      </div>
	    </ReactCSSTransitionGroup>
	  )
	}
}

function mapStateToProps(state) {
	return {
		listings: state.listingsReducer.listings,
		isLoading: state.uiReducer.isLoading
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchListings: (locationId) => dispatch(fetchListings(locationId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GridList)