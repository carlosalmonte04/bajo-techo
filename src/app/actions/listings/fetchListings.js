import startProgressBar from '../ui/startProgressBar.js'
import completeProgressBar from '../ui/completeProgressBar.js'
import toggleLoading from '../ui/toggleLoading.js'
import setListingsOnState from './setListingsOnState.js'

export default function fetchListings(locationId) {
	return dispatch => {
		if (locationId) { // special case for todos los sectores
			dispatch(startProgressBar())
		  dispatch(toggleLoading(true))
return fetch(`${process.env.API_URL}/listings/browse/${locationId}`)
 		   .then(res => res.json())
 		   .then(res => { console.log("RES!?", res); return res} )
		   .then(response => {
		  	 dispatch(setListingsOnState(response.listings, locationId))
		  	 dispatch(toggleLoading(false))
		  	 dispatch(completeProgressBar())
		  })
		}
	}
}