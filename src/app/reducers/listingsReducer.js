import AVAILABLE_PLACES from '../../assets/AVAILABLE_PLACES.js'
const initialState = {
	AVAILABLE_PLACES: AVAILABLE_PLACES,
	listings: []
}

export default function listingReducer(state = initialState, action) {
	switch(action.type) {
		case 'SET_LISTINGS_ON_STATE':
			return Object.assign({}, state, { listings: action.payload })
		default: 
			return Object.assign({}, state)
	}
}