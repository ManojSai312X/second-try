import React, { useState } from 'react';
import axios from 'axios';
import { Box, Card, CardBody, Input, FormControl, FormLabel, Button, Stack, Link } from "@chakra-ui/react";
import api from './Api1.js'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom';
import logo from "./docc.webp";

const Signup = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signup = async () => {
    try {
      const response = await axios.post(`${api}/signup`, {
        FirstName,
        LastName,
        PhoneNumber,
        Email,
        password
      });

      const message = response.data.message;

      if (message === "Signup successful") {
        alert("Sign up successful");
        window.location.href = '/signin';
      } else if (message === "Email already exists") {
        alert("Email already exists");
      }
    } catch (e) {
      console.error(e.response ? e.response.data : e.message);
      alert("An error occurred. Please try again.");
    }
  };

  const handlesignin = () => {
    navigate("/login-signup");
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
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input 
                type='text' 
                placeholder='Enter your First name'
                value={FirstName} 
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input 
                type='text'
                placeholder='Enter your Last name'
                value={LastName} 
                onChange={(e) => setLastName(e.target.value)}
              /> 
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input 
                type='text'
                placeholder='Enter your phone number'
                value={PhoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input 
                type='email' 
                placeholder='Enter your email'
                value={Email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input 
                type='password' 
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </FormControl>
            <Button 
              size='lg' 
              mt={4} 
              backgroundColor="#ff4500"
              onClick={signup}
              _hover={{ bg: "#ff7f50" }}
              width="100%"
            >
              Sign Up
            </Button>
            <Box marginTop="4" textAlign="center">
              <Link color="teal.500" onClick={handlesignin}>
                Already have an account? Sign in
              </Link>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default Signup;
