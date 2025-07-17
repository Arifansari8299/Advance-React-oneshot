import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const dummyUsers = [
    {id:1,name:'Mohd Owais'},
    {id:2,name:"mohd Adil"},
    {id:3,name:"mohd sahbaj"}
  ]
  return (
    <div className='p-4'>
      <h1 className='text-xl font-semibold mb-4'>Users List</h1>
      {dummyUsers.map((user)=>(
      <div key={user.id}>
        <Link className="text-blue-500" to={`/users/${user.id}`}>
        {user.name}
        </Link>
      </div>
      ))}
    </div>
  )
}

export default Users