import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../styles/Myprofile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// Add the faPlus icon to the library
library.add(faPlus);


function MyProfile() {
  const [profile, setProfile] = useState([]);
  const [education, setEducation] = useState([]);

  async function handleCurrentUser() {
    // Fetch the user's profile from an API
    const loggedInUser = localStorage.getItem("sessionToken");
    try {
      const response = await axios.get('http://localhost:8080/users/' + loggedInUser + '/getUser');
      setProfile(response.data);
    } catch (error) {
      console.log("Error while fetching user profile");
    }
  }

  async function handleUserEdu()
  {
  const loggedInUser = localStorage.getItem("sessionToken");
      try {
        const response = await axios.get('http://localhost:8080/education/educationByUserId/' + loggedInUser );
        setEducation(response.data);
      } catch (error) {
        console.log("Error while fetching user education");
      }
    }



  useEffect(() => {
    handleCurrentUser();
    handleUserEdu();
  }, []);

console.log(education)

  return (
    <div className="profile">
      <div className="profile-header">
        <img src={profile.picture} alt="Profile" className="profile-picture" />
        <div className="profile-info">
         <h1>{profile.firstname} {profile.lastname}</h1>
                         <p>{profile.dob}</p>
                         <p>{profile.email}</p>
                         <p>{profile.contact}</p>

        </div>
      </div>
      {/* Display user's summary, experience, education, address, and skills */}
      {/* Use currentUser to populate the data */}
      <div className="profile-summary">
        <h2>Summary</h2>
        <p>{/* Add user's summary here */}</p>
      </div>
      <div className="profile-section">
        <h2>Experience</h2>
        <ul>
          {/* Map and display user's experience */}
        </ul>
        <Link to='/home/MyProfile/AddExp' className="add-icon">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
      <div className="profile-section">
        <h2>Education</h2>
        <ul>
          {/* Map and display user's education */}
        </ul>
        <Link to="/home/MyProfile/AddEdu" className="add-icon">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
      <div className="profile-section">
        <h3>Address</h3>
        <ul>
          {/* Map and display user's address */}
        </ul>
        <Link to="/home/MyProfile/AddAddress" className="add-icon">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
      <div className="profile-section">
        <h3>Skills</h3>
        <ul>
          {/* Map and display user's skills */}
        </ul>
        <Link to="/home/MyProfile/AddSkills" className="add-icon">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
    </div>
  );
}

export default MyProfile;