import React, { useState } from "react";
import { Container, TextField, Button } from '@mui/material';
import '../styles/AddEducationPage.css';

function AddExp() {
  const initialFields = [
    { key: 'companyName', label: 'Company Name' },
    { key: 'position', label: 'Position' },
    { key: 'startDate', label: 'Start Date' },
    { key: 'endDate', label: 'End Date' },
  ];

  const [experience, setExperience] = useState(initialFields.reduce((obj, field) => ({ ...obj, [field.key]: '' }), {}));

  const handleSave = () => {
    // Saving the experience page
  };

  const handleChange = (field, value) => {
    setExperience({ ...experience, [field]: value });
  };

  return (
    <Container maxWidth="sm" className="add-education-container">
      <h2>ADD EXPERIENCE</h2>
      <div className="education-form">
        {initialFields.map(field => (
          <TextField
            key={field.key}
            label={field.label}
            fullWidth
            variant="outlined"
            value={experience[field.key]}
            onChange={(e) => handleChange(field.key, e.target.value)}
          />
        ))}
      </div><br />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Container>
  );
}

export default AddExp;
