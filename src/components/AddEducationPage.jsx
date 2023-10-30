import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import '../styles/AddEducationPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddEducationPage() {
 const loggedInUser=localStorage.getItem("sessionToken");
 const navigate = useNavigate()
  const [educationData, setEducationData] = useState({
    userId:loggedInUser,
    tenth_schoolname: '',
    tenth_school_city: '',
    tenth_pass_year: '',
    college_name: '',
    college_city: '',
    twelth_pass_year: '',
    degree: '',
    degree_collegename: '',
    degree_collegeplace: '',
    university_name: '',
    branch: '',
    current_year: '',
    cgpa: '',
    graduation_year: '',
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      // Send a POST request to your Spring API with the education data
      await axios.post('http://localhost:8080/education/addEducation', educationData);
      navigate('/home')
      // Clear the form after successful submission
      setEducationData({
        userId: loggedInUser, // Reset user ID
        tenth_schoolname: '',
        tenth_school_city: '',
        tenth_pass_year: '',
        college_name: '',
        college_city: '',
        twelth_pass_year: '',
        degree: '',
        degree_collegename: '',
        degree_collegeplace: '',
        university_name: '',
        branch: '',
        current_year: '',
        cgpa: '',
        graduation_year: '',
      });
    } catch (error) {

      console.error('Error adding education data:', error);
    }
  };


  const handleChange = (field, value) => {
    setEducationData({ ...educationData, [field]: value });
  };

  return (
    <Container maxWidth="sm" className="add-education-container">
      <h2>Add Education</h2>
      <div className="education-form">
        {Object.keys(educationData).map((field) => (
          <TextField
            key={field}
            label={field.replace(/_/g, ' ')}
            fullWidth
            variant="outlined"
            value={educationData[field]}
            onChange={(e) => handleChange(field, e.target.value)}
          />
        ))}
      </div>
      <Button variant="contained" color="primary" onClick={ handleSubmit}>
        Save
      </Button>
    </Container>
  );
}

export default AddEducationPage;
