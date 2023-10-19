import React from "react";
import { Container, TextField, Button } from '@mui/material';
import '../styles/AddEducationPage.css';
import  { useState } from 'react';


function AddSkills(){
  const [skillName, setSkillName] = useState('');
  const [skillType, setSkillType] = useState('');
  const [proficiency, setPorficiency] = useState('');

  const handleSave = () => {
      //saving the experience oage
    };
return(
<Container maxWidth="sm" className="add-education-container">
      <h2>ADD SKILLS</h2>
      <div className="education-form">
        <TextField
          label="Skill Name"
          fullWidth
          variant="outlined"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
        />
        <TextField
          label="Skill Type"
          fullWidth
          variant="outlined"
          value={skillType}
          onChange={(e) => setSkillType(e.target.value)}
        />
        <div className="form-group">
                          <label htmlFor="proficiency" className="form-label">
                            Proficiency Level:
                          </label>
                          <select
                            id="proficiency"
                            name="proficiency"
                            value={proficiency}
                            onChange={(e) => setPorficiency(e.target.value)}
                            required
                            className="form-select"
                          >
                            <option value="">Select Proficiency Level</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                          </select>
                        </div>
      </div><br/>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Container>

);

}
export default AddSkills;