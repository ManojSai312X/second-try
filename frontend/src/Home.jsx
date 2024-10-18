import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import logo from './logo.jpg';
import linkedinLogo from './linkedin.png';
import facebookLogo from './facebook.png';
import instagramLogo from './instagram.jpg';

const Home = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <div>
            <header>
                <div className="logo">
                    <img src={logo} alt="Hospital Management System logo" loading="lazy" />
                </div>
                <hr />
                <button className="menu-toggle" onClick={toggleNav} aria-label="Toggle navigation menu">
                    ☰
                </button>
            </header>
            <nav className={`nav ${navOpen ? 'open' : ''}`} role="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                    <li><NavLink to="/login-signup" className='link' activeClassName='active'>Sign In</NavLink></li>
                    <li><NavLink to="/doclogin" className='link' activeClassName='active'>Admin</NavLink></li>
                </ul>
            </nav>
            <div id="home" className='home-background'>
                <h1><strong>Welcome to Our Hospital Management System</strong></h1>
                <p>
                    Welcome to our <strong>Hospital Management System</strong>, designed to streamline operations 
                    and improve patient care. Our platform provides an intuitive interface for 
                    patients and healthcare professionals, ensuring efficient communication 
                    and access to vital health information.
                </p>
                <p>Our platform offers features such as:</p>
                <p><strong>Automated Reminders:</strong> Get timely notifications for when to take your medications, ensuring you never miss a dose.</p>
                <p><strong>Medication Tracking:</strong> Monitor your adherence to prescribed medications and keep a detailed record of your medication history.</p>
                <p><strong>Comprehensive Drug Information:</strong> Access detailed information about your prescribed medications, including dosages, side effects, and interactions.</p>
                <p><strong>Integration with Hospital Databases:</strong> Our system seamlessly integrates with hospital databases, allowing healthcare providers to monitor patient compliance in real-time.</p>
            </div>
            <main>
                <div id="contact" className='home-background2'>
                    <h1><strong>Contact Us</strong></h1>
                    <p>
                        If you have any questions or need assistance, feel free to reach out to us. 
                        You can contact our support team at <a href="mailto:support@hospital.com"> support@hospital.com</a> 
                        or call us at <strong>+1-800-555-0199</strong>.
                    </p>
                    <p>
                        Follow us on our social media channels for updates and news:
                    </p>
                    <ul className="social-media">
                    <li>
<a href="https://linkedin.com/in/yourhospital" target="_blank" rel="noopener noreferrer"> 
  <img src={linkedinLogo} alt="LinkedIn Logo" className="social-logo" /> 
 LinkedIn </a> </li>
                        
                        <li>
                            <a href="https://facebook.com/yourhospital">
                                <img src={facebookLogo} alt="Facebook Logo" className="social-logo" />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/yourhospital">
                                <img src={instagramLogo} alt="Instagram Logo" className="social-logo" />
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div id='about' className="home-background3">
                    <h1><strong>About Us</strong></h1>
                    <p>
                    
                        Our Hospital Management System enhances the patient experience 
                        with features such as appointment scheduling, medication reminders, 
                        and easy access to health records. Our mission is to improve healthcare delivery 
                        and patient engagement through innovative technology.
                    </p>
                    <p>
                        We are committed to providing top-notch healthcare services and strive to be 
                        at the forefront of medical technology, ensuring accessibility and efficiency for everyone.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Home;
