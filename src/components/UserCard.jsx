// UserCard.js
import React from 'react';
import "../styles/UserCard.css"

const UserCard = ({ username, description }) => {
  return (
    <div className="user-card">
      <h3>{username}</h3>
      <p>{description}</p>
    </div>
  );
};

export default UserCard;
