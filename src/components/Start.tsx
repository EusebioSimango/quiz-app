import { useState, useEffect } from 'react'

const Start: React.FC = () => {
  const [questions, setQuestions] = useState(null)


	useEffect(() => {
    fetch('https://quiz-app-api-three.vercel.app/questions/all')
      .then(response => response.json())
      .then(async json => {
        const data = await json
        await setQuestions(data)
       })
  }, [])

  useEffect(() => {
    if (questions) setQuestion(questions[0])
  }, [questions])

  const [question, setQuestion] =  useState(null) 
  

  const generateId = () => {
    const id: any = Math.floor(Math.random() * 50)
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
		<>
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
      )}
</>
	)
}

export default Start