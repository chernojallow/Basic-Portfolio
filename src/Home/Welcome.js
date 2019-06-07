import React from 'react'
import { Link } from "react-scroll";
import welcomeStyles from './Welcome.module.scss'
import RightArrow from 'Images/right-arrow.png'

class Welcome extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			vh: window.innerHeight, 
			vw: window.innerWidth
		}
		this.handleResize = this.handleResize.bind(this)
		// We execute the same script as before
	  document.documentElement.style.setProperty('--vh', `${this.state.vh * 0.01}px`);
	  document.documentElement.style.setProperty('--vw', `${this.state.vw}px`);
	}
	
	componentDidMount() {
		window.addEventListener('resize', this.handleResize)
	}

	componentWillUnmount() {
   	window.removeEventListener('resize', this.handleResize)
	}

	handleResize(){
		// We execute the same script as before
			if(this.state.vw !== window.innerWidth){
				console.log(window.innerWidth)
				this.setState({vh: window.innerHeight})
				this.setState({vw: window.innerWidth})
				document.documentElement.style.setProperty('--vh', `${this.state.vh * 0.01}px`);
				document.documentElement.style.setProperty('--vw', `${this.state.vw}px`);
			}
	}

	render() {
		return (
			<div id={this.props.id} className={welcomeStyles.container}>
				<div className={welcomeStyles.wrapper}>
					<h1 className={`${welcomeStyles.csstyping} ${welcomeStyles.csstyping1}`}>HELLO. </h1> 
					<h1 className={`${welcomeStyles.csstyping} ${welcomeStyles.csstyping2}`}> I'M CHERNO JALLOW.</h1>
					<h1 className={`${welcomeStyles.csstyping} ${welcomeStyles.csstyping3}`}> FULL STACK DEVELOPER. </h1>	
					<div className={welcomeStyles.buttonWrapper}>
					<div className={welcomeStyles.button}>
					 <Link className={welcomeStyles.link} to="aboutSection" spy={true} smooth={true}offset={0} duration= {500}>
						Learn more 
						<img src={RightArrow} alt="Direction arrow"/>
					 </Link>
						
					</div>

				</div>
				</div>
				
				
			</div>
		)
	}
	
}

export default Welcome