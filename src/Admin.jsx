import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    //It needs t have all the user profiles in it .
    return (
        <div>
            <h1>Admin Page</h1>
            <Link to="/">Home</Link><br/>
            <Link to="/docsignup">create new doctor profile</Link>
        </div>
    );
};

export default Admin;
