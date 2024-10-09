import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./sign.css";
const Docsignup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;//deconstructors
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        //code for backend
        navigate('/admin');
    };
  return (
    <div>
        <div className='contain'>
         <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Create</button>
        </form>
    </div>
    </div>
  )
}

export default Docsignup;