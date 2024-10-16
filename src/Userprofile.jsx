import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './profile.css'; // Import the CSS file

const UserProfile = () => {
    const userData = {
        name: 'John Doe',
        date: '2024-01-01',
        time: '10:00',
        diet: 'Diabetes',
    };

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    async function genAnswer(){
        setAnswer("loading...")
           const response = await axios({
                url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBRDZgYPWooEDx3xiGeyJzsVgAtOBNPbjo",
                method:"post",
                data :
                    {"contents":[{"parts":[{"text":question}]}]}
            });
            setAnswer(
                response["data"]["candidates"][0]["content"]["parts"][0]["text"]
            );
        };


    return (
        <div className="user-profile">
            <h1>User Profile</h1>
            <div className="user-info">
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Date of Joining:</strong> {userData.date}</p>
                <p><strong>Time:</strong> {userData.time}</p>
                <p><strong>Diet:</strong> {userData.diet}</p>
            </div>
            <div className="chat">
                <div className="response">
                    <pre>{answer}</pre>
                </div>
                <div className="input-area">
                    <textarea
                        rows="2"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Type your question..."
                    />
                    <button onClick={genAnswer} >
                        { "Generate Answer"}
                    </button>
                </div>
            </div>
            <Link to="/" className="home-link">Home</Link>
        </div>
    );
};

export default UserProfile;
