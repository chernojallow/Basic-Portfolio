import React from 'react'
import skillStyles from './MySkills-style.scss'
import Fade from 'react-reveal/Fade'

const SkillBar = (props) => {
	return (
		<div className={skillStyles.skillBar}>
			<div className={skillStyles.name}>
			{props.name}
			</div>
			<div className={skillStyles.fillBar}>
				<Fade left delay={600} fraction={0}>
					<div className={skillStyles.value} style={props.value}>
						<div></div>
					</div>
				</Fade>
				
				<div className={skillStyles.remainder} style={props.remainder}>
				{props.percentage}
				</div>
			</div>
		</div>
	)
}

export default SkillBar