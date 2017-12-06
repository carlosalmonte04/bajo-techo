import React from 'react'
import PropTypes from 'prop-types'
import ListingCard from '../../components/listings/ListingCard'
import LoadingGrid from '../../components/listings/LoadingGrid'

const ListingsContainer = (props) => {
  const ListingsHTML = props.listings.map((listing, i) => {
    return (
      <ListingCard key={listing.keyInfo.id} listing={listing} history={props.history} />
    )
  })

  return (
    <div className="listing-cards-container">
      {props.isLoading ? <LoadingGrid /> : ListingsHTML}
    </div>
  )
}

const { shape, bool, func } = PropTypes

ListingsContainer.PropTypes = {
  listings: shape([]).isRequired,
  isLoading: bool.isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired
}

export default ListingsContainer
