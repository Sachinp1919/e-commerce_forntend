import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';


function Profile() {
  const [profileData, setProfileData] = useState({ user: {}, address: '', phone_number: '' });
  const { authTokens } = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://localhost:8000/api/profile/', {
      headers: {
        Authorization: `Bearer ${authTokens.access}`
      }
    })
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile data', error);
      });
  }, [authTokens]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/profile/', profileData, {
      headers: {
        Authorization: `Bearer ${authTokens.access}`
      }
    })
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        console.error('Error updating profile data', error);
      });
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={profileData.user.username} readOnly />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={profileData.user.email} readOnly />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={profileData.address} onChange={handleInputChange} />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" name="phone_number" value={profileData.phone_number} onChange={handleInputChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Profile;

