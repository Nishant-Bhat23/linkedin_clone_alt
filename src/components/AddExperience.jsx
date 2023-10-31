import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import '../styles/AddExperiencePage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddExperiencePage() {
 const loggedInUser=localStorage.getItem("sessionToken");
 const navigate = useNavigate()
  const [experienceData, setExperienceData] = useState({
    company_name: '',
    position: '',
    start_date: '',
    end_date: '',
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      // Send a POST request to your Spring API with the education data
      await axios.post('http://localhost:8080/experience/addExperience', experienceData);
      navigate('/home/MyProfile')
      // Clear the form after successful submission
      setExperienceData({
        userId: loggedInUser, // Reset user ID
        company_name: '',
        position: '',
        start_date: '',
        end_date: '',
      });
    } catch (error) {

      console.error('Error adding education data:', error);
    }
  };


  const handleChange = (field, value) => {
    setExperienceData({ ...experienceData, [field]: value });
  };

  return (
    <Container maxWidth="sm" className="add-experience-container">
      <h2>Add Experience</h2>
      <div className="experience-form">
        {Object.keys(experienceData).map((field) => (
          <TextField
            key={field}
            label={field.replace(/_/g, ' ')}
            fullWidth
            variant="outlined"
            value={experienceData[field]}
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

export default AddExperiencePage;