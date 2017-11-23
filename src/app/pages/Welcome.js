import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Waypoint from 'react-waypoint';
import Paper from 'material-ui/Paper';
import { Magnify, Food } from 'mdi-material-ui'
import GridList from '../components/GridList.js'
import SearchBar from '../components/SearchBar.js'
import Header from '../components/Header.js'
import DividerDiagonal from '../components/DividerDiagonal.js'
import { Route } from 'react-router';
import NProgress from 'nprogress';
import AnimatedWrapper from "../HOCs/AnimatedWrapper";
import LookingForAptImg from '../components/vector-images/LookingForAptImg.js'
import HappyPeopleImg from '../components/vector-images/HappyPeopleImg.js'
import IdentityImg from '../components/vector-images/IdentityImg.js'


import Footer from '../components/Footer.js'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

class WelcomeComponent extends Component {

	state = {
		listings: [],
		isLoading: false,
		headerClass: 'header transparent'
	}

	handleWaypointEnter = (e) => {
		this.setState({headerClass: 'header transparent'})
	}

	handleWaypointLeave = (e) => {
		this.setState({headerClass: 'header shrink'})

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
		document.title = "Techo Unido"
		// const autocomplete = new google.maps.places.Autocomplete(this.refs.searchTextField, { language, strictBounds});
		// autocomplete.addListener('place_changed', () => {
			// this.fetchListings()
		// })
		// this.getAvailablePlaces()
	}

	render() {
		return (
			<div className="index-wrapper">
				<Header className={this.state.headerClass} location={this.props.location} history={this.props.history} />
				<Waypoint onEnter={this.handleWaypointEnter} onLeave={this.handleWaypointLeave} />
				<section className="index-jumbotron">
				  <div className="form-container">
				  	<div className="blur-div">
				  	</div>
				  	<div className="slogan-container">
					  	<div className="slogan">
					  		<h1>Dile a tu mamá que</h1>
					  		<h1>te vas.</h1>
					  	</div>
				  	</div>
					  <form className="search-input-main-container" onSubmit={(e) => this.handleSubmit(e)}>
					  	<SearchBar handleUpdateSearchInput={this.handleUpdateSearchInput} />
					  </form>
					</div>
				</section>
				<DividerDiagonal className="divider-diagonal"/>
				<section className="elevator-pitch-section">
					<div className="index-elevator-pitch-container">
						<h1>que es Techo Unido?</h1>
						<div className="pitch-left-container">
							<div className="pitch-left-img">
								<LookingForAptImg width={150} height={150} color="rgba(99, 139, 230, 0.76)" />
							</div>
							<div className="pitch-left-text">
								<div className="pitch-left-title">
									<h2>Mudarte hoy? Why not!?</h2>
								</div>
								<p>Techo Unido te ayuda a encontrar el apartamento de tus sueño al precio de tu bolsillo. Todo mientras vives con tus amigos!</p>
							</div>
						</div>
						<div className="pitch-right-container">
							<div className="pitch-right-img">
								<HappyPeopleImg width={150} height={150} color="rgba(99, 139, 230, 0.76)" />
							</div>
							<div className="pitch-right-text">
								<div className="pitch-right-title">
									<h2>Para que mudarse cerca? Mudense juntos!</h2>
								</div>
								<p>Techo Unido te permite elegir una nueva familia! Sinceramente lamentamos todo el tiempo que nos tomó.</p>
							</div>
						</div>
						<div className="pitch-left-container">
							<div className="pitch-left-img">
								<IdentityImg width={150} height={150} color="rgba(99, 139, 230, 0.76)"/>
							</div>
							<div className="pitch-left-text">
								<div className="pitch-left-title">
									<h2>Nada mas seguro que tu nuevo hogar.</h2>
								</div>
								<p>Cada usuario pasa por nuestro sistema de verificacion para confirmar identidad e historial criminal.</p>
							</div>
						</div>
					</div>
				</section>
				<DividerDiagonal className="divider-diagonal" color={'rgba(99, 139, 230, 1)'} zIndex={-1} />
					<Footer />
			</div>
		)
	}
}


export default AnimatedWrapper(WelcomeComponent)