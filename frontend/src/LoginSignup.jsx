import React, { useState } from 'react';
import axios from 'axios';
import { Box, Card, CardBody, Input, FormControl, FormLabel, Button, Stack, Link } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import logo from "./docc.webp";
import api from './Api1.js'; // Ensure the path is correct

const LoginSignup = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api}/login`, formData);
            const message = response.data.message;

            if (message === "Login successful") {
                alert("Login successful");
                navigate('/details');
            } else {
                alert(message); // Handle any other messages from the server
            }
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            alert("An error occurred. Please try again.");
        }
    };
    const handlesignup = () => {
        navigate("/signup");
      };

    return (
        <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            height="100vh" 
            backgroundImage={`url(${logo})`}
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <Card 
                width="400px" 
                boxShadow="xl" 
                borderRadius="md" 
                backgroundColor="rgba(255, 255, 255, 0.9)"
                p={4}
            >
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input 
                                    type="email" 
                                    name="email"
                                    placeholder="Email" 
                                    onChange={handleChange} 
                                    required 
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input 
                                    type="password" 
                                    name="password"
                                    placeholder="Password" 
                                    onChange={handleChange} 
                                    required 
                                />
                            </FormControl>
                            <Button 
                                type="submit" 
                                size='lg' 
                                mt={4} 
                                backgroundColor="#ff4500"
                                _hover={{ bg: "#ff7f50" }}
                                width="100%"
                            >
                                Sign In
                            </Button>
                            <Box marginTop="4" textAlign="center">
                                <p>Doesn't have an account? <Link color="teal.500"  onClick={handlesignup}>Sign Up</Link></p>
                            </Box>
                        </Stack>
                    </form>
                </CardBody>
            </Card>
        </Box>
    );
};

export default LoginSignup;
