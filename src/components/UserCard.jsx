// UserCard.js
import React from 'react';
import "../styles/UserCard.css"

const UserCard = ({ username, description,picture }) => {
  return (
    <div className="user-card">
      <h3>{username}</h3>
      <img src={picture}/>
      <p>{description}</p>
    </div>
  );
};

export default UserCard;
