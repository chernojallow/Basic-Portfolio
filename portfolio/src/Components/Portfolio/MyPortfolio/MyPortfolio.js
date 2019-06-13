
import React from 'react' 
import { Slide } from 'react-slideshow-image'

import githubIcon from 'Assets/Images/github.png'
import siteIcon from 'Assets/Images/site.png'
import closeIcon from 'Assets/Images/close.png'

import projectStyles from './MyPortfolio.module.scss'

const images = require.context('../../../Assets/Images', true)

class MyPortfolio extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			showTile: {
				opacity: 0
			},
			showPreview: false,
			dontRemove: false,
			removed: { display: 'flex' },
			images: []
			
		}
		this.showPreview = this.showPreview.bind(this)
		this.removePreview = this.removePreview.bind(this)
		this.onMouseEnterChild = this.onMouseEnterChild.bind(this)
		this.onMouseLeaveChild = this.onMouseLeaveChild.bind(this)
		this.onShow = this.onShow.bind(this)
		this.getStyles = this.getStyles.bind(this)
	}

	componentWillMount(){
		let imageArr = []
		this.props.project.images.map(image => imageArr.push(images(`./${image}`)))
		this.setState({images: imageArr})
		if(this.props.project.images.length < 2){
			this.setState({properties: {
			  duration: 5000,
			  transitionDuration: 500,
			  infinite: false,
			  arrows: false,
			  autoplay: false
			}})
		} else {
			this.setState({properties: {
			  duration: 5000,
			  transitionDuration: 500,
			  infinite: true,
			  arrows: true
			}})
		}
	}

	showPreview () {
		this.setState({showPreview: true})
	}

	removePreview (event) {
		if(!this.state.dontRemove || event.target.id === 'exit') {
  		this.setState({showPreview: ''})
  		setTimeout(() => {
  			this.setState({showPreview: false})
  		},400)
  	}
 	}

 	onMouseEnterChild () {
 		this.setState({dontRemove: true})
 	}

 	onMouseLeaveChild () {
 		this.setState({dontRemove: false})
 	}

 	onShow() {
 		if(this.props.show.toLowerCase() === this.props.project.language.toLowerCase() || this.props.show.toLowerCase() === 'all'){
 			if(this.state.removed.display !== 'flex'){
				this.setState({removed: {display: 'flex'}})
 			}
			return true
 		} 
 		return false
 	}

 	getStyles(){
 		const styles = {
 			marginTop: '0px',
 			opacity: 0
 		}
 		this.state.showPreview ? styles.opacity = 1 : styles.opacity = 0
 		this.props.fixed ? styles.marginTop = '62px' : styles.marginTop= '0px'

 		return styles
 	}

	render(){

		return (

			<div className={this.props.transition ? projectStyles.animateRemove : this.onShow() ? projectStyles.projectTile : projectStyles.animateRemove }>
				<img src={this.state.images[0]} alt="Project tile"/>
				<div className={projectStyles.hover}  >
					<h3>{this.props.project.name}</h3>
					<span className={projectStyles.subtitle}>{this.props.project.language}</span>
					<span ><p className={projectStyles.button} onClick={this.showPreview}>LEARN MORE</p></span>
				</div>
				{
					this.state.showPreview !== false ? 
						<div id='preview' className={projectStyles.preview} style={this.getStyles()} onClick={this.removePreview}>
							<div className={`${projectStyles.container} ${this.state.showPreview !== true ? projectStyles.fadeOutPreview : null}`} onMouseEnter={this.onMouseEnterChild} onMouseLeave={this.onMouseLeaveChild}>
								<div className={projectStyles.img}>
									<Slide {...this.state.properties}>
									{
										this.state.images.map((image) => 
											<div className={projectStyles.eachSlide}>
							          <img src={image} alt="Project tile"/>
							        </div>
										)
									}
									</Slide>
								</div>
								<div className={projectStyles.details}>
									<h1>{this.props.project.name}</h1>
									<h3>{this.props.project.subtitle}</h3>
									<p>{this.props.project.description}</p>
									<div className={projectStyles.links}>
										{
											this.props.project.link !== '' ? 
												<a href={this.props.project.link}>Heroku<img src={siteIcon} alt="Website icon"/> </a>
											: null
										}
										<a href={this.props.project.github}>github <img src={githubIcon} alt="Github icon"/>  </a>
										<span onClick={this.removePreview}><img id='exit' src={closeIcon} alt="Close view button"/></span>
									</div>
									
								</div>
							</div>
						</div>
					: null
				}
				
			</div>

		)
	}
	
}

export default MyPortfolio