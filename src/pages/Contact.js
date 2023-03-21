import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Contact = () => {

	const contactRef = useNav('Contact');

	return (
		<section ref={contactRef} id='contactContainer'>
			<div>
				<h3>CONTACT</h3>
				<p>This is the contact section!</p>
			</div>
		</section>
	);
};

export default Contact;