import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import '../styles/AddEducationPage.css';

function AddEducationPage() {
  const [educationData, setEducationData] = useState({
    tenthSchoolName: '',
    tenthSchoolCity: '',
    tenthPassYear: '',
    collegeName: '',
    collegeCity: '',
    twelfthPassYear: '',
    degree: '',
    degreeCollegeName: '',
    degreeCollegePlace: '',
    universityName: '',
    branch: '',
    currentYear: '',
    cgpa: '',
    graduationYear: '',
  });

  const handleSave = () => {
    // Handle saving the education information to the server or perform any desired action
    // You can also reset the form fields after saving.
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
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Container>
  );
}

export default AddEducationPage;
