import toggleLoading from '../ui/toggleLoading'
import setListingsOnState from './setListingsOnState'

export default function fetchListings(locationId) {
  return (dispatch) => {
    if (locationId) { // special case for todos los sectores
      dispatch(toggleLoading(true))
      return fetch(`${process.env.API_URL}/listings/browse/${locationId}`, { headers: { 'Cache-Control': 'public, max-age=14400', Pragma: 'public, max-age=14400' } })
        .then(res => res.json())
        .then((response) => {
          dispatch(setListingsOnState(response.listings, locationId))
          dispatch(toggleLoading(false))
        })
    }
  }
}
