import React from 'react';
import Header from './components/common/Header';
import UserCard from './components/user/UserCard';
import Clock from './components/common/Clock';
import './App.css';

function App() {
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

export default App;