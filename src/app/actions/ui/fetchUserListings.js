import setUserListingsObjs from './setUserListingsObjs'
import toggleLoading from './toggleLoading'

export default function fetchUserListings(userId) {
  return (dispatch) => {

    dispatch(toggleLoading(true))
    return fetch(`${process.env.API_URL}/users/${userId}/listings`)
      .then(res => res.json())
      .then(userListingsObjs => {
        console.log("GOT LISTINGS OBJS", userListingsObjs)
        dispatch(setUserListingsObjs(userListingsObjs))
        dispatch(toggleLoading(false))
      })
  }
}
