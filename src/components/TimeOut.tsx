import React, { useState, useEffect, RefObject } from 'react'
import { Link } from 'react-router-dom'

interface Props {
	Ref: RefObject<HTMLDivElement>
}

const TimeOut: React.FC<Props> = (props) => {

	return (
		<div ref={props.Ref} id="timeout">
			<Link to="/game">PLAY AGAIN</Link>
		</div>
	)
}

export default TimeOut