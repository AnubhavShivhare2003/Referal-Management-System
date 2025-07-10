import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://referal-management-system-2pby.onrender.com/auth/signup', form);
      alert('User registered. Please login.');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className="signup-title">Sign Up</h2>
      <input
        name="name"
        className="signup-input"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        className="signup-input"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        className="signup-input"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit" className="signup-button">Sign Up</button>
    </form>
  );
};

export default Signup;