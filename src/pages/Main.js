import React from 'react';
import { Home, About, Portfolio, Contact } from './';
import Slideshow from '../images/Slideshow'

const Main = () => (
	<main>
		<Home />
		<About />
		<Slideshow />
		<Portfolio />
		<Contact />
	</main>
);

export default Main;