export default function signup(user) {

	return dispatch => {
		const requestData = {
			method: 'POST', 
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json',
	    },
			body: JSON.stringify(user)
		}
		return fetch(`${process.env.API_URL}/users`, requestData)
						.then(res => res.json())
						.then(token => console.log("TOKEN!!", token))

	}
}