import React, { useState } from 'react';
import axios from 'axios';

const ReferralForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', jobTitle: '' });
  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    if (resume) formData.append('resume', resume);

    try {
      const token = localStorage.getItem('token');
      await axios.post('/candidates', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Candidate referred successfully');
      setForm({ name: '', email: '', phone: '', jobTitle: '' });
      setResume(null);
    } catch (err) {
      alert(err.response?.data?.error || 'Referral failed');
    }
  };

   return (
    <form className="referral-form" onSubmit={handleSubmit} encType="multipart/form-data">
      <h2 className="referral-title">Refer a Candidate</h2>
      <input name="name" className="referral-input" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" className="referral-input" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="phone" className="referral-input" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <input name="jobTitle" className="referral-input" placeholder="Job Title" value={form.jobTitle} onChange={handleChange} required />
      <input type="file" className="referral-file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />
      <button type="submit" className="referral-button">Submit</button>
    </form>
  );
};

export default ReferralForm;