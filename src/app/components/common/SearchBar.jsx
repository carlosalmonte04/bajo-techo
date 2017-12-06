import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import Magnify from 'mdi-material-ui/Magnify'
import AVAILABLE_PLACES from '../../../assets/AVAILABLE_PLACES'

const availablePlaces = Object.keys(AVAILABLE_PLACES)

class SearchBar extends Component {
  state = {
    searchInput: '',
    locationOptions: availablePlaces
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.searchInput !== nextState.searchInput
  }

  handleInputChange = (e) => {
    const searchInput = e.target.value
    this.setState({ searchInput })
  }

  render() {
    const options = this.state.locationOptions.filter((location) => {
      return location.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })
    const optionsList = options.map((location) => {
      return (
        <li key={location} id={location} className="option-container">
          <Link to={`/listings/browse/santiago/${location}`}>
            {location}
          </Link>
        </li>
      )
    })
    const randomLocation = availablePlaces[Math.floor(Math.random() * availablePlaces.length)]

    return (
      <div className="row-wrap">
        <Magnify className="icon" />
        <input
          className="search-input"
          onChange={this.handleInputChange}
          value={this.state.searchInput}
          placeholder={`Intenta '${randomLocation}'`}
        />
        <ul className="options-container">
          {optionsList.length >= 1 ? optionsList : <li><a className="option disabled">No resultados</a></li>}
        </ul>
        <div className="search-input-main-btn-container">
          <FlatButton className="search-input-main-btn"label="Buscar" type="submit" />
        </div>
      </div>
    )
  }
}

export default SearchBar
