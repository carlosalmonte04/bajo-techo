export default function removeListingFromUser(listing) {
  return {
    type: 'REMOVE_LISTING_FROM_USER',
    payload: listing
  }
}
