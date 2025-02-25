import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCourse = ({ onAddCourse }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !duration) {
      alert('Please fill out all fields');
      return;
    }
    onAddCourse({ title, description, duration });
    setSuccessMessage('Course added successfully!');
    setTimeout(() => {
      setSuccessMessage('');
      navigate('/courses');
    }, 1500);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Add New Course</h2>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Course Title"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Course Description"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Duration:</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Course Duration (e.g. 4 weeks)"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#333', color: 'white' }}>
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
