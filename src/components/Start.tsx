import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Start: React.FC = () => {
  const [questions, setQuestions] = useState<any>(null)

  useEffect(() => {
    // fetch('https://quiz-app-api-three.vercel.app/questions/all')
    fetch('https://quizappapi.000webhostapp.com/')
      .then(response => response.json())
      .then(async json => {
        const data = await json
        setQuestions(data)
      })
  }, [])

  useEffect(() => {
    questions ? generateId() : null
  }, [questions])

  const [question, setQuestion] = useState<any>(null)


  const generateId = () => {
    const id: any = Math.floor(Math.random() * 50)
    console.log('gened:', id)
    verifyQuestion(id)
  }

  const renderQuestion = (id: any) => {
    const liElements = document.querySelectorAll('.option') as NodeListOf<HTMLLIElement>
    liElements.forEach((li: any) => {
      li.style.transition = '.6s'
    })
    console.log('rendering:', id);
    return setQuestion(questions[id])
  }
  const verifyQuestion = (id: any) => {
    console.log('verifying:', id)
    if (questions[id]) return renderQuestion(id)
    return generateId()

  }

  const cleanOptions: any = () => {
    const liElements = document.querySelectorAll('.option') as NodeListOf<HTMLLIElement>
    liElements.forEach((li: any) => {
      li.style.transition = 'unset'
      li.style.color = '#5c5c5c'
      li.style.backgroundColor = 'yellow'
      console.log('0')
    })
    return generateId()
  }

  const verifyAnswer = (id: any, question: any) => {
    const rigthOption: any = (id === question.rightAnswer)
    const liElements = document.querySelectorAll('.option') as NodeListOf<HTMLLIElement>

    console.log(liElements)

    if (rigthOption) {
      liElements.forEach((li: any) => {
        if (li.id === question.rightAnswer) {
          li.style.backgroundColor = 'green'
          li.style.color = '#fff'
        }
      })
      setTimeout(() => {
        generateId()
        return cleanOptions()
      }, 1000)
      return
    }

    liElements.forEach((li: any) => {
      if (li.id === id) {
        li.style.backgroundColor = 'red'
        li.style.color = '#fff'
      }
    })
    setTimeout(() => {
      return cleanOptions()
    }, 1000)
  }

  const handleClick = (event: React.MouseEvent<HTMLLIElement>): void => {
    const id: any = ((event.currentTarget).id)
    verifyAnswer(id, question)
  }

  return (
    <>
      {question && (
        <div className="questionContainer">
          <p className="question">{question.question}</p>
          <ul className="options">
            <li className="option" id="a"
              onClick={handleClick}>{question.optionA}</li>
            <li className="option" id="b"
              onClick={handleClick}>{question.optionB}</li>
            <li className="option" id="c"
              onClick={handleClick}>{question.optionC}</li>
            <li className="option" id="d"
              onClick={handleClick}>
              {question.optionD}</li>
          </ul>
          <Link to="/add-question">Add Question</Link>
        </div>
      )}
    </>
  )
}

export default Start
