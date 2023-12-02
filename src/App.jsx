import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import data from './components/data'

function App() {
  const items=data.map(i=>{
    return(
          <Header
              item={i}
         />
    )
  })

  return (
    <div>
     <Navbar/>
     {items}
    </div>
  )
}

export default App
