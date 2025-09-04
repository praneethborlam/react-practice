import React from 'react';
import Header from './components/common/Header';
import UserCard from './components/user/UserCard';
import Clock from './components/common/Clock';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navigation from './components/common/Navigation';
import ChakraUI from './pages/ChakraUI';
import './App.css';

function Dashboard() {
  return (
    <div className="App">
       <Header 
        title="Funtional Components" 
        subtitle="Architecture Patterns"
      />
       <Clock />
      <main>
        <UserCard 
          name="John Doe"
          email="john@example.com"
          role="Developer"
        />
      </main>
    </div>
  );
}

function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chakra-ui" element={<ChakraUI />} />
      </Routes>
    </Box>
  );
}

export default App;