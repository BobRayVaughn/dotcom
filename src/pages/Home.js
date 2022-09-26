
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
				<h3>HOME</h3>
				<p>This is the home section</p>
			</div>
		</section>
	);
};

export default Home;