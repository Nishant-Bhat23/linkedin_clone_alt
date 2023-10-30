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
  const [profile, setProfile] = useState({});
  const [education, setEducation] = useState([]); // Initialize as an empty array
  const [address,setAddress]= useState([]);
  const [experience, setExperience] = useState([]);
  const [skill, setSkills] = useState([]);

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

  async function handleUserEdu() {
  const loggedInUser = localStorage.getItem("sessionToken");
  try {
    const response = await axios.get('http://localhost:8080/education/educationByUserId/' + loggedInUser);
    setEducation([...education, response.data]); // Add the API response to the existing education array
  } catch (error) {
    console.log("Error while fetching user education:", error);
  }
}

async function handleUserAddr() {
  const loggedInUser = localStorage.getItem("sessionToken");
  try {
    const response = await axios.get('http://localhost:8080/address/getAddress/' + loggedInUser);
    setAddress(response.data); // Set the address state with the API response
  } catch (error) {
    console.log("Error while fetching user addresses:", error);
  }
}
async function handleUserExp() {
  const loggedInUser = localStorage.getItem("sessionToken");
  try {
    const response = await axios.get('http://localhost:8080/experience/experienceByUserId/' + loggedInUser);
    setExperience([...experience, response.data]); // Add the API response to the existing experience array
  } catch (error) {
    console.log("Error while fetching user experiences:", error);
  }
}
async function handleUserSkills() {
  const loggedInUser = localStorage.getItem("sessionToken");
  try {
       const response = await axios.get(`http://localhost:8080/skill/${loggedInUser}/getSkill`);
    setSkills(response.data);
    console.log(skill);
  } catch (error) {
    console.log("Error while fetching user skills:", error);
  }
}


useEffect(() => {
  handleCurrentUser();
  handleUserEdu();
  handleUserAddr();
  handleUserExp()
  handleUserSkills(); // Add this line to fetch experience data
}, []);
  console.log(education);
  console.log(address);
  console.log(experience);
  console.log(skill);
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
      <div className="profile-section">
        <h2>Experience</h2>
        <ul>
        {experience.map((exp, index) => (
              <li key={index}>
                <h1>Experience Details:</h1>
                <p><b>Company name:</b>{exp.company_name}</p>
                <p><b>Position:</b>{exp.position}</p>
                <p><b>Start Date:</b>{exp.start_date}</p>
                <p><b>End Date:</b>{exp.end_date}</p>
              </li>
            ))}
        </ul>
        <Link to='/home/MyProfile/AddExp' className="add-icon">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
      <div className="profile-section">
        <h2>Education</h2>
        <ul>
       <ul>
         {education.map((edu, index) => (
           <li key={index}>
           <h1>10th details:</h1>

             <p><b>school name:</b>{edu.tenth_schoolname}</p>
             <p><b> school city:</b>{edu.tenth_school_city}</p>
             <p><b> pass year:</b>{edu.tenth_pass_year}</p>
           <h1>12th details:</h1>

             <p><b>college name:</b>{edu.college_name}</p>
             <p><b>college city:</b>{edu.college_city}</p>
             <p><b>pass year:</b>{edu.twelth_pass_year}</p>

           <h1>degree details:</h1>

           <p><b>degree:</b>{edu.degree}</p>
           <p><b>college name:</b>{edu.degree_collegename}</p>
           <p><b>college place:</b>{edu.degree_collegeplace}</p>
           <p><b>university name:</b>{edu.university_name}</p>
           <p><b>branch:</b>{edu.branch}</p>
           <p><b>current year:</b>{edu.current_year}</p>
           <p><b>cgpa:</b>{edu.cgpa}</p>
           <p><b>graduation year:</b>{edu.graduation_year}</p>
             {/* Add more details from the education data */}
           </li>
         ))}
       </ul>
        </ul>
        <Link to="/home/MyProfile/AddEdu" className="add-icon">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
      <div className="profile-section">
        <h2>Address</h2>
        <ul>
            <ul>
              {address.map((addr, index) => (
                <li key={index}>
                  <h1>Address Details:</h1>
                  <p><b>Address Type:</b>{addr.address_type}</p>
                  <p><b>Street Address</b>:{addr.street_address}</p>
                  <p><b>City</b>:{addr.city}</p>
                  <p><b>State</b>:{addr.state}</p>
                  <p><b>Postal Code</b>:{addr.postal_code}</p>
                  <p><b>Country</b>:{addr.country}</p>
                </li>
              ))}
        </ul>
        </ul>
        <Link to="/home/MyProfile/AddAddress" className="add-icon">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
      <div className="profile-section">
        <h2>Skills</h2>
      <ul>
          {skill.map((skill, index) => (
            <li key={index}>
              <h1>Skill Details:</h1>
              <p><b>Skill Type:</b> {skill.skillType}</p>
              <p><b>Skill Name:</b> {skill.skillName}</p>
              <p><b>Proficiency:</b> {skill.proficiency}</p>
            </li>
          ))}
        </ul>
        <Link to="/home/MyProfile/AddSkills" className="add-icon">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
    </div>
  );
}

export default MyProfile;
