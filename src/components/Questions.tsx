import { useState } from 'react'
import Start from  './Start'

const Questions: React.FC = () => {
	const [question, setQuestion] = useState(null)
	const [optionA, setOptionA] = useState(null)
	const [optionB, setOptionB] = useState(null)
	const [optionC, setOptionC] = useState(null)
	const [optionD, setOptionD] = useState(null)
	const [rightOption, setRightOption] = useState(null)

	const handleSubmit: any = e => {
		e.preventDefault()
		const data: any = {
			question: question, 
			a:optionA,
		 	b: optionB, 
			c: optionC,
			d: optionD,
			rightAnswer: rightOption
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input placeholder="Question" onChange={e => setQuestion(e.target.value)}/>
			  <input placeholder="Option A" onChange={e => setOptionA(e.target.value)}/>
 			  <input placeholder="Option B" onChange={e => setOptionB(e.target.value)}/>
			  <input placeholder="Option C" onChange={e => setOptionC(e.target.value)}/>
			  <input placeholder="Option D" onChange={e => setOptionD(e.target.value)}/>
			  <input placeholder="Rigth Option, eg. c" onChange={e => setRightOption(e.target.value)}/>
			  <button type="submit">Send Question</button>
			</form>
		</div>
	)
}

export default Questions