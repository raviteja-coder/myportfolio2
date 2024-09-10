import React from 'react';
import Navbar from '../Navbar'
import './index.css';

const About = () => {
  return (<div className="about-container">
  <Navbar/>
  <section id="about" className="about-section">
    <div  className='description'>

<h2 className="about-title">About Me</h2>
<p className="about-text">
  I am a passionate software developer with expertise in React.js and creating dynamic, responsive web applications. My goal is to create beautiful and functional digital experiences.
</p>
</div>
<div className="about-image">
  {/* Add your image here */}
  <img src="https://res.cloudinary.com/dayzpflw1/image/upload/v1725353590/my_image_ayhr3c.jpg" alt="Ravi Teja" />
</div>
</section></div>
    
  );
};

export default About;
