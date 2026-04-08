import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";


const initialState = {
    todos: [{
        id: 1,
        text: "todo input",
        completed: false
    },]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {       //state give us intialState and action help to change the intialState
            const todo = {
                id: nanoid,
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTod: (state,action) => {
            state.todos=state.todos.filter((todo)=>(todo.id !== action.payload)) //payload auto compaire the id from the action
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>(todo.id==action.payload? {...todo , text:action.payload.text}:todo))
        },
        toggleTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id==action.payload? {... todo,completed:!completed}:todo)
        },
        
    }
})

export const {addTodo,removeTod,updateTodo,toggleTodo}=todoSlice.actions

export const todoReducer = todoSlice.reducer
