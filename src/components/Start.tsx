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

  const cleanOptions: any = () => {
    const liElements = document.querySelectorAll('.option') as HTMLLIElement
    liElements.forEach(li => {
      li.style.color = '#5c5c5c'
      li.style.backgroundColor = 'yellow'
      console.log('0')
    })

  }

  const verifyAnswer = (id: any, question: any) => {
    const rigthOption: any = (id === question.rightAnswer)
    const liElements = document.querySelectorAll('.option') as HTMLLIElement

    console.log(liElements)

    if (rigthOption) {
      liElements.forEach(li => {
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

    liElements.forEach(li => {
      if (li.id === id) {
        li.style.backgroundColor = 'red'
        li.style.color = '#fff'
      }
    }) 
    setTimeout(() => {
      generateId()
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