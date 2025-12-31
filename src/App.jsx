import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router'
import Navbar from './components/Navbar'
import Cart from './Evaluation/Cart'
import Task1 from './Evaluation/Task1'
import Task2 from './Evaluation/Task2'
import Task3 from './Evaluation/Task3'
import Task4 from './Evaluation/Task4'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Task1/>} />
          <Route path='/abcd/:foodname' element={<Task2/>} />
          <Route path='/xyz/:id' element={<Task3/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/buynow' element={<Task4/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App