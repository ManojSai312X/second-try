import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./sign.css"
const LoginSignup = () => {
    const [formData, setFormData] = useState({email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;//deconstructors
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        //code for backend
        navigate('/details');
    };

    return (
        <div>
            <div className="conatiner">
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <p>Doesnt have a account?<span><Link to="/signup">SignUp</Link></span></p>
            <button type="submit">Sign In</button>
        </form></div>
        </div>
    );
};

export default LoginSignup;
