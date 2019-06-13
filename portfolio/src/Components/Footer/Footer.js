import React from 'react'

import facebookIcon from 'Assets/Images/facebook.png'
import githubIcon from 'Assets/Images/github.png'
import linkedinIcon from 'Assets/Images/linkedin.png'
import instagramIcon from "Assets/Images/instagram.png"

import footerStyles from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={footerStyles.container}>
			 <h3> Network with me </h3>
			<div className={footerStyles.flex}>
				<a href="https://www.linkedin.com/in/cherno-jallow-0218bb149/"><span><img src={linkedinIcon} alt="Link to my linkedIn"/></span></a>
				<a href="https://github.com/chernojallow"><span><img src={githubIcon} alt="Link to my github"/></span></a>
				<a href="https://www.facebook.com/zika.chea"><span><img src={facebookIcon} alt="Link to my facebook"/></span></a>
				<a href="https://www.instagram.com/zikachea/"><span><img src={instagramIcon} alt="Link to my instagram"/></span></a>
			</div>
			<h3>©2019 CHERNO JALLOW</h3>
		</div>
		
	)
}

export default Footer