import React, { useState, useEffect } from 'react';
import { Container, TextField, Button } from '@mui/material';
import '../styles/AddEducationPage.css';

function AddSkills() {
  const [skills, setSkills] = useState([
    {
      skillName: '',
      skillType: '',
      proficiency: '',
    },
  ]);

  const handleSave = () => {
    // Handle saving the skills information to the server or perform any desired action
    // You can also reset the form fields after saving.
  };

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
