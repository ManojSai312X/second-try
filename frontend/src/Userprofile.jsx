import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Text, Textarea, VStack, Heading } from "@chakra-ui/react";
const UserProfile = () => {
    const location = useLocation();
    const userData = location.state || {
        name: 'John Doe',
        dateOfJoining: '2024-01-01',
        time: '10:00',
        diet: 'Diabetes',
        age: '',
        mobile: ''
    };

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [notificationPermission, setNotificationPermission] = useState(Notification.permission);
    const [timeoutId, setTimeoutId] = useState(null);

    const requestNotificationPermission = () => {
        if (notificationPermission !== "granted") {
            Notification.requestPermission().then(permission => {
                setNotificationPermission(permission);
            });
        }
    };

    const showNotification = () => {
        if (notificationPermission === "granted") {
            new Notification("Reminder", {
                body: `Time for your appointment at ${userData.time}`,
            });
        }
    };

    useEffect(() => {
        requestNotificationPermission();

        const timeParts = userData.time.split(':');
        const appointmentTime = new Date();
        appointmentTime.setHours(timeParts[0], timeParts[1], 0);

        const now = new Date();
        const delay = appointmentTime - now;

        if (delay > 0) {
            const id = setTimeout(() => {
                showNotification();
            }, delay);
            setTimeoutId(id);
        }

        return () => clearTimeout(timeoutId);
    }, [userData.time, notificationPermission]);

    const genAnswer = async () => {
        setAnswer("loading...");
        const response = await axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBRDZgYPWooEDx3xiGeyJzsVgAtOBNPbjo",
            method: "post",
            data: { "contents": [{ "parts": [{ "text": question }] }] }
        });
        setAnswer(response.data.candidates[0].content.parts[0].text);
    };

    return (
        <Box p={4}>
            <Heading text-align='center'>User Profile</Heading><br/>
            <VStack spacing={4} align="start">
                <Text><strong>Name:</strong> {userData.name}</Text>
                <Text><strong>Date of Joining:</strong> {userData.dateOfJoining}</Text>
                <Text><strong>Time:</strong> {userData.time}</Text>
                <Text><strong>Diet:</strong> {userData.diet}</Text>
                <Text><strong>Age:</strong> {userData.age}</Text>
                <Text><strong>Mobile:</strong> {userData.mobile}</Text>
            </VStack>
            <VStack spacing={4} align="start" mt={8}>
                <Textarea
                    rows="2"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Type your question..."
                />
                <Button onClick={genAnswer} colorScheme="teal">
                    Generate Answer
                </Button>
                <Text>{answer}</Text>
            </VStack>
            <Link 
                to="/" 
                style={{ 
                    border: '1px solid teal', 
                    backgroundColor: 'teal', 
                    color: 'white', 
                    padding: '8px', 
                    borderRadius: '4px', 
                    display: 'inline-block', 
                    textDecoration: 'none',
                    marginTop: '20px'
                }}
            >
                Home
            </Link>
        </Box>
    );
};

export default UserProfile;
