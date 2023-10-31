import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import axios from 'axios';
import '../styles/AddSkillPage.css';
import { useNavigate } from 'react-router-dom';

function AddSkills() {
  const loggedInUser = localStorage.getItem('sessionToken');
  const navigate = useNavigate();

  const [skillData, setSkillData] = useState({
    skillName: '',
    skillType: '',
    proficiency: '',
  });

  const handleSave = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      console.error('Error adding skill data:', error);
    }

  }
const handleChange = (field, value) => {
    setSkillData({ ...skillData, [field]: value });
  };
  return (
    <Container maxWidth="sm" className="add-skill-container">
      <h2>ADD SKILLS</h2>
      <div className="skill-form">
        <TextField
          label="Skill Name"
          fullWidth
          variant="outlined"
          value={skillData.skillName}
          onChange={(e) => handleChange('skillName', e.target.value)}
        />
        <TextField
          label="Skill Type"
          fullWidth
          variant="outlined"
          value={skillData.skillType}
          onChange={(e) => handleChange('skillType', e.target.value)}
        />
        <div className="form-group">
          <label>Proficiency Level</label>
          <select
            name="Proficiency"
            value={skillData.proficiency}
            onChange={(e) => handleChange('proficiency', e.target.value)}
          >
            <option value="">Select Proficiency Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>
      <br />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Container>
  );
}

export default AddSkills;
