import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='p-4'>
      <h2 className="text-xl font-semibold">📊 Dashboard</h2>
      <div>
        <Link to="profile">Profile</Link>
        <Link to="setting">setting</Link>
      </div>
      <div className='border-t mt-4 pt-4'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard