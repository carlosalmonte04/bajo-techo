export default function setListingOnState(listing) {
	return {
		type: 'SET_LISTING_ON_STATE',
		payload: { listing }
	}
}