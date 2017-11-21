const initialState = {
	isLoggedIn: false,
	isLoading: true
}

export default function uiReducer(state = initialState, action) {
	switch(action.type) {
		case 'TOGGLE_LOADING':
			return Object.assign({}, state, {isLoading: action.payload})
		default:
			return Object.assign({}, state)
	}
}