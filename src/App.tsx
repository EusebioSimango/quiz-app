import { useState } from 'react'
import './App.css'

function App() {  
    const questions: any = [
    {
      question: 'whats 1 + 1',
      a: '2',
      b: '4',
      c: '3',
      d: '5',
      rightAnswer: 'a'
    },
    {
      question: 'whats 12 + 1',
      a: '2',
      b: '4',
      c: '13',
      d: '5',
      rightAnswer: 'c'
    },
     {
      question: 'Qual dos nomes abaixo e de um dos criadores do Facebook Inc. agora META',
      a: 'Ellon Musk',
      b: 'Mark Zuckeberg',
      c: 'Bill Gates',
      d: 'Jeff Bazzos',
      rightAnswer: 'b'
    }
  ]

  const [question, setQuestion] = useState(questions[0])

  const generateId = () => {
    const id: int = Math.floor(Math.random() * 50)
    console.log('gened:', id)
    verifyQuestion(id)
  }  

  const renderQuestion = id => {
    console.log('rendering:', id); 
    return setQuestion(questions[id])
  }
  const verifyQuestion = id => {
    console.log('verifying:', id)
    if (questions[id]) return renderQuestion(id)
    return generateId()

  }

  const verifyAnswer = (id: any, question: any) => {
    if (id === question.rightAnswer) {
      console.log('certa a resposta')
      return generateId()
    }
    return console.log('OH OH OH!', id)
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      
      { question && (
          <div className="questionContainer"> 
            <p className="question">{question.question}</p>
            <ul className="options">
              <li className="option" id="a" onClick={(e) => verifyAnswer(e.target.id, question)}>{question.a}</li>
              <li className="option" id="b" onClick={(e) => verifyAnswer(e.target.id, question)}>{question.b}</li>
              <li className="option" id="c" onClick={(e) => verifyAnswer(e.target.id, question)}>{question.c}</li>
              <li className="option" id="d" onClick={(e) => verifyAnswer(e.target.id, question)}>{question.d}</li>
            </ul>
          </div>
          )
        }
    </div>
  )
}

export default App
