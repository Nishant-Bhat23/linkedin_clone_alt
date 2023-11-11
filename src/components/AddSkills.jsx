import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
import '../styles/AddSkillPage.css';
import { useNavigate } from 'react-router-dom';

function AddSkills() {
  const loggedInUser = localStorage.getItem('sessionToken');
  const navigate = useNavigate();

  const [skillData, setSkillData] = useState({
    skillName: '',
    skillType: '',
    proficiency: '', // Keep this field if you want to use predefined options
  });

  const [requiredFields, setRequiredFields] = useState({
    skillName: false,
    skillType: false,
    proficiency: false,
  });

  const [formIncomplete, setFormIncomplete] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (Object.values(requiredFields).every((field) => field)) {
      try {
        // Send a POST request to your Spring API with the skill data
        await axios.post(`http://localhost:8080/skill/${loggedInUser}/addSkill`, skillData);
        navigate('/home/MyProfile');

        // Clear the form after successful submission
        setSkillData({
          skillName: '',
          skillType: '',
          proficiency: '',
        });

        // Reset the required fields state
        setRequiredFields({
          skillName: false,
          skillType: false,
          proficiency: false,
        });

        // Reset the form incomplete message
        setFormIncomplete(false);
      } catch (error) {
        console.error('Error adding skill data:', error);
      }
    } else {
      // Highlight required fields that are not filled
      const updatedRequiredFields = {};
      for (const field in skillData) {
        updatedRequiredFields[field] = skillData[field] !== '';
      }
      setRequiredFields(updatedRequiredFields);

      // Display form incomplete message
      setFormIncomplete(true);
    }
  };

  const handleChange = (field, value) => {
    setSkillData({ ...skillData, [field]: value });
    setRequiredFields({ ...requiredFields, [field]: value !== '' });
  };

  return (
    <Container maxWidth="sm" className="add-skill-container">
      <h2>ADD SKILLS</h2>
      <div className="skill-form">
        {Object.keys(skillData).map((field) => (
          field !== 'proficiency' && (
            <TextField
              key={field}
              label={field.replace(/_/g, ' ')}
              fullWidth
              variant="outlined"
              value={skillData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              error={requiredFields[field] && skillData[field] === ''}
              helperText={requiredFields[field] && skillData[field] === '' ? 'This field is required' : ''}
            />
          )
        ))}
        <FormControl fullWidth variant="outlined" error={requiredFields.proficiency && skillData.proficiency === ''}>
          <InputLabel id="proficiency-label">Proficiency Level</InputLabel>
          <Select
            label="Proficiency Level"
            labelId="proficiency-label"
            value={skillData.proficiency}
            onChange={(e) => handleChange('proficiency', e.target.value)}
          >
            <MenuItem value="">Select Proficiency Level</MenuItem>
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </Select>
          {requiredFields.proficiency && skillData.proficiency === '' && (
            <Typography color="error" variant="body2">
              This field is required
            </Typography>
          )}
        </FormControl>
      </div>
      {formIncomplete && (
        <Typography color="error" variant="body2" gutterBottom>
          Please fill in all the required fields before submitting.
        </Typography>
      )}
      <br />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Container>
  );
}

export default AddSkills;
