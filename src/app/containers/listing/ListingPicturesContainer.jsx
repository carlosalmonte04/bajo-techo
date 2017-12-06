import React from 'react'
import Gallery from 'react-grid-gallery'

const ListingPicturesContainer = (props) => {
  return (
    <section className="listing-section pictures">
      <div>
        <h2>fotos</h2>
      </div>
      <Gallery
        backdropClosesModal
        images={props.listing.pictures.map((pictureUri, i) => {
          return {
            src: pictureUri.replace('500x500', '800x600'),
            thumbnail: pictureUri,
            thumbnailWidth: 320,
            thumbnailHeight: 212
          }
        })}
      />
    </section>
  )
}

export default ListingPicturesContainer
