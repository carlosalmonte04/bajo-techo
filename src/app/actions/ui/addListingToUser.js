export default function addListingToUser(listing) {
  return {
    type: 'ADD_LISTING_TO_USER',
    payload: listing
  }
}
