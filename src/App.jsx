
import React from 'react'
import {Routes,Route} from'react-router-dom'
import Frount from './pages/Frount'
import Login from './pages/Login'

function App() {
  return (
    <>
    <Routes>
<Route path = '/' element = {<Login/>}></Route>
<Route path  = '/Frount' element = {<Frount/>}></Route>
</Routes>
    </>
  )
}

export default App