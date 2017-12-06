import React from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'

const ListingJumbotronContainer = (props) => {
  return (
    <section className="user-section jumbotron">
      <Waypoint onEnter={props.handleWaypointTwoEnter} onLeave={props.handleWaypointTwoLeave} />
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
}

export default ListingJumbotronContainer
