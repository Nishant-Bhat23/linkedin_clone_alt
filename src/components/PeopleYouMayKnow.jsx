import React,{useEffect,useState} from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import { useNavigate } from 'react-router-dom';

const People = () => {
   // Simulated user data
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

    async function handleUser(){

        try {
            const response = await axios.get('http://localhost:8080/users/fetchAllUsers')
            setUsers(response.data)
            console.log(users)
        } catch (error) {
            console.log("error")
        }
    }

    useEffect(()=>{
        handleUser()
    },[])
  return (
    <div className="people-you-may-know">
      <h1>People You May Know</h1>
      {users.map((user) => (
        <UserCard key={user.id} username={user.username} description={user.description} />
      ))}
    </div>
  );
};

export default People;
