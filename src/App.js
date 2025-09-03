import React from 'react';
import Header from './components/Header';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  return (
    <div className="App">
       <Header 
        title="Funtional Components" 
        subtitle="Architecture Patterns"
      />
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

export default App;