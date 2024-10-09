import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
    return (
        <div>
            <header>
                <h2>Hospital Managment System</h2>
                <hr/>
            <nav>
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
            </div>
            <main>
                <div id='contact'>
                    <h2 >Contact Us</h2>
                </div>
                <div id='about'>
                    <h2 >About</h2>
                </div>
            </main>
        </div>
    );
};

export default Home;
