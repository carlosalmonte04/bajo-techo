import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Listing from './Listing.js'
import Paper from 'material-ui/Paper';
import Logo from './Logo.js'
import SearchBar from './SearchBar.js'

class ResultsHeaderLeft extends Component {

  render() {
    return (
      <div className="results-header-left-container">
        <Link to="/" className="logo-container-header" >
          <Logo height={20} width={100} className="logo-header" />
          <h4>Techo Unido</h4>
        </Link>
        <div className="search-bar-header-container">
          <SearchBar />
        </div>
      </div>
    )
  }
}

export default ResultsHeaderLeft