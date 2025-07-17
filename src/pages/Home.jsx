import React from 'react'
import UseState from '../hooks/UseState'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl  font-bold p-4'>Welcome to Home page</h1>
      <UseState/>
      
    </div>
  )
}

export default Home