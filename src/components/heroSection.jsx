import React, { useState, useEffect, useRef } from 'react'
import  './herostyle.css'

const HeroSection = () => {
    const myref = useRef()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const value = myref.current.value
        setTodo(prev => {return [...prev,value]})
    }
    const [todo, setTodo] = useState([])
    return (
    <div className='bg'>
        
        <form onSubmit={handleSubmit}>
          <input type='text' ref={myref} value="todo" />
          <button onSubmit={handleSubmit} >ADD SUBMIT</button>
        </form>
        <div>
            {todo.map((id)  =>(
                <ol>${id}</ol>
            ))}
        </div>
    </div>
  )
}

export default HeroSection