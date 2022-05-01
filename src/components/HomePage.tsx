import React,  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {

	return (
		<div id="home-page">
			<div className="header"> 
				HIGH SCORE
			</div>
			<div className="main"> 
				<Link to="/game">PLAY</Link>
			</div>
			<div> 
				<Link to="/add-question">Add Question</Link>
			</div>
		</div>
	)
}

export default HomePage