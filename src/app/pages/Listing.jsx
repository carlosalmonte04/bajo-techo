import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ListingJumbotronContainer from '../containers/listing/ListingJumbotronContainer'
import ListingGeneralInfoContainer from '../containers/listing/ListingGeneralInfoContainer'
import ListingSpecsContainer from '../containers/listing/ListingSpecsContainer'
import ListingDetailsContainer from '../containers/listing/ListingDetailsContainer'
import ListingUsersContainer from '../containers/listing/ListingUsersContainer'
import ListingPicturesContainer from '../containers/listing/ListingPicturesContainer'
import HeaderContainer from '../containers/common/HeaderContainer'
import FooterContainer from '../containers/common/FooterContainer'
import LoadingListingContainer from '../containers/listing/LoadingListingContainer'
import AnimatedWrapper from '../HOCs/AnimatedWrapper'
import fetchListing from '../actions/listings/fetchListing'

class Listing extends Component {

  state = {
    isBackArrowColored: false,
    isLogoColored: false
  }

  componentDidMount() {
    if (this.props.listing.id !== this.props.match.params.listingId) {
      this.props.fetchListing(this.props.match.params.listingId)
    }
  }

  handleJumbotronClick = () => {
    this.gallery.openLightbox()
  }

  handleWaypointEnter = () => this.setState({ isBackArrowColored: false })

  handleWaypointLeave = () => this.setState({ isBackArrowColored: true })

  handleWaypointTwoEnter = () => this.setState({ isLogoColored: false })

  handleWaypointTwoLeave = () => this.setState({ isLogoColored: true })

  render() {
    if (!this.props.isLoading) {
      return (
        <div className="listing-wrapper">
          <HeaderContainer className="header transparent" location={this.props.location} history={this.props.history} isLogoColored={this.state.isLogoColored} />
          <ListingJumbotronContainer
            listing={this.props.listing}
            history={this.props.history}
            isBackArrowColored={this.state.isBackArrowColored}
            handleWaypointLeave={this.handleWaypointLeave}
            handleWaypointEnter={this.handleWaypointEnter}
            handleWaypointTwoEnter={this.handleWaypointTwoEnter}
            handleWaypointTwoLeave={this.handleWaypointTwoLeave}
          />
          <div className="listing-containers" >
            <ListingGeneralInfoContainer listing={this.props.listing} />
            <ListingSpecsContainer listing={this.props.listing} />
            <ListingDetailsContainer listing={this.props.listing} />
            <ListingUsersContainer users={this.props.listing.users} />
            <ListingPicturesContainer listing={this.props.listing} />
          </div>
          <FooterContainer />
        </div>
      )
    }
    return (
      <LoadingListingContainer />
    )
  }
}

const {
  shape,
  array,
  oneOfType,
  func,
  string,
  bool
} = PropTypes

Listing.propTypes = {
  listing: shape({
    keyInfo: shape({}).isRequired,
    info: oneOfType([array]),
    users: array.isRequired
  }).isRequired,
  location: shape({
    pathname: string.isRequired
  }).isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired,
  isLoading: bool.isRequired,
  fetchListing: func.isRequired,
  match: shape({
    params: shape({
      listingId: string.isRequired
    }).isRequired
  }).isRequired
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
    fetchListing: listingId => dispatch(fetchListing(listingId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedWrapper(Listing))
