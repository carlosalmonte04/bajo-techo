import setUser from './setUser'

export default function login(user) {

  return (dispatch) => {
    const requestData = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    return fetch(`${process.env.API_URL}/login`, requestData)
      .then(res => res.json())
      .then((json) => {
        if (json.error) return { error: json.error }
        dispatch(setUser(json.user))
        return { token: json.token }
      })
  }
}
