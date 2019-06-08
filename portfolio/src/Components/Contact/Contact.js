import React from 'react'
import Header from 'Components/Header/Header.js'

// import Fade from 'react-reveal/Fade'

import contactStyles from './Contact-style.scss'

class Contact extends React.Component {


	render(){
		return (
			<div id={this.props.id} className={contactStyles.container}>
				<Header name={'CONTACT'} />
				{/* <Fade right delay={500}> */}
					<h3>Drop me a line</h3>
				{/* </Fade> */}
				{/* <h3 className={contactStyles.message} style={this.state.messageStyle}>{this.state.message}</h3> */}
				{/* <Fade bottom fraction={0.4}> */}
					<form  >
						<div className={contactStyles.form}>
							<input name="name" id="nameInput" type="text" placeholder="Your name"/>
							<input name="emailAddress" id="emailInput" type="text" placeholder="Your e-mail"/>
							<textarea name="message" id="messageInput" cols="30" rows="10" placeholder="Your message"></textarea>
							<div className={contactStyles.submitWrapper}>
								<input className={contactStyles.submit} type="submit" value="SUBMIT"/>
							</div>
						</div>
					</form>
				{/* </Fade> */}
				
			</div>
			
		)
	}
}

export default Contact