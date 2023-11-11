import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import '../styles/AddEducationPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddEducationPage() {
  const loggedInUser = localStorage.getItem('sessionToken');
  const navigate = useNavigate();

  const [educationData, setEducationData] = useState({
    userId: loggedInUser,
    tenth_schoolname: '',
    tenth_school_city: '',
    tenth_pass_year: '',
    college_name: '',
    college_city: '',
    twelth_pass_year: '',
    degree: '',
    degree_collegename: '',
    degree_collegeplace: '',
    university_name: '',
    branch: '',
    current_year: '',
    cgpa: '',
    graduation_year: '',
  });

  const [requiredFields, setRequiredFields] = useState({
    tenth_schoolname: false,
    tenth_school_city: false,
    tenth_pass_year: false,
    college_name: false,
    college_city: false,
    twelth_pass_year: false,
    degree: false,
    degree_collegename: false,
    degree_collegeplace: false,
    university_name: false,
    branch: false,
    current_year: false,
    cgpa: false,
    graduation_year: false,
  });

  const [formIncomplete, setFormIncomplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (Object.values(requiredFields).every((field) => field)) {
      try {
        // Send a POST request to your Spring API with the education data
        await axios.post('http://localhost:8080/education/addEducation', educationData);
        navigate('/home/MyProfile');

        // Clear the form after successful submission
        setEducationData({
          userId: loggedInUser,
          tenth_schoolname: '',
          tenth_school_city: '',
          tenth_pass_year: '',
          college_name: '',
          college_city: '',
          twelth_pass_year: '',
          degree: '',
          degree_collegename: '',
          degree_collegeplace: '',
          university_name: '',
          branch: '',
          current_year: '',
          cgpa: '',
          graduation_year: '',
        });

        // Reset the required fields state
        setRequiredFields({
          tenth_schoolname: false,
          tenth_school_city: false,
          tenth_pass_year: false,
          college_name: false,
          college_city: false,
          twelth_pass_year: false,
          degree: false,
          degree_collegename: false,
          degree_collegeplace: false,
          university_name: false,
          branch: false,
          current_year: false,
          cgpa: false,
          graduation_year: false,
        });

        // Reset the form incomplete message
        setFormIncomplete(false);
      } catch (error) {
        console.error('Error adding education data:', error);
      }
    } else {
      // Highlight required fields that are not filled
      setFormIncomplete(true);
    }
  };

  const handleChange = (field, value) => {
    setEducationData({ ...educationData, [field]: value });
    setRequiredFields({ ...requiredFields, [field]: value !== '' });
  };

  return (
    <Container maxWidth="sm" className="add-education-container">
      <h2>Add Education</h2>
      <div className="education-form">
        {Object.keys(educationData).map((field) => (
          <div key={field} className="form-group">
            <TextField
              label={field.replace(/_/g, ' ')}
              fullWidth
              variant="outlined"
              value={educationData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
            />
            {requiredFields[field] && educationData[field] === '' && (
              <p className="error-message">This field is required</p>
            )}
          </div>
        ))}
      </div>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save
      </Button>
      {formIncomplete && (
        <p className="error-message">Please fill in all the required fields before submitting.</p>
      )}
    </Container>
  );
}

export default AddEducationPage;
