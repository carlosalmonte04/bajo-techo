import React, { Component } from 'react';
import Listing from './Listing.js'
import LoadingGrid from './LoadingGrid.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TweenMax }  from 'gsap'
import NProgress from 'nprogress'


export default class GridList extends Component {

	componentDidUpdate() {

		NProgress.done()
		if (!this.props.isLoading) {
    	TweenMax.staggerFromTo(document.getElementsByClassName('listing-container list'), 0.3, {opacity: 0}, {opacity: 1}, 0.1)
    }
		NProgress.done()
	}

	render() {
	  const ListingsHTML = this.props.listings.map((listing, key) => <div className="listing-outer-container"><Listing key={key} listing={listing}/></div>)
	  return (
	    <ReactCSSTransitionGroup className="results-container-inner" transitionName="fade" transitionEnterTimeout={100} transitionLeaveTimeout={100}>
	      {this.props.isLoading ? <LoadingGrid /> : ListingsHTML}
	    </ReactCSSTransitionGroup>
	  )
	}
}