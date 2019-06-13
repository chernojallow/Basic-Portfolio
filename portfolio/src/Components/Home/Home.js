import React from 'react'
import { Link } from "react-scroll";
import homeStyles from './Home.module.scss'
import RightArrow from 'Assets/Images/right-arrow.png'

class Home extends React.Component {

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
			<div id={this.props.id} className={homeStyles.container}>
				<div className={homeStyles.wrapper}>
					<h1 className={`${homeStyles.csstyping} ${homeStyles.csstyping1}`}>Hello. </h1> 
					<h1 className={`${homeStyles.csstyping} ${homeStyles.csstyping2}`}> I'm Cherno Jallow.</h1>
					<h1 className={`${homeStyles.csstyping} ${homeStyles.csstyping3}`}> I'm a Full Stack Developer. </h1>	
					<div className={homeStyles.buttonWrapper}>
					<div className={homeStyles.button}>
					 <Link className={homeStyles.link} to="aboutPage" spy={true} smooth={true}offset={0} duration= {500}>
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

export default Home