import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
  const { id } = useParams()  

  return (
    <div className='p-4'>
      <h2 className='text-xl'>User Detail for ID: {id}</h2>
      <p>{id}</p>
      {/* api fetch or dynamic info will go here */}
    </div>
  )
}

export default UserDetail
