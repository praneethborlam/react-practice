import React, { useState } from 'react';
import './UserCard.css';

function UserCard({ name, email, role }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(0);

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