import React  from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/Todo/TodoSlice'

function Todoform() {
    const [input ,setinput]=useState('')
    const dispatch=useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setinput('')
    }


    return (
         <form  onSubmit={addTodoHandler}>
            <input type="text"
            placeholder='Enter Your task'
            value={input} 
            onChange={(e)=>setinput(e.target.value)}/>

            <button
            type='submit'
            >Add Todo</button>
         </form>
    )
}

export default Todoform
