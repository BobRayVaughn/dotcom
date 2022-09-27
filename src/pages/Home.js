
import React from 'react';
import { useNav } from '../customHooks/useNav';
import IMAGES from '../images';
//import './Page.css';
import './Home.css';
const Home = () => {
	
	const homeRef = useNav('Home');

	return (
		<section ref={homeRef} id='homeContainer'>
			<img src= { IMAGES.brvf } alt='Bob Ray Vaughn'/>
			<div>
				<h3>Welcome to my hand crafted, organic, free range personal portfolio website</h3>
				
			</div>
		</section>
	);
};

export default Home;