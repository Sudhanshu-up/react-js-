import React from 'react'
import { useSelector } from 'react-redux'// for listing of todo on ui
import { useDispatch } from 'react-redux' // beaceuse we wanted to perform any action like remove
import { removeTod,} from '../features/Todo/TodoSlice'

function Todoitems() {
    const todos=useSelector(state=>state.todos)
     
    
    const dispatch=useDispatch()
    return (
        <>

        <div>todos</div>
        <ul>
             {todos.map((todo)=>(
            <li key={todo.id}>
                {todo.text}
                <button onClick={()=>dispatch(removeTod(todo.id))}
                >X</button>
            </li>
            
        ))}
        </ul>
       

        </>
        
    )
}

export default Todoitems
