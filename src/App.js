import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import Doclogin from './Doclogin';
import LoginSignup from './LoginSignup';
import Details from './Details';
import UserProfile from './Userprofile';
import './App.css';
import Signup from './Signup';
import Docsignup from './Docsignup';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/doclogin" element={<Doclogin />} />
                <Route path="/login-signup" element={<LoginSignup />} />
                <Route path="/details" element={<Details />} />
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path='/signup' element={ <Signup/>}/>
                <Route path="/docsignup" element={<Docsignup/>} />
            </Routes>
        </Router>
    );
}

export default App;
