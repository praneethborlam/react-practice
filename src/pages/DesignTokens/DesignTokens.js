import React from 'react';
import {
  Container,
  VStack,
  HStack,
  Box,
  Heading,
  Text,
  Grid,
  Code,
  Button,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';

function DesignTokens() {                  
  const { colorMode, toggleColorMode } = useColorMode();
  
  const bg = useColorModeValue('white', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const subtitleColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Container maxW="container.xl" py={8}  bg="gray.300">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading size="2xl" mb={2} color="gray.800">
            Design Tokens
          </Heading>
          
          <Button 
            onClick={toggleColorMode} 
            mt={4} 
            colorScheme="blue"
            size="lg"
          >
            Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </Box>

        <Box bg={cardBg} p={6} borderRadius="lg" shadow="sm">
          <Heading size="lg" mb={4} color={textColor}>
            Color Mode: {colorMode}
          </Heading>
          
          <VStack spacing={4} align="start">
            <Box>
              <Text color={textColor} mb={2}>Dynamic colors:</Text>
              <HStack spacing={4}>
                <Box>
                  <Box w="60px" h="40px" bg={bg} border="1px" borderColor="gray.300" borderRadius="md"></Box>
                  <Code fontSize="xs">bg (dynamic)</Code>
                </Box>
                <Box>
                  <Box w="60px" h="40px" bg={textColor} borderRadius="md"></Box>
                  <Code fontSize="xs">text (dynamic)</Code>
                </Box>
                <Box>
                  <Box w="60px" h="40px" bg={subtitleColor} borderRadius="md"></Box>
                  <Code fontSize="xs">subtitle (dynamic)</Code>
                </Box>
              </HStack>
            </Box>
            
            <Box>
              <Text color={textColor} mb={2}>Static colors:</Text>
              <HStack spacing={4}>
                <Box>
                  <Box w="60px" h="40px" bg="blue.500" borderRadius="md"></Box>
                  <Code fontSize="xs">blue.500</Code>
                </Box>
                <Box>
                  <Box w="60px" h="40px" bg="green.500" borderRadius="md"></Box>
                  <Code fontSize="xs">green.500</Code>
                </Box>
                <Box>
                  <Box w="60px" h="40px" bg="red.500" borderRadius="md"></Box>
                  <Code fontSize="xs">red.500</Code>
                </Box>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default DesignTokens;