import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    const fetchCandidates = async () => {
      const res = await axios.get('/candidates', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCandidates(res.data);
    };
    fetchCandidates();
  }, [navigate]);

  const updateStatus = async (id, newStatus) => {
    const token = localStorage.getItem('token');
    try {
      await axios.put(`/candidates/${id}/status`, { status: newStatus }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCandidates(prev => prev.map(c => c._id === id ? { ...c, status: newStatus } : c));
    } catch (err) {
      alert(err.response?.data?.error || 'Update failed');
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Referred Candidates</h2>
      <input
        type="text"
        className="dashboard-search"
        placeholder="Search by job title or status"
        onChange={(e) => setFilter(e.target.value)}
      />
      {console.log("candidates:", candidates)}
      {Array.isArray(candidates) ? candidates.filter(c =>
        c.jobTitle.toLowerCase().includes(filter.toLowerCase()) ||
        c.status.toLowerCase().includes(filter.toLowerCase())
      ).map(c => (
        <div key={c._id} className="candidate-card">
          <h3 className="candidate-name">{c.name}</h3>
          <p className="candidate-job">Job: {c.jobTitle}</p>
          <p className="candidate-status">Status: {c.status}</p>
          <select
            className="candidate-select"
            value={c.status}
            onChange={(e) => updateStatus(c._id, e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Reviewed">Reviewed</option>
            <option value="Hired">Hired</option>
          </select>
        </div>
      )) : <div className="dashboard-error">No candidates found or data format error.</div>}
    </div>
  );
};

export default Dashboard;