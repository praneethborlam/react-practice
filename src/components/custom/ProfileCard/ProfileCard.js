import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Avatar,
  Heading,
  Text,
  Button,
  Badge
} from '@chakra-ui/react';

function ProfileCard({
  name = "John Doe",
  role = "Developer", 
  avatar,
  isOnline = false,
  email,
  onConnect = () => {},
  ...props 
}) {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      p={6}
      shadow="md"
      border="1px"
      borderColor="gray.200"
      maxW="300px"
      _hover={{
        shadow: "lg",
        transform: "translateY(-2px)"
      }}
      transition="all 0.2s"
      {...props}
    >
      <VStack spacing={4} align="center">
        
        <Box position="relative">
          <Avatar 
            size="lg" 
            name={name} 
            src={avatar}
          />
          {isOnline && (
            <Box
              position="absolute"
              bottom="0"
              right="0"
              w="4"
              h="4"
              bg="green.400"
              borderRadius="full"
              border="2px"
              borderColor="white"
            />
          )}
        </Box>

        <VStack spacing={1} textAlign="center">
          <Heading size="md" color="gray.800">
            {name}
          </Heading>
          <HStack spacing={2}>
            <Text color="gray.600" fontSize="sm">
              {role}
            </Text>
            {isOnline && (
              <Badge colorScheme="green" size="sm">
                Online
              </Badge>
            )}
          </HStack>
          {email && (
            <Text color="gray.500" fontSize="xs">
              {email}
            </Text>
          )}
        </VStack>

        <Button
          colorScheme="blue"
          size="sm"
          w="full"
          onClick={onConnect}
          _hover={{
            transform: "scale(1.02)"
          }}
        >
          Connect
        </Button>

      </VStack>
    </Box>
  );
}

export default ProfileCard;