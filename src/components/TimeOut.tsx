import React, { useState, useEffect, RefObject } from 'react'
import { Link } from 'react-router-dom'

interface Props {
	ref: RefObject<HTMLDivElement>
}

const TimeOut: React.FC<Props> = (props) => {

	return (
		<div ref={props.ref} id="timeout">
			<Link to="/game">PLAY AGAIN</Link>
		</div>
	)
}

export default TimeOut