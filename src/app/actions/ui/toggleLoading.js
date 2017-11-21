export default function toggleLoading(bool) {
	return {
		type: 'TOGGLE_LOADING',
		payload: bool
	}
}