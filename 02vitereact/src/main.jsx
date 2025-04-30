import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: "_blank"},
  'click me to visit google',
  anotherUser
)

//ever seen anyone write if else block in object...this syntax stop us to write javascript...
// only javascript expression inside the {}

createRoot(document.getElementById('root')).render(

    // <App/>
   reactElement
  
)
