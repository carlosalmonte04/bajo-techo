export default function login(user) {

	return dispatch => {
		const requestData = {
			method: 'POST', 
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json',
	    },
			body: JSON.stringify(user)
		}
		return fetch(`${process.env.API_URL}/login`, requestData)
						.then(res => res.json())
						.then(json => {
							console.log("JSON", json)
							if (json.error) return { error: json.error } 
							else return { token: json.token }
						})

	}
}