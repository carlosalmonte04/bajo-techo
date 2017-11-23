export default function setListingsOnState(listings, locationId) {
	return {
		type: 'SET_LISTINGS_ON_STATE',
		payload: { listings, locationId }
	}
}