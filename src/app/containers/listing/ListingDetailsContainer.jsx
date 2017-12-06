import React from 'react'

const ListingDetailsContainer = (props) => {
  return (
    <section className="listing-section details">
      <div>
        <h2>detalles</h2>
      </div>
      <div className="listing-details">
        <p>
          {!props.listing.details.includes('Propiedades similares en el sector') ? props.listing.details : 'N/D'}
        </p>
      </div>
    </section>
  )
}

export default ListingDetailsContainer
