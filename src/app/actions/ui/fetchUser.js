import toggleLoggedIn from './toggleLoggedIn'
import setUser from './setUser'

export default function fetchUser(token) {
  return (dispatch) => {
    const requestParams = {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        token
      }
    }
    return fetch(`${process.env.API_URL}/me`, requestParams)
      .then(res => res.json())
      .then((json) => {
        console.log("fetchuser", json.user)
        dispatch(setUser(json.user))
        dispatch(toggleLoggedIn(true))
      })
  }
}
