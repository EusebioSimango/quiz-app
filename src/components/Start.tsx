import { useState, useEffect } from 'react'

const Start: React.FC = () => {
  const [questions, setQuestions] = useState<any>(null)


  useEffect(() => {
    // fetch('https://quiz-app-api-three.vercel.app/questions/all')
    fetch('http://localhost:8080/questions/all')
      .then(response => response.json())
      .then(async json => {
        const data = await json
        await setQuestions(data)
      })
  }, [])

  useEffect(() => {
    if (questions) setQuestion(questions[0])
  }, [questions])

  const [question, setQuestion] = useState<any>(null)


  const generateId = () => {
    const id: any = Math.floor(Math.random() * 50)
    console.log('gened:', id)
    verifyQuestion(id)
  }

  const renderQuestion = (id: any) => {
    console.log('rendering:', id);
    return setQuestion(questions[id])
  }
  const verifyQuestion = (id: any) => {
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
              onClick={handleClick}>{question.a}</li>
            <li className="option" id="b"
              onClick={handleClick}>{question.b}</li>
            <li className="option" id="c"
              onClick={handleClick}>{question.c}</li>
            <li className="option" id="d"
              onClick={handleClick}>
              {question.d}</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Start