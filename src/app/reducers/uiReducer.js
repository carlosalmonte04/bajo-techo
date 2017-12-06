const initialState = {
  isLoggedIn: false,
  isLoading: true,
  user: {
    listings: {},
    listingsObjs: {}
  }
}

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return Object.assign({}, state, { isLoading: action.payload })
    case 'SET_USER':
      return Object.assign({}, state, { user: action.payload, isLoggedIn: true })
    case 'TOGGLE_LOGGED_IN':
      return Object.assign({}, state, { isLoggedIn: action.payload })
    case 'ADD_LISTING_TO_USER':
      return {
        ...state,
        user: {
          ...state.user,
          listings: {
            ...state.user.listings,
            ...action.payload
          }
        }
      }
    case 'REMOVE_LISTING_FROM_USER':
      const newListings = { ...state.user.listings }
      delete newListings[Object.keys(action.payload)[0]]
      return {
        ...state,
        user: {
          ...state.user,
          listings: {
            ...newListings
          }
        }
      }
    case 'SET_USER_LISTINGS_OBJS':
      console.log("setting lisints", action.payload)
      return Object.assign({}, state, { user: { ...state.user, listingsObjs: { ...action.payload.listingsObjs } } })
    case 'RESET_USER':
      return Object.assign({}, state, { user: { listings: {} } })
    default:
      return Object.assign({}, state)
  }
}
