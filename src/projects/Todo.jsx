import React, { useState } from 'react'

const Todo = () => {
    const[task,setTask]=useState('')
    const[list,setList]=useState([]);

  return (
    <div>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
    </div>
  )
}

export default Todo