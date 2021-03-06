import AVAILABLE_PLACES from '../../assets/AVAILABLE_PLACES'

const initialState = {
  AVAILABLE_PLACES,
  listings: [],
  showingLocation: '',
  listing: {
    keyInfo: {},
    users: []
  }
}

export default function listingReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LISTINGS_ON_STATE':
      return Object.assign({}, state, { listings: action.payload.listings, showingLocation: action.payload.locationId })
    case 'SET_LISTING_ON_STATE':
      return Object.assign({}, state, { listing: action.payload.listing })
    default:
      return Object.assign({}, state)
  }
}