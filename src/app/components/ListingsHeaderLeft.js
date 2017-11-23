import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Listing from './Listing.js'
import Paper from 'material-ui/Paper';
import Logo from './vector-images/Logo.js'
import SearchBar from './SearchBar.js'

class ResultsHeaderLeft extends Component {

  render() {
    return (
      <div className="results-header-left-container">
        <div className="search-bar-header-container">
          <SearchBar />
        </div>
      </div>
    )
  }
}

export default ResultsHeaderLeft