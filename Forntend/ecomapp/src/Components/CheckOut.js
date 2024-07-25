import React, { useState } from 'react';
import axios from 'axios';
import './CheckOut.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/contact/', formData)
      .then(response => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });
  };

  if (submitted) {
    return <h2>Thank you for contacting us!</h2>;
  }

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleInputChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

