import removeListingFromUser from '../ui/removeListingFromUser'

export default function insterestListing(listingId) {
  return (dispatch) => {
    const requestParams = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        token: localStorage.getItem('token')
      }
    }
    fetch(`${process.env.API_URL}/listings/remove/${listingId}`, requestParams)
      .then(res => res.json())
      .then((json) => {
        if (json[listingId]) dispatch(removeListingFromUser(json))
      })
  }
}
