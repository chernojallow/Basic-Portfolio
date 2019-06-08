import React from 'react'
import Header from 'Components/Header/Header.js'
import InfoSection from './InfoSection/InfoSection.js'
import SkillBar from './MySkills/MySkills.js'
import Bio from './Profile/Profile.js'
import Fade from 'react-reveal/Fade'

import dynamic from 'Assets/Images/dynamic.jpeg'
import challenge from 'Assets/Images/challenge.jpeg'
import responsive from 'Assets/Images/responsive.jpeg'
import deadline from 'Assets/Images/deadline.jpeg'

import aboutStyles from './About-style.scss'
 
const About = (props) => {

	return (
		<div id={props.id} className={aboutStyles.container} style={props.fixed ? {paddingTop: "162px"} : null}>
			<Header name={'ABOUT'} />

			<div className={aboutStyles.traits}>
				<InfoSection img={challenge} alt='Problem solving icon' header='Challenge' content=
				"Challenges make me stronger, and I do well while working with others or independently"/>

				<InfoSection img={responsive} alt='Fast, responsive software icon' header='Responsiveness' content=
				"Good at creating apps that are user-friendly like mobile responsiveness"/>

				<InfoSection img={deadline} alt='Deadline icon' header='Deadline' content=
				"I pride myself at meeting deadline while quality is produced."/>

				<InfoSection img={dynamic} alt='User experience icon' header='Dynamic' content=
				"Develop UI's that can be scale."/>
			</div>
			<div className={aboutStyles.info}>
				<Fade left duration={1000} fraction={0.5}>
					<div className={aboutStyles.personal}>	
					 <Bio/>
					</div>
				</Fade>
				<Fade right duration={1000} fraction={0.5}>
					<div className={aboutStyles.skills}>
						<SkillBar name={"React.js"} value={{width:'80%'}} remainder={{width:'20%'}} percentage={"80%"}/>
						<SkillBar name={"Node.js"} value={{width:'70%'}} remainder={{width:'30%'}} percentage={"70%"}/>
						<SkillBar name={"Javascript"} value={{width:'80%'}} remainder={{width:'20%'}} percentage={"80%"}/>
						<SkillBar name={"Java"} value={{width:'80%'}} remainder={{width:'20%'}} percentage={"80%"}/>
						<SkillBar name={"CSS"} value={{width:'60%'}} remainder={{width:'40%'}} percentage={"60%"}/>
						<SkillBar name={"HTML"} value={{width:'50%'}} remainder={{width:'50%'}} percentage={"50%"}/>
						<SkillBar name={"MongoDB"} value={{width:'50%'}} remainder={{width:'50%'}} percentage={"50%"}/>
						<SkillBar name={"Express"} value={{width:'40%'}} remainder={{width:'60%'}} percentage={"40%"}/>
						<SkillBar name={"MYSQL"} value={{width:'65%'}} remainder={{width:'35%'}} percentage={"65%"}/>
					</div>
				</Fade>
				
			</div>	
		</div>	
	)
	
	
}

export default About