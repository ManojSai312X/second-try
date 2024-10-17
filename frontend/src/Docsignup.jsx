import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Heading, VStack, useToast } from "@chakra-ui/react";
import { Link ,useNavigate } from 'react-router-dom';
import axios from 'axios';
import log from './bed.jpg'
const Docsignup = () => {
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        password: '' 
    });
    const navigate = useNavigate();
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signup', formData); // Adjust the API endpoint as needed
            const message = response.data.message;

            if (message === "Signup successful") {
                alert("Sign up successful");
                window.location.href = '/signin';
            } else if (message === "Email already exists") {
                alert("Email already exists");
            }
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            alert("An error occurred. Please try again.");
        }
    };
    const handlesignin = () => {
      navigate("/doclogin");
    };
    return (
        <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            height="100vh" 
             backgroundImage={`url(${log})`}
            backgroundSize="cover"
            backgroundColor="gray.100"
            padding={4}
        >
            <VStack 
                spacing={4} 
                backgroundColor="white" 
                padding={6} 
                borderRadius="md" 
                boxShadow="lg"
            >
                <Heading as="h1" size="lg">Doctor Signup</Heading>
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            onChange={handleChange} 
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            onChange={handleChange} 
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            onChange={handleChange} 
                        />
                    </FormControl>
                    <Button 
                        type="submit" 
                        colorScheme="teal" 
                        width="full" 
                        mt={4}
                    >
                         <Link onClick={handlesignin}>Sign Up</Link> 
                    </Button>
                </form>
            </VStack>
        </Box>
    );
};

export default Docsignup;
