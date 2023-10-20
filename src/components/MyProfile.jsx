import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../styles/Myprofile.css';//this is css imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faPlus)

function MyProfile() {
 const [profile, setProfile] = useState({
        name: 'John Doe',
        headline: 'Software Developer',
        location: 'New York, USA',
        mailid:'johndoe43@gmail.com',
        connections: 500,
        summary: 'Experienced software developer with a passion for creating web applications.',
     experiences: [
       {
         id: 1,
         title: 'Senior Developer',
         company: 'Tech Company Inc.',
         startDate: '2018-01-01',
         endDate: '2020-12-31',
         description: 'Developed innovative web applications for clients.',
       },
       // Add more experiences as needed
     ],
     education: [
       {
         id: 1,
         institution: 'University of XYZ',
         degree: 'Bachelor of Science in Computer Science',
         graduationYear: '2017',
       },
       // Add more education entries as needed
     ],
     interests: ['Programming', 'Web Development', 'Technology'],
     locations: ['New York', 'San Francisco', 'Los Angeles'],
     skills: ['JavaScript', 'React', 'Node.js', 'SQL', 'CSS'],
   });

   useEffect(() => {
     // Simulate fetching profile data from an API
     const apiResponse = {
          name: 'John Doe',
          headline: 'Software Developer',
          location: 'New York, USA',
          mailid:'johndoe43@gmail.com',
          connections: 500,
          summary: 'Experienced software developer with a passion for creating web applications.',
       experiences: [
         {
           id: 1,
           title: 'Senior Developer',
           company: 'Tech Company Inc.',
           startDate: '2018-01-01',
           endDate: '2020-12-31',
           description: 'Developed innovative web applications for clients.',
         },
         // Add more experiences as needed
       ],
       education: [
         {
           id: 1,
           institution: 'University of XYZ',
           degree: 'Bachelor of Science in Computer Science',
           graduationYear: '2017',
         },
         // Add more education entries as needed
       ],
       interests: ['Programming', 'Web Development', 'Technology'],
       locations: ['New York', 'San Francisco', 'Los Angeles'],
       skills: ['JavaScript', 'React', 'Node.js', 'SQL', 'CSS'],
     };

     // Update the state with the fetched data
     setProfile(apiResponse);
   }, []);

  return (
    <div className="profile">
      <div className="profile-header">
        <img src="https://placekitten.com/150/150" alt="Profile" className="profile-picture" />
        <div className="profile-info">
          <h1>{profile.name}</h1>
                   <p>{profile.headline}</p>
                   <p>{profile.location}</p>
         	        <p>{profile.mailid}</p>
        </div>
      </div>
      <div className="profile-summary">
        <h2>Summary</h2>
        <p>{profile.summary}</p>
      </div>
      <div className="profile-section">
        <h2>Experience</h2>
        <ul>
          {profile.experiences.map((experience) => (
            <li key={experience.id}>
              <h3>{experience.title}</h3>
              <p>{experience.company}</p>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
              <p>{experience.description}</p>
            </li>
          ))}
        </ul>
        <Link to='/MyProfile/AddExp' className="add-icon">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
      <div className="profile-section">
        <h2>Education</h2>
        <ul>
          {profile.education.map((edu) => (
            <li key={edu.id}>
              <h3>{edu.institution}</h3>
              <p>{edu.degree}</p>
              <p>Graduated in {edu.graduationYear}</p>
            </li>
          ))}
        </ul>
        <Link to="/MyProfile/AddEdu" className="add-icon">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>

      <div className="profile-section">
        <h3>Address</h3>
        <ul>
          {profile.locations.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
        <Link to="/MyProfile/AddAddress" className="add-icon">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
      <div className="profile-section">
        <h3>Skills</h3>
        <ul>
          {profile.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <Link to="/MyProfile/AddSkills" className="add-icon">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;