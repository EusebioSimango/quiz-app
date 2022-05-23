import { useState } from 'react'


const Questions: React.FC = () => {
	const [question, setQuestion] = useState<any>('')
	const [optionA, setOptionA] = useState<any>('')
	const [optionB, setOptionB] = useState<any>('')
	const [optionC, setOptionC] = useState<any>('')
	const [optionD, setOptionD] = useState<any>('')
	const [rightOption, setRightOption] = useState<any>('')

	const sendRequest = (data: any) => {
		fetch('https://quizappapi.000webhostapp.com', {
			method: 'POST',
			headers: {
				'Content-Type': "application/json"
			},
			body: JSON.stringify(data)
		}).then(response => {
				console.log('Questao adicionada!')
				alert("Questao adicionada!")
				return
			}).catch( err => {
				console.log('error:', err)
				alert(`error: ${err}`)
				return
			})
	}

	const handleSubmit: any = (e: any) => {
		e.preventDefault()
		const data: any = {
			question: question,
			a: optionA,
			b: optionB,
			c: optionC,
			d: optionD,
			rightAnswer: rightOption
		}
		const inputQuestion: any = document.querySelector('#inputQuestion')!
		setOptionA('')
		setOptionB('')
		setOptionC('')
		setOptionD('')
		setQuestion('')
		setRightOption('')
		inputQuestion.focus()
		return sendRequest(data)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input id="inputQuestion" placeholder="Question" autoFocus value={question} onChange={e => setQuestion(e.target.value)} />
				<div className="optionsContainer">
					<input placeholder="Option A" value={optionA} onChange={e => setOptionA(e.target.value)} />
					<input placeholder="Option B" value={optionB} onChange={e => setOptionB(e.target.value)} />
					<input placeholder="Option C" value={optionC} onChange={e => setOptionC(e.target.value)} />
					<input placeholder="Option D" value={optionD} onChange={e => setOptionD(e.target.value)} />
					<input placeholder="Rigth Option, eg. c" value={rightOption} onChange={e => setRightOption(e.target.value)} />
					<button type="submit">Send Question</button>
				</div>
			</form>
		</div>
	)
}

export default Questions
