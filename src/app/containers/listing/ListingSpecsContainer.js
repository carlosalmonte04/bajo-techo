import React from 'react'

const ListingSpecsContainer = (props) => {
  return (
    <section className="listing-section specs">
      <div>
        <h2>especificaciones</h2>
      </div>
      <div>
        {props.listing.info.filter(info => !info.match(/\n/)).map((info, i) => <span key={i} className="listing-spec"> {info} </span>)}
      </div>
    </section>
  )
}

export default ListingSpecsContainer
