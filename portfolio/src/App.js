import React from 'react'
import Home from './Components/Home/Home.js'
import About from './Components/About/About.js'
import Portfolio from './Components/Portfolio/Portfolio.js'
import Contact from './Components/Contact/Contact.js'
import Navbar from './Components/Navbar/Navbar.js'
import Footer from './Components/Footer/Footer.js'
import appStyles from './App.module.scss';
import Particles from 'react-particles-js'

import { particles} from './Particles.js'

class App extends React.Component {

	constructor(props) {
	  super(props)
	  this.state = {
	  	fixed: false
    }
	  this.windowDimensions = this.windowDimensions.bind(this)
	  this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount() {
	  this.windowDimensions()
	  window.addEventListener('resize', this.windowDimensions)
	  window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.windowDimensions)
	  window.removeEventListener('scroll', this.handleScroll)
	}

	windowDimensions() {
	  this.setState({height: window.innerHeight})
	}

	handleScroll(event) {
		if(window.pageYOffset > this.state.height ){
			this.setState({fixed: true})
		} else {
			this.setState({fixed: false})
		}
	}

	render() {
		return (
	    <div className={appStyles.app}>
	    	{/* We Load particles,view file particleOptions.js for config*/}
	      <Particles className={appStyles.particles}
	        params={particles}/>
	      <Home id='homePage'/>
	      <Navbar fixed={this.state.fixed}/>
	      <About id='aboutPage' fixed={this.state.fixed}/>
	      <Portfolio id='portfolioPage' fixed={this.state.fixed}/>
	      <Contact id='contactPage' />
				<Footer />
	    </div>
	  )
	}
  
}

export default App;
