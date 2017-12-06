import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ListingCardsContainer from '../containers/listings/ListingCardsContainer'
import HeaderContainer from '../containers/common/HeaderContainer'
import ListingsJumbotronContainer from '../containers/listings/ListingsJumbotronContainer'
import AnimatedWrapper from '../HOCs/AnimatedWrapper'
import FooterContainer from '../containers/common/FooterContainer'
import fetchListings from '../actions/listings/fetchListings'
import AVAILABLE_PLACES from '../../assets/AVAILABLE_PLACES'

class Listings extends Component {

  componentDidMount() {
    const { location } = this.props.match.params
    if (AVAILABLE_PLACES[location] && this.props.showingLocation !== AVAILABLE_PLACES[location]) {
      this.props.fetchListings(AVAILABLE_PLACES[location])
        .then(() => { document.title = location })
    }
  }

  componentWillReceiveProps(nextProps) {
    const prevLocation = this.props.match.params.location
    const nextLocation = nextProps.match.params.location
  
    if (nextLocation !== prevLocation) {
      const { location: newLocation } = nextProps.match.params
      if (AVAILABLE_PLACES[newLocation]) {
        this.props.fetchListings(AVAILABLE_PLACES[newLocation])
          .then(() => { document.title = newLocation })
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps
  }

  handleUpdateSearchInput = (searchInput) => {
    this.setState({ searchInput })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const location = AVAILABLE_PLACES[this.state.searchInput]
    this.fetchListings(location)
  }

  render() {
    return (
      <div>
        <HeaderContainer className="header" location={this.props.location} history={this.props.history} />
        <div className="listings-body-wrapper" >
          <ListingsJumbotronContainer match={this.props.match} />
          <ListingCardsContainer
            isLoading={this.props.isLoading}
            listings={this.props.listings}
            history={this.props.history}
          />
        </div>
        <FooterContainer />
      </div>
    )
  }
}

const {
  shape,
  string,
  func,
  arrayOf,
  object,
  number,
  oneOfType,
  bool
} = PropTypes

Listings.propTypes = {
  listings: arrayOf(object).isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired,
  location: shape({
    pathname: string.isRequired
  }).isRequired,
  match: shape({
    params: shape({
      location: string.isRequired
    }).isRequired
  }).isRequired,
  fetchListings: func.isRequired,
  isLoading: bool.isRequired,
  showingLocation: oneOfType([string, number]).isRequired
}

function mapStateToProps(state) {
  return {
    isLoading: state.uiReducer.isLoading,
    listings: state.listingsReducer.listings,
    showingLocation: state.listingsReducer.showingLocation
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchListings: locationId => dispatch(fetchListings(locationId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedWrapper(Listings))
