import React from 'react'
import { Link, Links } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white p-4 flex space-x-4 '>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to ="/users">Users</Link>
      <Link to ="/dashboard">Dashboard</Link>
      <Link to='/api-users'>API users</Link>
    </nav>
  )
}

export default Navbar