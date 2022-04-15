import React from 'react'
import Avatar from 'react-avatar'
import './Client.css'

const Client = ({username}) => {
  return (
    <div className='client'>
      <Avatar name={username} size={40} round='18px' />
      <span>{username}</span>
    </div>
  )
}

export default Client
