import React from 'react'
import Home from './Components/Home/Home.js'
import About from './Components/About/About.js'
import Portfolio from './Components/Portfolio/Portfolio.js'
import Contact from './Components/Contact/Contact.js'
import AppStyles from './App.style.scss';


class App extends React.Component {

	constructor(props) {
	  super(props)
	  this.state = {
	  	fixed: false
    }
	  this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
	  this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount() {
	  this.updateWindowDimensions()
	  window.addEventListener('size', this.updateWindowDimensions)
	  window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
	  window.removeEventListener('size', this.updateWindowDimensions)
	  window.removeEventListener('scroll', this.handleScroll)
	}

	updateWindowDimensions() {
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
	    <div className={AppStyles.app}>
	      <Home id='homeSection'/>
	      <About id='aboutSection' fixed={this.state.fixed}/>
	      <Portfolio id='portfolioSection' fixed={this.state.fixed}/>
	      <Contact id='contactSection' />

	    </div>
	  )
	}
  
}

export default App;
