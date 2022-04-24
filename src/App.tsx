import { useState } from 'react'
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Questions from './components/Questions'
import Start from './components/Start'
import './App.css'

function App() {  
    

  return (
    <div className="App">
      <h1>Quiz App</h1>
      
       <Router>
        <Routes>
           <Route path="/" element={ <Start /> } />
           <Route path="/question/add/" element={ <Questions/> } />
        </Routes>
       </Router>
    </div>
  )
}

export default App
