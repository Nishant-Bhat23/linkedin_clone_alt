import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import '../styles/AddExperiencePage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddExperiencePage() {
  const loggedInUser = localStorage.getItem("sessionToken");
  const navigate = useNavigate();

  const [experienceData, setExperienceData] = useState({
    company_name: '',
    position: '',
    start_date: '',
    end_date: '',
  });

  const [requiredFields, setRequiredFields] = useState({
    company_name: false,
    position: false,
    start_date: false,
    end_date: false,
  });

  const [formIncomplete, setFormIncomplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (Object.values(requiredFields).every((field) => field)) {
      try {
        // Send a POST request to your Spring API with the experience data
        await axios.post(`http://localhost:8080/experience/${loggedInUser}/addExperience`, experienceData);
        navigate('/home/MyProfile');

        // Clear the form after successful submission
        setExperienceData({
          company_name: '',
          position: '',
          start_date: '',
          end_date: '',
        });

        // Reset the required fields state
        setRequiredFields({
          company_name: false,
          position: false,
          start_date: false,
          end_date: false,
        });

        // Reset the form incomplete message
        setFormIncomplete(false);
      } catch (error) {
        console.error('Error adding experience data:', error);
      }
    } else {
      // Highlight required fields that are not filled
      const updatedRequiredFields = {};
      for (const field in experienceData) {
        updatedRequiredFields[field] = experienceData[field] !== '';
      }
      setRequiredFields(updatedRequiredFields);

      // Display form incomplete message
      setFormIncomplete(true);
    }
  };

  const handleChange = (field, value) => {
    setExperienceData({ ...experienceData, [field]: value });
    setRequiredFields({ ...requiredFields, [field]: value !== '' });
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
            error={requiredFields[field] && experienceData[field] === ''}
            helperText={requiredFields[field] && experienceData[field] === '' ? 'This field is required' : ''}
          />
        ))}
      </div>
      {formIncomplete && (
        <Typography color="error" variant="body2" gutterBottom>
          Please fill in all the required fields before submitting.
        </Typography>
      )}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save
      </Button>
    </Container>
  );
}

export default AddExperiencePage;
