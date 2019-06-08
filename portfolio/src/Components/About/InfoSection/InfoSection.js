import React from 'react'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'

import infoStyles from './InfoSection.module.scss'

const InfoSection = (props) => {

	return (
		<div className={infoStyles.container}>
			<Flip left duration={1500} fraction={1}>
				<img src={props.img} alt={props.imgAlt}/>
			</Flip>
			<Fade duration={1500} fraction={1}>
				<h3>{props.header}</h3>
			</Fade>
			<Fade duration={1500} fraction={1}>
				<p>{props.content}</p>
			</Fade>
			
		</div>
	)
}

export default InfoSection