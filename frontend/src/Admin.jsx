import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, VStack } from "@chakra-ui/react";

const Admin = () => {
    // It needs to have all the user profiles in it.
    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            height="100vh" 
            backgroundColor="gray.100"
            padding={4}
        >
            <Heading as="h1" size="2xl" mb={6}>Admin Page</Heading>
            <VStack spacing={4}>
                <Link to="/">
                    <Button colorScheme="teal" width="full">Home</Button>
                </Link>
                <Link to="/docsignup">
                    <Button colorScheme="teal" width="full">Create New Doctor Profile</Button>
                </Link>
            </VStack>
        </Box>
    );
};

export default Admin;
