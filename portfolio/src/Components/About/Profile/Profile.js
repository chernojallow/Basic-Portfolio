import React from 'react'
// import headshot from 'Images/profilepic-circle.png'
import headshot from 'Assets/Images/cherno.jpg'
import profileStyles from './Profile.module.scss'

const Profile = () => {

	return (
		<div className={profileStyles.container}>
			<div className={profileStyles.imgWrapper}>
				<img src={headshot} alt="My headshot"/>
			</div>
			
			<h2>This guy!!</h2>
			<p>I'm a Full Stack Developer from Dallas, Texas.Creating dynamic applications that are user friendly,working individually or collaborating with other people to come up with great solutions are all my passions. </p>
		</div>
	)
}

export default Profile