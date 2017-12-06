import toggleLoading from '../ui/toggleLoading.js'
import setListingOnState from './setListingOnState.js'

export default function fetchListings(listingId) {
  return (dispatch) => {
    dispatch(toggleLoading(true))
    return fetch(`${process.env.API_URL}/listings/show/${listingId}`)
           .then(res => res.json())
           .then(res => { console.log("LISTING RESPONSE - ", res); return res} )
           .then(response => {
              dispatch(setListingOnState(response.listing))
              dispatch(toggleLoading(false))
            })
  }
}
