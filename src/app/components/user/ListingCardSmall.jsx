import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Account from 'mdi-material-ui/Account'
import HeartOutline from 'mdi-material-ui/HeartOutline'
import CheckCircle from 'mdi-material-ui/CheckCircle'
import toggleLoading from '../../actions/ui/toggleLoading'
import interestListing from '../../actions/listings/interestListing'
import disinterestListing from '../../actions/listings/disinterestListing'
import SliderArrow from '../listings/SliderArrow'

class ListingCardSmall extends Component {
  state = {
    pictures: this.props.listing.pictures
  }

  handleListingClick = (e) => {
    // navigate only when click on right element of card
    if (
      e.target.tagName !== 'I' &&
      e.target.tagName !== 'svg' &&
      e.target.tagName !== 'path' &&
      e.target.tagName !== 'INPUT'
    ) {
      this.props.toggleLoading(true)
      this.props.history.push(`/listings/show/${this.props.listing.id}`)
    }
  }

  toggleInterestStatus = (e) => {
    const desiredValue = e.target.value
    desiredValue === 'interesado'
      ? this.props.interestListing(this.props.listing.keyInfo.id)
      : this.props.disinterestListing(this.props.listing.keyInfo.id)
  }

  render() { // Els = elements
    console.log("I AM LISTING SMALL", this.props.listing)
    const priceString = this.props.listing.keyInfo.priceTwo ? this.props.listing.keyInfo.priceTwo : this.props.listing.keyInfo.priceOne
    const price = priceString.split(":")
    const isUserInterested = !!this.props.user.listings[this.props.listing.id]
    const picturesEls = this.props.listing.pictures.map(pictureUrl => <div key={pictureUrl}><img className="listing-img" src={`${pictureUrl}`} alt="listing" /></div>)
    return (
      <Paper style={style} zDepth={2} className="listing-card listing" onClick={this.handleListingClick}>
        <div className="card-content small">
          <Slider {...sliderSettings}>
            {picturesEls}
          </Slider>
          <div className="info-container-inner small">
            <div className="info-header small">
              <span className="info-price small">{price[1]}</span>
              <span className="info-title small">{this.props.listing.keyInfo['localización'].split(",")[0]} - 
                <span className="info-users small">
                  {this.props.listing.users.length} <Account style={{ fill: '#b0efb1' }} />
                </span>
              </span>
            </div>
          </div>
          <input
            type="submit"
            className={`interest-btn small ${isUserInterested ? 'red' : 'green'}`}
            value={isUserInterested ? 'no interesado' : 'interesado'}
            onClick={this.toggleInterestStatus}
          />
        </div>
      </Paper>
    )
  }
}

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  prevArrow: <SliderArrow direction="prev" />,
  nextArrow: <SliderArrow direction="next" />
}

const style = {
  height: 230,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
}

const { shape, func } = PropTypes

ListingCardSmall.propTypes = {
  user: shape({
    listingsObjs: shape({}),
  }).isRequired,
  listing: shape({
  }).isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired,
}

ListingCardSmall.defaultProps = {
  listing: {
    keyInfo: {}
  },
  user: {
    listings: []
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleLoading: bool => dispatch(toggleLoading(bool)),
    interestListing: listingId => dispatch(interestListing(listingId)),
    disinterestListing: listingId => dispatch(disinterestListing(listingId))
  }
}

function mapStateToProps(state) {
  return {
    user: state.uiReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingCardSmall)
