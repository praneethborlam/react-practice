import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Badge,
  Input,
  Textarea,
  Select,
  Alert,
  Progress,
  Spinner,
  Avatar,
  Container
} from '@chakra-ui/react';

function ChakraUI() {
  const [inputValue, setInputValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        
        {/* Header Section */}
        <Box textAlign="center">
          <Heading 
            size="2xl" 
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
            mb={4}
          >
            Chakra UI
          </Heading>
        </Box>

        {/* Style Props */}
        <Box borderWidth="1px" borderRadius="lg" p={6} bg="white" shadow="md">
          <Heading size="lg" mb={6}>1. Style Props</Heading>
          
          <Box mb={6}>
            <Heading size="md" mb={4}>Spacing (Margin & Padding)</Heading>
            <HStack spacing={4} wrap="wrap">
              <Box bg="blue.100" p={2} borderRadius="md">p={2} (padding)</Box>
              <Box bg="green.100" p={4} borderRadius="md">p={4}</Box>
              <Box bg="red.100" px={6} py={2} borderRadius="md">px={6} py={2}</Box>
              <Box bg="purple.100" m={2} borderRadius="md">m={2} (margin)</Box>
            </HStack>
          </Box>

          <Box height="1px" bg="gray.200" mb={6} />

          <Box mb={6}>
            <Heading size="md" mb={4}>Colors</Heading>
            <VStack spacing={3} align="stretch">
              <Box bg="blue.500" color="white" p={3} borderRadius="md">
                bg="blue.500" color="white"
              </Box>
              <Box bg="green.100" color="green.800" p={3} borderRadius="lg">
                bg="green.100" color="green.800" borderRadius="lg"
              </Box>
              <Box 
                bgGradient="linear(to-r, pink.500, yellow.500)" 
                color="white" 
                p={3} 
                borderRadius="xl"
              >
                bgGradient="linear(to-r, pink.500, yellow.500)"
              </Box>
            </VStack>
          </Box>

          <Box height="1px" bg="gray.200" mb={6} />

          <Box mb={6}>
            <Heading size="md" mb={4}>Sizes & Dimensions</Heading>
            <VStack spacing={3} align="start">
              <Box w="200px" h="50px" bg="teal.200" display="flex" alignItems="center" justifyContent="center" borderRadius="md">
                w="200px" h="50px"
              </Box>
              <Box w="100%" h="40px" bg="orange.200" display="flex" alignItems="center" justifyContent="center" borderRadius="md">
                w="100%" h="40px"
              </Box>
              <Box maxW="300px" bg="cyan.200" p={3} borderRadius="md">
                maxW="300px" - This text will wrap when it reaches the maximum width
              </Box>
            </VStack>
          </Box>

          <Box height="1px" bg="gray.200" mb={6} />

          <Box>
            <Heading size="md" mb={4}>Borders & Shadows</Heading>
            <HStack spacing={4} wrap="wrap">
              <Box border="1px" borderColor="gray.300" p={3} borderRadius="md">
                border="1px"
              </Box>
              <Box border="2px" borderColor="blue.500" borderRadius="md" p={3}>
                border="2px" borderRadius="md"
              </Box>
              <Box boxShadow="md" p={3} borderRadius="md">
                boxShadow="md"
              </Box>
              <Box boxShadow="lg" borderRadius="lg" p={3}>
                boxShadow="lg" borderRadius="lg"
              </Box>
            </HStack>
          </Box>
        </Box>

        {/* Interactive Components */}
        <Box borderWidth="1px" borderRadius="lg" p={6} bg="white" shadow="md">
          <Heading size="lg" mb={6}>2. Interactive Components</Heading>

          <Box mb={6}>
            <Heading size="md" mb={4}>Button Style Props</Heading>
            <HStack spacing={4} wrap="wrap">
              <Button colorScheme="blue" size="sm">
                Small Button
              </Button>
              <Button colorScheme="green" size="md">
                Medium Button
              </Button>
              <Button colorScheme="red" size="lg">
                Large Button
              </Button>
              <Button variant="outline" colorScheme="purple">
                Outline
              </Button>
              <Button variant="ghost" colorScheme="teal">
                Ghost
              </Button>
            </HStack>
          </Box>

          
          <Box height="1px" bg="gray.200" mb={6} />

          {/* Form Controls */}
          <Box mb={6}>
            <Heading size="md" mb={4}>Form Controls</Heading>
            <VStack spacing={4} align="stretch" maxW="400px">
              <Input
                placeholder="Enter text here"
                focusBorderColor="blue.500"
                bg="gray.50"
                _hover={{ bg: "gray.100" }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              
              <Textarea
                placeholder="Textarea with custom styles"
                resize="vertical"
                bg="blue.50"
                _focus={{ bg: "white", borderColor: "blue.500" }}
              />
              
              <Select bg="green.50" _hover={{ bg: "green.100" }}>
                <option value="">Select option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </Select>
            </VStack>
          </Box>

          
          <Box height="1px" bg="gray.200" mb={6} />

          {/* Progress Bar */}
          <Box>
            <Heading size="md" mb={4}>Progress & Loading</Heading>
            <VStack spacing={4} align="start" maxW="300px">
              <Box w="100%">
                <Text mb={2}>Progress: 75%</Text>
                <Progress value={75} colorScheme="blue" hasStripe isAnimated />
              </Box>
              
              <HStack spacing={4}>
                <Text>Loading spinners:</Text>
                <Spinner size="sm" color="blue.500" />
                <Spinner size="md" color="green.500" />
                <Spinner size="lg" color="purple.500" />
              </HStack>
            </VStack>
          </Box>
        </Box>

        {/* Responsive Design */}
        <Box borderWidth="1px" borderRadius="lg" p={6} bg="white" shadow="md">
          <Heading size="lg" mb={6}>3. Responsive Style Props</Heading>
          
          <Text color="gray.600" mb={4}>
            Resize your browser window to see responsive changes!
          </Text>
          
          <Box
            bg={{ base: "red.200", md: "green.200", lg: "blue.200" }}
            p={{ base: 2, md: 4, lg: 6 }}
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            textAlign="center"
            borderRadius="md"
            mb={4}
          >
            <Text>
              Mobile: Red background, Small padding<br />
              Tablet: Green background, Medium padding<br />
              Desktop: Blue background, Large padding
            </Text>
          </Box>

          <VStack 
            spacing={{ base: 2, md: 4 }}
            direction={{ base: "column", md: "row" }}
          >
            <Box bg="purple.100" p={4} w="100%" textAlign="center" borderRadius="md">
              Box 1
            </Box>
            <Box bg="yellow.100" p={4} w="100%" textAlign="center" borderRadius="md">
              Box 2
            </Box>
            <Box bg="pink.100" p={4} w="100%" textAlign="center" borderRadius="md">
              Box 3
            </Box>
          </VStack>
        </Box>

        <Box borderWidth="1px" borderRadius="lg" p={6} bg="white" shadow="md">
          <Heading size="lg" mb={6}>4. Status & Feedback Components</Heading>
          
          {/* Alerts */}
          <VStack spacing={4} align="stretch" mb={6}>
            <Alert status="success" borderRadius="md">
              <Text>Success! Your data has been saved.</Text>
            </Alert>
            
            <Alert status="error" borderRadius="md">
              <Text>Error! There was a problem with your request.</Text>
            </Alert>
            
            <Alert status="warning" borderRadius="md">
              <Text>Warning! Please check your input.</Text>
            </Alert>
            
            <Alert status="info" borderRadius="md">
              <Text>Info: Here's some helpful information.</Text>
            </Alert>
          </VStack>

          
          <Box height="1px" bg="gray.200" mb={6} />

          {/* Badges */}
          <Box mb={6}>
            <Text mb={2} fontWeight="bold">Badges with different colors:</Text>
            <HStack spacing={2} wrap="wrap">
              <Badge colorScheme="green">Success</Badge>
              <Badge colorScheme="red">Error</Badge>
              <Badge colorScheme="blue">Info</Badge>
              <Badge colorScheme="purple">Premium</Badge>
              <Badge variant="outline" colorScheme="orange">Outline</Badge>
            </HStack>
          </Box>

          
          <Box height="1px" bg="gray.200" mb={6} />

          {/* Avatars */}
          <Box>
            <Text mb={2} fontWeight="bold">Avatars with style props:</Text>
            <HStack spacing={4}>
              <Avatar size="sm" name="Small User" />
              <Avatar size="md" name="Medium User" bg="green.500" />
              <Avatar size="lg" name="Large User" bg="purple.500" />
            </HStack>
          </Box>
        </Box>

        {/* Hover & Focus States */}
        <Box borderWidth="1px" borderRadius="lg" p={6} bg="white" shadow="md">
          <Heading size="lg" mb={6}>5. Hover & Focus States</Heading>
          
          <Text color="gray.600" mb={4}>
            Hover over or focus on these elements to see style changes:
          </Text>
          
          {/* Hover Effects */}
          <HStack spacing={4} wrap="wrap" mb={6}>
            <Box
              bg="blue.100"
              p={4}
              borderRadius="md"
              cursor="pointer"
              _hover={{
                bg: "blue.200",
                transform: "translateY(-2px)",
                boxShadow: "lg"
              }}
              transition="all 0.2s"
            >
              Hover me!
            </Box>
            
            <Box
              bg="green.100"
              p={4}
              borderRadius="md"
              cursor="pointer"
              _hover={{
                bg: "green.500",
                color: "white"
              }}
              transition="all 0.3s"
            >
              Color change
            </Box>
            
            <Button
              _hover={{
                bg: "purple.500",
                transform: "scale(1.05)"
              }}
              transition="all 0.2s"
            >
              Hover Button
            </Button>
          </HStack>

          {/* Focus States */}
          <VStack spacing={2} align="stretch" maxW="300px">
            <Input
              placeholder="Focus me"
              _focus={{
                borderColor: "purple.500",
                boxShadow: "0 0 0 3px rgba(128, 90, 213, 0.1)"
              }}
            />
            <Button
              _focus={{
                boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)"
              }}
            >
              Focus Button
            </Button>
          </VStack>
        </Box>

      </VStack>
    </Container>
  );
}

export default ChakraUI;