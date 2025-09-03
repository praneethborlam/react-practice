import React from 'react';
import './UserCard.css';

function UserCard({ name, email, role }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default UserCard;