import React from "react";
import { Container, TextField, Button } from '@mui/material';
import '../styles/AddEducationPage.css';//import your css file
import  { useState } from 'react';


function AddExp(){
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const handleSave = () => {
      //Handle saving the experience information to the server or perform any desired action
          // You can also reset the form fields after saving.
    };
return(
<Container maxWidth="sm" className="add-education-container">
      <h2>ADD EXPERIENCE</h2>
      <div className="education-form">
        <TextField
          label="Comapany Name"
          fullWidth
          variant="outlined"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <TextField
          label="Positon"
          fullWidth
          variant="outlined"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <TextField
          label="Start Date"
          fullWidth
          variant="outlined"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          />
          <TextField
            label="End date"
            fullWidth
            variant="outlined"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
      </div><br/>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Container>

);

}
export default AddExp;