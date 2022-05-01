import React,  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TimeOut: React.FC = () => {

	return (
		<div id="timeout">
			<Link to="/game">PLAY AGAIN</Link>
		</div>
	)
}

export default TimeOut