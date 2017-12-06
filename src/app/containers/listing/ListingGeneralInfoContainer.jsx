import React from 'react'
import PropTypes from 'prop-types'

import {
  BathroomImg,
  BedroomsImg,
  ClosetImg,
  FloorImg,
  LocationImg,
  TerrainImg
} from '../../components/vector-images/ImgIndex'

const ListingGeneralInfoContainer = (props) => {
  return (
    <section className="listing-section general-info">
      <div>
        <h2>información general</h2>
      </div>
      <div className="info-container">
        <div className="info-block">
          <BedroomsImg width="55%" height="55%" color="rgba(99, 139, 230, 0.76)" />
          <span>{props.listing.keyInfo['habitaciones']}</span>
        </div>
        <div className="info-block">
          <BathroomImg width="55%" height="55%" color="rgba(99, 139, 230, 0.76)" />
          <span>{props.listing.keyInfo['baños'] || 'N/D'}</span>
        </div>
        <div className="info-block">
          <FloorImg width="55%" height="55%" color="rgba(99, 139, 230, 0.76)" />
          <span>{props.listing.keyInfo['nivel/piso']}</span>
        </div>
      </div>
      <div className="info-container">
        <div className="info-block">
          <TerrainImg width="55%" height="55%" color="rgba(99, 139, 230, 0.76)" />
          <span>{props.listing.keyInfo['construcción']}</span>
        </div>
        <div className="info-block">
          <ClosetImg width="55%" height="55%" color="rgba(99, 139, 230, 0.76)" />
          <span>{props.listing.info.find(info => info.includes('closet')) || 'N/D'}</span>
        </div>
        <div className="info-block">
          <LocationImg width="55%" height="55%" color="rgba(99, 139, 230, 0.76)" />
          <span>{props.listing.keyInfo['localización'].replace(/, santiago/g, '')}</span>
        </div>
      </div>
    </section>
  )
}

const { shape } = PropTypes

ListingGeneralInfoContainer.propTypes = {
  listing: shape({}).isRequired
}

export default ListingGeneralInfoContainer
