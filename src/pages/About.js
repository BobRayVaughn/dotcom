import React from 'react';
import { useNav } from '../customHooks/useNav';
import IMAGES from '../images';
import './About.css';


const About = () => {

	const aboutRef = useNav('About');

	return (
		<section ref={aboutRef} id='aboutContainer'>
		<img src= { IMAGES.brvc } alt='Bob Ray Vaughn'/>
			<div>
				<h3>ABOUT</h3>
				<p>Hey y'all, my name is Robert Ray Vaughn but I go by Bob Ray. I am a Full Stack Software Engineer and this is my website that I built from the ground up to showcase myself and my work. I have held a wide range of jobs all with a strong emphasis on customer service. From Paramedic, to Sous Chef, to Technical Help Desk Associate. I graduated from Thinkful's Software Engineering Immersion program in early 2022. Thinkful was a full-time 6-month program where we learned industry best practices and software development standards. Outside of software development I have an Australian Cattle Dog named Doug, a cat named Olive, and an Asian Forrest Scorpion named Esqueleto. I also enjoy a wide range of hobbies including bowling and playing games with friends. I like painting/airbrushing D&D and Warhammer miniatures along with Gunpla models. Additionally, I build/craft things like 3D printed helmets, arcade fight sticks, and a lot more. </p>
			</div>
		</section>
	);
};

export default About;