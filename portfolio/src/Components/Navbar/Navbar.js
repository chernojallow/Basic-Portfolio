import React from 'react'
import navbarSCSS from './Navbar.module.scss'
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
			showMenu: {
				'height': '0px'
			}
	  }
	  this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
	  this.onClick = this.onClick.bind(this)
	}

	componentDidMount() {
	  this.updateWindowDimensions()
	  window.addEventListener('resize', this.updateWindowDimensions)
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions)
	}

	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight })
	}

	onClick(){
		if(this.state.showMenu.height === '0px'){
			this.setState({showMenu: {'height': '210px'}})
		} else {
			this.setState({showMenu: {'height': '0px'}})
		}
	}

	render() {
		
		const {width} = this.state
		return (
			<div className={width < 600 ? navbarSCSS.smallMenu : navbarSCSS.nav} style={this.props.fixed ? this.state.fixed : null}>
			{
				width < 600 ?
					<nav style={{width: '100%'}} id='navbar'>
						<div className={navbarSCSS.wrapper}>
							<img className={navbarSCSS.menuImg} src={menuImg} alt="Menu icon" onClick={this.onClick}/>
						</div>	
						
							<div className={navbarSCSS.hiddenMenu} style={this.state.showMenu} >
								<ul>
									<li className={navbarSCSS.hiddenItem} style={{paddingTop: "25px"}}> <Link activeClass={navbarSCSS.active} to="homeSection" spy={true} smooth={true} offset={0} duration= {500} onClick={this.onClick}>Home</Link> </li>
									<li className={navbarSCSS.hiddenItem}> <Link activeClass={navbarSCSS.active} to="aboutSection" spy={true} smooth={true} offset={this.props.fixed ? 0 : -180} duration= {500} onClick={this.onClick}>About</Link> </li>
									<li className={navbarSCSS.hiddenItem}> <Link activeClass={navbarSCSS.active} to="portfolioSection" spy={true} smooth={true} offset={this.props.fixed ? 0 : -180} duration= {500} onClick={this.onClick}>Portfolio</Link> </li>
									<li className={navbarSCSS.hiddenItem} style={{paddingBottom: "25px"}}> <Link activeClass={navbarSCSS.active} to="contactSection" spy={true} smooth={true} offset={this.props.fixed ? 0 : -180} duration= {500} onClick={this.onClick}>Contact</Link> </li>
									
								</ul>
							</div>	
					</nav>
					:
					<nav  id='navbar'>	
						<ul className={navbarSCSS.navItems}>
							<li className={navbarSCSS.navItem}> <Link activeClass={navbarSCSS.active} to="homePage" spy={true} smooth={true} offset={0} duration= {500}>Home</Link> </li>
							<li className={navbarSCSS.navItem}> <Link activeClass={navbarSCSS.active} to="aboutPage" spy={true} smooth={true} offset={1} duration= {500}>About</Link> </li>
							<li className={navbarSCSS.navItem}> <Link activeClass={navbarSCSS.active} to="portfolioPage" spy={true} smooth={true} offset={1}  duration= {500}>Portfolio</Link> </li>
							<li className={navbarSCSS.navItem}> <Link activeClass={navbarSCSS.active} to="contactPage" spy={true} smooth={true} offset={1} duration= {500}>Contact</Link> </li>
						</ul>
					</nav>
			}
			</div>
		)
	}
}

export default Navbar