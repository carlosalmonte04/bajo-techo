import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import HeartOutline from 'mdi-material-ui/HeartOutline'
import CheckCircle from 'mdi-material-ui/CheckCircle'
import toggleLoading from '../../actions/ui/toggleLoading'
import interestListing from '../../actions/listings/interestListing'
import disinterestListing from '../../actions/listings/disinterestListing'
import SliderArrow from './SliderArrow'

class Listing extends Component {
  state = {
    imgUrlStructure: 'http://img.supercasas.com/AdsPhotos/376x250/5/',
    pictures: this.props.listing.keyInfo.pictures
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
      this.props.history.push(`/listings/show/${this.props.listing.keyInfo.id}`)
    }
  }

  toggleInterestStatus = (e) => {
    if (this.props.isLoggedIn) {
      const desiredValue = e.target.value
      desiredValue === 'interesado'
        ? this.props.interestListing(this.props.listing.keyInfo.id)
        : this.props.disinterestListing(this.props.listing.keyInfo.id)
    } else {
      alert('please log in')
    }
  }

  render() { // Els = elements
    const isUserInterested = !!this.props.user.listings[this.props.listing.keyInfo.id]
    const picturesEls = this.props.listing.pictures.map(pictureId => <div key={pictureId}><img className="listing-img" src={`${this.state.imgUrlStructure + pictureId}.jpg`} alt="listing" /></div>)
    return (
      <Paper style={style} zDepth={2} className="listing-card listing" onClick={this.handleListingClick}>
        <div className="card-content">
          <div className="listing-status-wrapper">
            <div className="listing-status-container">
              <div className={`listing-status check-icon ${isUserInterested ? 'fade-in' : 'fade-away'}`}>
                <CheckCircle className="material-icons" />
              </div>
            </div>
          </div>
          <Slider {...sliderSettings}>
            {picturesEls}
          </Slider>
          <div className="info-container-inner">
            <div className="info-header">
              <span className="info-title" >{this.props.listing.keyInfo.title}</span>
              <div className="info-price">
                <span>{this.props.listing.keyInfo.currency} </span>
                <span>${this.props.listing.keyInfo.price}</span>
              </div>
            </div>
            <div className="listing-card-divider" />
            <div className="listing-card-info">
              <div>
                <span>{this.props.listing.info['categoria']}</span>
                <span>{this.props.listing.info['Construcción']}</span>
                <span>{this.props.listing.info['Parqueos']} parqueos</span>
              </div>
              <button className="save-btn">
                <HeartOutline />
                Guardar
              </button>
            </div>
          </div>
          <input
            type="submit"
            className={`interest-btn ${isUserInterested ? 'red' : 'green'}`}
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
  height: 430,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
}

const { shape, func } = PropTypes

Listing.propTypes = {
  user: shape({
    listings: shape({}),
  }).isRequired,
  listing: shape({
    keyInfo: shape({}),
    info: shape({})
  }).isRequired,
  toggleLoading: func.isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired,
  interestListing: func.isRequired,
  disinterestListing: func.isRequired
}

Listing.defaultProps = {
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
    user: state.uiReducer.user,
    isLoggedIn: state.uiReducer.isLoggedIn
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)
