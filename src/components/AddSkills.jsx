import React, { useState, useEffect } from 'react';
import { Container, TextField, Button } from '@mui/material';
import '../styles/AddEducationPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddSkills() {
  const [skills, setSkills] = useState([
    {
      skillName: '',
      skillType: '',
      proficiency: '',
    },
  ]);
const navigate = useNavigate();
  const handleSave = async (e) => {
    e.preventDefault();
    const loggedInUser = localStorage.getItem('sessionToken');
    console.log(skills);
    try {

      // Send a POST request to your Spring API with the skill data
      await axios.post(`http://localhost:8080/skill/${loggedInUser}/addSkill`, skills);
      navigate('/home/MyProfile');
      // Clear the form after successful submission
      setSkills({
        skillName: '',
        skillType: '',
        Proficiency: '',
      });
    } catch (error) {
      console.error('Error adding skill data:', error);
    }
  }

  const handleChange = (field, value, index) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  return (
    <Container maxWidth="sm" className="add-education-container">
      <h2>ADD SKILLS</h2>
      <div className="education-form">
        {skills.map((skill, index) => (
          <div key={index}>
            <TextField
              label="Skill Name"
              fullWidth
              variant="outlined"
              value={skill.skillName}
              onChange={(e) => handleChange('skillName', e.target.value, index)}
            />
            <TextField
              label="Skill Type"
              fullWidth
              variant="outlined"
              value={skill.skillType}
              onChange={(e) => handleChange('skillType', e.target.value, index)}
            />
            <div className="form-group">
              <label htmlFor={`proficiency${index}`} className="form-label">
                Proficiency Level:
              </label>
              <select
                id={`proficiency${index}`}
                name={`proficiency${index}`}
                value={skill.proficiency}
                onChange={(e) => handleChange('proficiency', e.target.value, index)}
                required
                className="form-select"
              >
                <option value="">Select Proficiency Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
        ))}
      </div>
      <br />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Container>
  );
}

export default AddSkills;
