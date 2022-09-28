import React from 'react';
import { useNav } from '../customHooks/useNav';
import IMAGES from '../images';
import './Portfolio.css';


const Portfolio = () => {

	const portfolioRef = useNav('Portfolio');

	return (
		<section ref={portfolioRef} id='portfolioContainer'>
		<img src= { IMAGES.brvc } alt='Bob Ray Vaughn'/>
			<div>
				<h3>Portfolio</h3>
			</div>
		</section>
	);
};

export default Portfolio;