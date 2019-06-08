import React from 'react'

import facebookIcon from 'Assets/Images/facebook.png'
import githubIcon from 'Assets/Images/github.png'
import linkedinIcon from 'Assets/Images/linkedin.png'

import footerStyles from './Footer-style.scss'

const Footer = () => {
	return (
		<div className={footerStyles.container}>
			<div className={footerStyles.flex}>
				<a href="https://www.linkedin.com/in/harry-parkinson-418515126/"><span><img src={linkedinIcon} alt="Link to my linked in"/></span></a>
				<a href="https://github.com/hazza203"><span><img src={githubIcon} alt="Link to my github"/></span></a>
				<a href="https://www.facebook.com/harry.parkinson.9"><span><img src={facebookIcon} alt="Link to my facebook"/></span></a>
			</div>
			<h3>CHERNO JALLOW ©2019</h3>
		</div>
		
	)
}

export default Footer