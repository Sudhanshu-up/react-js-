import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import App from './App.jsx'

function Myapp(){
    return(
        <h1>Hey this is MYAPP!!</h1>
    )
}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const anotherElement=(
    <a href="http://google.com" target="_blanck">
        click to visit Google</a>
)
const eveluatedExpression= "its give final result "
const onemoreElement= React.createElement(
    'a',
    {href:"http://google.com"},
    'click for visiting',
    eveluatedExpression

)
createRoot(document.getElementById('root'))
.render(
    onemoreElement
);
