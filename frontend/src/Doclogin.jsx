import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./sign.css"
const Doclogin = () => {
    const [formData, setFormData] = useState({  email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/admin');
    };
    return (
        <div>
            <h1>Doctor Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" name='email' required onChange={handleChange} />
                <input type="password" placeholder="Password" name='password' required onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Doclogin;
