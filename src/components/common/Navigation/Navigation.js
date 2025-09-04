import React from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box bg="blue.500" p={4} mb={6}>
      <HStack spacing={4} justify="center">
        <Button
          colorScheme={location.pathname === '/' ? 'blue' : 'white'}
          variant={location.pathname === '/' ? 'solid' : 'ghost'}
          onClick={() => navigate('/')}
        >
          Dashboard
        </Button>
        <Button
          colorScheme={location.pathname === '/chakra-ui' ? 'blue' : 'white'}
          variant={location.pathname === '/chakra-ui' ? 'solid' : 'ghost'}
          onClick={() => navigate('/chakra-ui')}
        >
          Chakra UI
        </Button>
      </HStack>
    </Box>
  );
}

export default Navigation;