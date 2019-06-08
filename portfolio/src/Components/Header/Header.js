import React from 'react' 
import headerStyles from './Header-style.scss'
// import Fade from 'react-reveal/Fade'

// import gLine from 'Images/green-line.png'
// import pLine from 'Images/pink-line.png'

const Header = (props) => {

	return (
		<div className={headerStyles.header}>
				{/* <Fade left duration={1000} fraction={1}> */}
					<h1>	
						{props.name}
					</h1>
				{/* </Fade> */}
				{/* <Fade right duration={1000} delay={200} fraction={1}> */}
					<div className={headerStyles.imgDiv}>
							{/* <img src={pLine} style={{boxShadow: '2px 2px 10px var(--color-2)'}} alt="Pink Line"/>	 */}
					</div>
				{/* </Fade> */}
				<br/>
				{/* <Fade left duration={1000} delay={400} fraction={1}> */}
					<div className={headerStyles.imgDiv} >
						{/* <img src={gLine} style={{boxShadow: '2px 2px 10px var(--color-1)'}} alt="Green line"/>	 */}
					</div>
					
				{/* </Fade> */}
							
			</div>
	)
}

export default Header