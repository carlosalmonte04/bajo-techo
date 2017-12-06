import React from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'
import ArrowLeft from 'mdi-material-ui/ArrowLeft'

const ListingJumbotronContainer = (props) => {
  return (
    <section className="listing-section jumbotron" style={{ backgroundImage: `url(${props.listing.pictures[0]})` }} onClick={props.handleJumbotronClick} >
      <div className="slogan-container">
        <div className="slogan">
          <h1>{props.listing.keyInfo['uso actual']}</h1>
          <Waypoint onEnter={props.handleWaypointEnter} onLeave={props.handleWaypointLeave} />
          <h1>{props.listing.keyInfo.priceTwo ? props.listing.keyInfo.priceTwo : props.listing.keyInfo.priceOne}</h1>
          <Waypoint onEnter={props.handleWaypointTwoEnter} onLeave={props.handleWaypointTwoLeave} />
        </div>
      </div>
      <div className="back-btn-container" >
        <ArrowLeft className={`icon back-btn ${props.isBackArrowColored ? 'blue' : ''}`} onClick={() => props.history.goBack()} />
      </div>
      {/*<Gallery
        backdropClosesModal
        images={this.props.listing.pictures.map((pictureUri, i) => {
          return { 
            src: pictureUri.replace('500x500', '800x600'),
            thumbnail: pictureUri,
            thumbnailWidth: 320,
            thumbnailHeight: 212
          }
        })}
      />*/}
    </section>
  )
}

const {
  shape,
  func,
  array,
  bool
} = PropTypes

ListingJumbotronContainer.propTypes = {
  listing: shape({
    keyInfo: shape({}).isRequired,
    pictures: array
  }).isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired,
  handleWaypointLeave: func.isRequired,
  handleWaypointEnter: func.isRequired,
  handleWaypointTwoEnter: func.isRequired,
  handleWaypointTwoLeave: func.isRequired,
  isBackArrowColored: bool
}

export default ListingJumbotronContainer
