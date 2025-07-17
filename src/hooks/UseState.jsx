import React, { useState } from 'react'

const UseState = () => {
    const[count,setCount] = useState(0);

    const decrement = () =>{
        setCount(count-2)
    }
    function Reset(){
        setCount(0)
    }

  return (
    <div className='p-4 '>
        <h2 className='text-xl mb-2 mx-auto'> Count: {count}</h2>
        <button onClick={()=> setCount(count+1)} className='bg-blue-500 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition duration-300 cursor-pointer'>Increment</button>
        <button onClick={decrement} className='bg-blue-500 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition duration-300 cursor-pointer'>decrement by  -2</button>
         <button onClick={Reset} className='bg-blue-500 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition duration-300 cursor-pointer'>Reset</button>
    </div>
  )
}

export default UseState