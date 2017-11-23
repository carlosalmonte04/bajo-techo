import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { Magnify, Food } from 'mdi-material-ui'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import LoadingListing from '../components/LoadingListing.js'
import { Route } from 'react-router';
import AnimatedWrapper from "../HOCs/AnimatedWrapper";
import fetchListing from '../actions/listings/fetchListing.js'

class Listing extends Component {

	componentDidMount() {
		if (this.props.listing.id != this.props.match.params.listingId) {
			this.props.fetchListing(this.props.match.params.listingId)
		}
	}

	render() {
		if (!this.props.isLoading) {
			const generalInfoJSX = []
			const extraInfoJSX   = this.props.listing.commodities.map(comm => <span>{comm}</span>)
			for(let key in this.props.listing.generalInfo){
				generalInfoJSX.push(
					<div key={key} className="listing-info">
						<label>{key}</label>
						<span>{this.props.listing.generalInfo[key]}</span>
					</div>
					)
			}
			return (
				<div className="listing-wrapper">
					<Header className={'header transparent'} location={this.props.location} history={this.props.history} />
					<section className="listing-jumbotron" style={{backgroundImage: `url(${this.props.listing.pictures[0]})`}}>
					</section>
					<section className="listing-info-section">
						<h2>informacíon general</h2>
						<div className="listing-general-info-container">
							{generalInfoJSX}
						</div>
					</section>
					<section className="listing-extra-info-container">
						<h2>informacíon extra</h2>
						<div className="listing-general-info-container">
							{extraInfoJSX}
						</div>
					</section>
					<section  className="listing-photos-container">
					</section>
					<Footer />
				</div>
			)
		}
		else {
			return (
				<LoadingListing />
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		isLoading: state.uiReducer.isLoading,
		listing: state.listingsReducer.listing,
		listings: state.listingsReducer.listings
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchListing: (listingId) => dispatch(fetchListing(listingId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedWrapper(Listing))