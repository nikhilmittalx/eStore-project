import React from 'react';
import classes from './Team.module.css';
import Sanyog from '../../assets/Team/Sanyog.png';
import Saurabh from '../../assets/Team/Saurabh.png';
import Sapna from '../../assets/Team/Sapna.png';
import Announcement from '../../layout/Announcement';
import Navbar from '../../layout/Navbar';

const Team = () => {
	return (
		<>
			<Announcement />
			<Navbar />
			<div className={classes.main}>
				<div className={classes.item}>
					<h1 className={classes.main_title}>The creative crew</h1>
				</div>
				{/* <div className={`${classes.item}  ${classes.right_section}`}>
					<h2 className={classes.secondary_title}>Who we are</h2>
					<p className={classes.description}>
						We are a team of creatively diverse, driven, innovative individuals
						working in creating a community of GrabBit that can help you grab
						your dream job.
					</p>
				</div> */}
			</div>

			<div className={classes.team_members}>

				<a
					href="#"
					target="_blank"
					rel="noreferrer"
					className={`${classes.team} ${classes.member_2}`}
				>
					<img
						className={classes.img}
						id={classes.img_2}
						src={Saurabh}
						alt="Nikhil"
					/>
					{/* <span className={classes.position}>Grabby</span> */}
					<p className={classes.name}>Nikhil Mittal</p>
					<p >FullStack Developer</p>
				</a>
				<a
					href="#"
					target="_blank"
					rel="noreferrer"
					className={`${classes.team} ${classes.member_3}`}
				>
					<img
						className={classes.img}
						id={classes.img_3}
						src={Sapna}
						alt="Shally"
					/>
					{/* <span className={classes.position}>ThunderBolt</span> */}
					<p className={classes.name}>Shailendra Goyal</p>
					<p>FullStack Developer</p>
				</a>
				
				
				
			</div>
		</>
	);
};

export default Team;
