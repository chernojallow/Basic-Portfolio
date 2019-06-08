import React from 'react'
import Header from 'Components/Header/Header.js'
import Project from './PortfolioComponent/PortfolioComponent.js'
import Fade from 'react-reveal/Fade';

import portfolioStyles from './Portfolio-style.scss'

const portfolioComponent = require('./PortfolioComponent.js')

class Portfolio extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			fixed: {
				paddingTop: '100px'
			},
			JAVASCRIPT: true,
			NODE: false,
			'REACT. JS + MongoDB': false,
			MYSQL: false,
			jQUERY: false,
			active: 'ALL',
			transition: false

		}
		this.onClick = this.onClick.bind(this)
	}

	onClick(event){
		const keys = Object.keys(this.state)
		keys.forEach((key) => {
			if(this.state[key] === true){
				this.setState({[key]: false})
			}
		})
		this.setState({[event.target.id]: true})
		this.setState({transition: true})
		this.setState({active: event.target.id})
		setTimeout(() => {
			this.setState({transition: false})
		},400)
	}

	render() {
		return (
			<div id={this.props.id} className={portfolioStyles.container} style={this.props.fixed ? this.state.fixed : null}>
				<Header name='PORTFOLIO'/>
				<Fade delay={500} fraction={1}>
					<div className={portfolioStyles.filterSection} delay={1000}>
						<div id="ALL" className={`${portfolioStyles.selector} ${this.state.JAVASCRIPT ? portfolioStyles.selectorActive : null}`} onClick={this.onClick}>Javascript</div>
						<div id="Node.js + Javascript + MYSQL + Express" className={`${portfolioStyles.selector} ${this.state.NODE ? portfolioStyles.selectorActive : null}`}  onClick={this.onClick}>Node.js</div>
						<div id="React.js + Node.js + MongoDB + Express" className={`${portfolioStyles.selector} ${this.state['REACT. JS + MongoDB'] ? portfolioStyles.selectorActive : null}`}  onClick={this.onClick}>React.js + MongoDB </div>
						 <div id="Javascript + MYSQL + Node.js" className={`${portfolioStyles.selector} ${this.state.MYSQL ? portfolioStyles.selectorActive : null}`}  onClick={this.onClick}>MYSQL </div> 
						<div id="Javascript + jQuery" className={`${portfolioStyles.selector} ${this.state.jQUERY ? portfolioStyles.selectorActive : null}`}  onClick={this.onClick}>jQuery</div>

					</div>
				</Fade>
				<Fade bottom fraction={0.15}>
					<div className={portfolioStyles.projects}>
						{
							
							Object.keys(portfolioComponent.projects).map((project) => 
								<Project project={portfolioComponent.projects[project]} fixed={this.props.fixed} show={this.state.active} transition={this.state.transition}/>								
							)

						}
					</div>
				</Fade>
				
			</div>	
			
		)
	}
}

export default Portfolio