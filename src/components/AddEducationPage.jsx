import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import '../styles/AddEducationPage.css';

function AddEducationPage() {
  const [tenthSchoolName, setTenthSchoolName] = useState('');
  const [tenthSchoolCity, setTenthSchoolCity] = useState('');
  const [tenthPassYear, setTenthPassYear] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [collegeCity, setCollegeCity] = useState('');
  const [twelfthPassYear, setTwelfthPassYear] = useState('');
  const [degree, setDegree] = useState('');
  const [degreeCollegeName, setDegreeCollegeName] = useState('');
  const [degreeCollegePlace, setDegreeCollegePlace] = useState('');
  const [universityName, setUniversityName] = useState('');
  const [branch, setBranch] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const [cgpa, setCGPA] = useState('');
  const [graduationYear, setGraduationYear] = useState('');

  const handleSave = () => {
    // Handle saving the education information to the server or perform any desired action
    // You can also reset the form fields after saving.
  };

  return (
    <Container maxWidth="sm" className="add-education-container">
      <h2>Add Education</h2>
      <div className="education-form">
        <TextField
          label="10th School Name"
          fullWidth
          variant="outlined"
          value={tenthSchoolName}
          onChange={(e) => setTenthSchoolName(e.target.value)}
        />
        <TextField
          label="10th School City"
          fullWidth
          variant="outlined"
          value={tenthSchoolCity}
          onChange={(e) => setTenthSchoolCity(e.target.value)}
        />
        <TextField
          label="10th Pass Year"
          fullWidth
          variant="outlined"
          value={tenthPassYear}
          onChange={(e) => setTenthPassYear(e.target.value)}
        />


          <TextField
            label="College Name"
            fullWidth
            variant="outlined"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
          />
          <TextField
            label="College City"
            fullWidth
            variant="outlined"
            value={collegeCity}
            onChange={(e) => setCollegeCity(e.target.value)}
          />
          <TextField
            label="12th Pass Year"
            fullWidth
            variant="outlined"
            value={twelfthPassYear}
            onChange={(e) => setTwelfthPassYear(e.target.value)}
          />
          <TextField
            label="Degree"
            fullWidth
            variant="outlined"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <TextField
            label="Degree College Name"
            fullWidth
            variant="outlined"
            value={degreeCollegeName}
            onChange={(e) => setDegreeCollegeName(e.target.value)}
          />
          <TextField
            label="Degree College Place"
            fullWidth
            variant="outlined"
            value={degreeCollegePlace}
            onChange={(e) => setDegreeCollegePlace(e.target.value)}
          />
          <TextField
            label="University Name"
            fullWidth
            variant="outlined"
            value={universityName}
            onChange={(e) => setUniversityName(e.target.value)}
          />
          <TextField
            label="Branch"
            fullWidth
            variant="outlined"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
          <TextField
            label="Current Year"
            fullWidth
            variant="outlined"
            value={currentYear}
            onChange={(e) => setCurrentYear(e.target.value)}
          />
          <TextField
            label="CGPA"
            fullWidth
            variant="outlined"
            value={cgpa}
            onChange={(e) => setCGPA(e.target.value)}
          />
          <TextField
            label="Graduation Year"
            fullWidth
            variant="outlined"
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
          />



      </div>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Container>
  );
}

export default AddEducationPage;
