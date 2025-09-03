import React, { useState } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage';
import './UserCard.css';

function UserCard({ name, email, role }) {
  const [isExpanded, setIsExpanded] = useState(false);
  // Using our custom hook to persist likes in localStorage
  const [likes, setLikes] = useLocalStorage(`likes-${name}`, 0);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Role:</strong> {role}</p>
      
      <button onClick={handleToggle} className="toggle-btn">
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
      
      {isExpanded && (
        <div className="expanded-content">
          <p><strong>Location:</strong> New York, USA</p>
          <p><strong>Joined:</strong> January 2023</p>
          <button onClick={handleLike} className="like-btn">
            Like ({likes})
          </button>
        </div>
      )}
    </div>
  );
}

export default UserCard;