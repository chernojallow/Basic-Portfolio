import React from 'react'
import navBarStyles from './Navbar-style.scss'
import { Link } from "react-scroll";
import menuImg from 'Assets/Images/menu.png'

class Navbar extends React.Component {

	constructor(props) {
	  super(props)
	  this.state = { 
	  	width: 0, 
	  	height: 0,
			fixed: { 
				top: '0px',
				position: 'fixed',
				width: '100%',
				zIndex: 999
			},
			menu: {
				'height': '0px'
			}
	  }
	  this.windowDimensions = this.windowDimensions.bind(this)
	  this.onClick = this.onClick.bind(this)
	}

	componentDidMount() {
	  this.windowDimensions()
	  window.addEventListener('resize', this.windowDimensions)
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.windowDimensions)
	}

	windowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight })
	}

	onClick(){
		if(this.state.menu.height === '0px'){
			this.setState({menu: {'height': '210px'}})
		} else {
			this.setState({menu: {'height': '0px'}})
		}
	}

	render() {
		const {width} = this.state
		return (
			<div className={width < 600 ? navBarStyles.smallMenu : navBarStyles.nav} style={this.props.fixed ? this.state.fixed : null}>
			{
				width < 600 ?
					<nav style={{width: '100%'}} id='navbar'>
						<div className={navBarStyles.wrapper}>
							<img className={navBarStyles.menuImg} src={menuImg} alt="Menu icon" onClick={this.onClick}/>
						</div>	
						
							<div className={navBarStyles.hiddenMenu} style={this.state.showMenu} >
								<ul>
									<li className={navBarStyles.hiddenItem} style={{paddingTop: "25px"}}> <Link activeClass={navBarStyles.active} to="homeSection" spy={true} smooth={true} offset={0} duration= {500} onClick={this.onClick}>Home</Link> </li>
									<li className={navBarStyles.hiddenItem}> <Link activeClass={navBarStyles.active} to="aboutSection" spy={true} smooth={true} offset={this.props.fixed ? 0 : -180} duration= {500} onClick={this.onClick}>About</Link> </li>
									<li className={navBarStyles.hiddenItem}> <Link activeClass={navBarStyles.active} to="portfolioSection" spy={true} smooth={true} offset={this.props.fixed ? 0 : -180} duration= {500} onClick={this.onClick}>Portfolio</Link> </li>
									<li className={navBarStyles.hiddenItem} style={{paddingBottom: "25px"}}> <Link activeClass={navBarStyles.active} to="contactSection" spy={true} smooth={true} offset={this.props.fixed ? 0 : -180} duration= {500} onClick={this.onClick}>Contact</Link> </li>
								</ul>
							</div>	
					</nav>
					:
					<nav  id='navbar'>	
						<ul className={navBarStyles.navItems}>
							<li className={navBarStyles.navItem}> <Link activeClass={navBarStyles.active} to="homeSection" spy={true} smooth={true} offset={0} duration= {500}>Home</Link> </li>
							<li className={navBarStyles.navItem}> <Link activeClass={navBarStyles.active} to="aboutSection" spy={true} smooth={true} offset={1} duration= {500}>About</Link> </li>
							<li className={navBarStyles.navItem}> <Link activeClass={navBarStyles.active} to="portfolioSection" spy={true} smooth={true} offset={1}  duration= {500}>Portfolio</Link> </li>
							<li className={navBarStyles.navItem}> <Link activeClass={navBarStyles.active} to="contactSection" spy={true} smooth={true} offset={1} duration= {500}>Contact</Link> </li>
						</ul>
					</nav>
			}
			</div>
		)
	}
}

export default Navbar