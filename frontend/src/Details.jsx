import React, { useState } from 'react';
import { Box, Card, CardBody, Input, FormControl, FormLabel, Button, Stack, Select } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import log from './doc.jpg';

const Details = () => {
    const [formData, setFormData] = useState({ 
        name: '', 
        dateOfJoining: '', 
        time: '', 
        diet: '', 
        age: '', 
        mobile: '' 
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/userprofile', { state: formData }); // Pass formData to UserProfile
    };

    return (
        <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            height="100vh"
            backgroundImage={`url(${log})`}
            backgroundColor="gray.100"
            overflow="hidden"
        >
            <Card width="400px" boxShadow="xl" borderRadius="md" p={4}>
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>
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
                                <FormLabel>Date of Joining</FormLabel>
                                <Input 
                                    type="date" 
                                    name="dateOfJoining" 
                                    onChange={handleChange} 
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Age</FormLabel>
                                <Input 
                                    type="number" 
                                    name="age" 
                                    placeholder="Age" 
                                    onChange={handleChange} 
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Mobile Number</FormLabel>
                                <Input 
                                    type="tel" 
                                    name="mobile" 
                                    placeholder="Mobile Number" 
                                    onChange={handleChange} 
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Time</FormLabel>
                                <Input 
                                    type="time" 
                                    name="time" 
                                    onChange={handleChange} 
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Diesease</FormLabel>
                                <Select 
                                    name="diet" 
                                    onChange={handleChange} 
                                >
                                    <option value="">Select Disease</option>
                                    <option value="Diabetes">Diabetes</option>
                                    <option value="Cholesterol">Cholesterol</option>
                                    <option value="Cancer">Cancer</option>
                                </Select>
                            </FormControl>
                            <Button 
                                type="submit" 
                                colorScheme="teal"
                            >
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </CardBody>
            </Card>
        </Box>
    );
};

export default Details;
