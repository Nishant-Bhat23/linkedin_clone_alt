import React, { useState, useEffect } from 'react';
import '../styles/AddAddress.css'; // Import your CSS file
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddAddressPage() {
 const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address_type:'Select Address Type',
    street_address: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
  });

  const loggedUser = localStorage.getItem("sessionToken");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async(e) => {
    e.preventDefault();
     try {
   // Send a POST request to your Spring API with the addresses data
     await axios.post(`http://localhost:8080/address/${loggedUser}/addAddress`, formData);

         navigate("/home");

               setFormData({
                        userId: loggedUser, // Reset user ID
                        address_type:'Select Address Type',
                        street_address: '',
                        city: '',
                        state: '',
                        postal_code: '',
                        country: '',
                });
             }
      catch (error) {
         alert("Failed to save addresses");
         console.error("Error saving addresses:", error);
       }


    console.log(formData);
  };


  return (
    <div className="add-address-page">
      <h1>Add Address</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
         <label>  Address Type </label>
                  <select
                          name="address_type"
                          value={formData.address_type}
                          onChange={handleChange}
                        >
                          <option value="Select Address Type">Select Address Type</option>
                          <option value="Permanent">Permanent</option>
                          <option value="Current">Current</option>
                        </select>

        </div>
        <div className="form-group">
          <label>Street Address</label>
          <input
            type="text"
            name="street_address"
            value={formData.street_address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input
            type="text"
            name="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddAddressPage;