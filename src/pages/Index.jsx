import React, { useState } from "react";
import { Box, Button, Text, VStack, Image } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack spacing={4} p={5}>
      <Button leftIcon={<FaDownload />} colorScheme="teal" onClick={fetchUserData} isLoading={loading}>
        Fetch User Data
      </Button>
      {userData && (
        <Box p={5} shadow="md" borderWidth="1px">
          <Text fontWeight="bold">User Information:</Text>
          <Text>Name: {userData.name}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Phone: {userData.phone}</Text>
          <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHBlcnNvbnxlbnwwfHx8fDE3MTM1MjUyNTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Portrait" />
        </Box>
      )}
    </VStack>
  );
};

export default Index;
