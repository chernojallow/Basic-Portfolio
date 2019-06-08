import React from 'react'
import headshot from 'Assets/Images/cherno.jpg'
import bioStyles from './Profile-style.scss'

const Bio = () => {

	return (
		<div className={bioStyles.container}>
			<div className={bioStyles.imgWrapper}>
				<img src={headshot} alt="My headshot"/>
			</div>
			
			<h2>Hello, I am Cherno Jallow.</h2>
			<p>I'm a Full Stack Developer from Dallas, Texas.</p>
		</div>
	)
}

export default Bio