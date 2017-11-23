import React, { Component } from 'react';
import Listing from './Listing.js'
import LoadingGrid from './LoadingGrid.js'


const GridList = (props) => {

  const ListingsHTML = props.listings.map((listing, i) => <div key={i} className="listing-outer-container"><Listing key={i} listing={listing} history={props.history}/></div>)
  return (
  	<div className="listings-container">
    	{props.isLoading ? <LoadingGrid /> : ListingsHTML}
    </div>
  )
}

export default GridList