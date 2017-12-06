import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({ user }) => {
  return (
    <li className="user-card">
      <Link to={`/users/${user.id}`}>{user.email}</Link>
    </li>
  )
}

export default UserCard
