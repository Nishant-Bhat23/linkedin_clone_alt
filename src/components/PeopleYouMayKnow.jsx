import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import { useNavigate } from 'react-router-dom';

const People = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  let loggedInUserId = localStorage.getItem("sessionToken"); // Replace with the actual ID of the logged-in user

  async function handleUser() {
    try {
      const response = await axios.get('http://localhost:8080/users/fetchAllUsers');
      // Filter out the logged-in user
      const filteredUsers = response.data.filter(user => user.user_id !== loggedInUserId);
      setUsers(filteredUsers);
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <div className="people-you-may-know">
      <h1>People You May Know</h1>
      {users.map((user) => (
        <UserCard key={user.id} username={user.username} description={user.description} picture={user.picture}/>
      ))}
    </div>
  );
};

export default People;
