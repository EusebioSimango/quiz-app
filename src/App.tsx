import { useState } from 'react'
import {  BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Questions from './components/Questions'
import Start from './components/Start'
import HomePage from './components/HomePage'
import './App.css'

function App() {  
    

  return (
    <div className="App">
      <h1>Quiz App!</h1>
      
       <Router>
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="add-question" element={ <Questions /> } />
            <Route path="game" element={ <Start /> } />
        </Routes>
       </Router>
    </div>
  )
}

export default App
