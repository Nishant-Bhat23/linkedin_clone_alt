import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/AddAddress.css';

function AddAddressPage() {
  const navigate = useNavigate();
  const loggedUser = localStorage.getItem('sessionToken');

  const [formData, setFormData] = useState({
    address_type: 'Select Address Type',
    street_address: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
  });

  const [requiredFields, setRequiredFields] = useState({
    address_type: false,
    street_address: false,
    city: false,
    state: false,
    postal_code: false,
    country: false,
  });

  const [formIncomplete, setFormIncomplete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setRequiredFields({ ...requiredFields, [name]: value !== '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (Object.values(requiredFields).every((field) => field)) {
      try {
        // Send a POST request to your Spring API with the addresses data
        await axios.post(`http://localhost:8080/address/${loggedUser}/addAddress`, formData);

        navigate('/home/MyProfile');

        setFormData({
          userId: loggedUser,
          address_type: 'Select Address Type',
          street_address: '',
          city: '',
          state: '',
          postal_code: '',
          country: '',
        });

        // Reset the required fields state
        setRequiredFields({
          address_type: false,
          street_address: false,
          city: false,
          state: false,
          postal_code: false,
          country: false,
        });

        // Reset the form incomplete message
        setFormIncomplete(false);
      } catch (error) {
        alert('Failed to save addresses');
        console.error('Error saving addresses:', error);
      }
    } else {
      // Highlight required fields that are not filled
      setFormIncomplete(true);
    }
  };

  return (
    <div className="add-address-page">
      <h1>Add Address</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Address Type</label>
          <select
            name="address_type"
            value={formData.address_type}
            onChange={handleChange}
          >
            <option value="Select Address Type">Select Address Type</option>
            <option value="Permanent">Permanent</option>
            <option value="Current">Current</option>
          </select>
          {requiredFields.address_type && formData.address_type === '' && (
            <p className="error-message">This field is required</p>
          )}
        </div>
        <div className="form-group">
          <label>Street Address</label>
          <input
            type="text"
            name="street_address"
            value={formData.street_address}
            onChange={handleChange}
          />
          {requiredFields.street_address && formData.street_address === '' && (
            <p className="error-message">This field is required</p>
          )}
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {requiredFields.city && formData.city === '' && (
            <p className="error-message">This field is required</p>
          )}
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          {requiredFields.state && formData.state === '' && (
            <p className="error-message">This field is required</p>
          )}
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input
            type="text"
            name="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
          />
          {requiredFields.postal_code && formData.postal_code === '' && (
            <p className="error-message">This field is required</p>
          )}
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          {requiredFields.country && formData.country === '' && (
            <p className="error-message">This field is required</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      {formIncomplete && (
        <p className="error-message">Please fill in all the required fields before submitting.</p>
      )}
    </div>
  );
}

export default AddAddressPage;
