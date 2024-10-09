import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    // data need to be fetched just writing a dictionary example
    const userData = { 
        name: 'John Doe',
         date: '2024-01-01',
          time: '10:00',
           die: 'Diaetes' };

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {userData.name}</p>
            <p>Date of Joining: {userData.date}</p>
            <p>Time: {userData.time}</p>
            <p>Diet: {userData.die}</p>
            <Link to="/">Home</Link>
        </div>
    );
};

export default UserProfile;
