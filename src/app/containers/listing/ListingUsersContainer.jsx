import React from 'react'
import UserCard from '../../components/listing/UserCard'

const ListingUsersContainer = ({ users }) => {
  const UsersLis = users.map(user => <UserCard key={user.email} user={user} />)
  return (
    <section className="listing-section users">
      <div>
        <h2>interesados</h2>
      </div>
      <div>
        <ul className="user-cards">
          {UsersLis}
        </ul>
      </div>
    </section>
  )
}

export default ListingUsersContainer
