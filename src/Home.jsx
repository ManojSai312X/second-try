

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo.png';

const Home = () => {
    return (

        <div>
            <header>
                <div className="logo">
                <img src={logo} alt="Hospital Management System logo" />
                </div>
                <hr/>
            <nav className="nav1">
                <ul type='none'>
                <li><a href="#home">Home</a></li>
               <li><a href="#contact">Contact</a></li> 
                <li><a href="#about">About</a></li>
                <li><Link to="/login-signup" className='link'>Sign In</Link></li>
                <li><Link to="/doclogin" className='link'>Admin</Link></li>
                </ul>
            </nav>
            </header>
            <div id="home">
            <h1>Welcome to Home Page</h1>
            <p>
                 Welcome to our <strong>Hospital Management System </strong>, designed to streamline operations 
                and improve patient care. Our platform provides an intuitive interface for 
                patients and healthcare professionals, ensuring efficient communication 
                and access to vital health information.
            </p>
            </div>
            <main>
                <div id='contact'>
                    <h1 >Contact Us</h1>
                    <p>
                        If you have any questions or need assistance, feel free to reach out to us. 
                        You can contact our support team at <a href="mailto:support@hospital.com">support@hospital.com</a> 
                        or call us at <strong> number </strong>.
                    </p>
                    <p>
                        Follow us on our social media channels for updates and news:
                        <ul>
                         <li><a href="https://twitter.com/yourhospital">Twitter</a></li>
                            <li><a href="https://facebook.com/yourhospital">Facebook</a></li>
                            <li><a href="https://instagram.com/yourhospital">Instagram</a></li>
                        </ul>
                    </p>
                </div>
                <div id='about'>
                    <h1 >About</h1>
                    <p>
                        Our Hospital Management System is built to enhance the patient experience 
                        by offering features such as appointment scheduling, medication reminders, 
                        and easy access to health records. Our mission is to improve healthcare delivery 
                        and patient engagement through innovative technology.
                    </p>
                    <p>
                        We are committed to providing top-notch healthcare services and strive to be 
                        at the forefront of medical technology. Our team consists of dedicated 
                        healthcare professionals and tech experts working together to make healthcare 
                        accessible and efficient for everyone.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Home; 

