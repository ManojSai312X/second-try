import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const [formData, setFormData] = useState({ name: '', date: '', time: '', diet: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/userprofile');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="date" name="date" onChange={handleChange} required />
            <input type="time" name="time" onChange={handleChange} required />
            <select name="diet" onChange={handleChange} required>
                <option value="">Select Diesease</option>
                <option value="diet1">Diabetes</option>
                <option value="diet2">cholestrol</option>
                <option value="diet3">Cancer</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Details;
