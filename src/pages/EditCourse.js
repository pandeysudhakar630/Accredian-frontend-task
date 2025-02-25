import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCourse = ({ courses, onUpdateCourse }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id));

  const [title, setTitle] = useState(course?.title || '');
  const [description, setDescription] = useState(course?.description || '');
  const [duration, setDuration] = useState(course?.duration || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !duration) {
      alert('All fields are required!');
      return;
    }

    const updatedCourse = { ...course, title, description, duration };
    onUpdateCourse(updatedCourse);
    navigate('/courses');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Edit Course</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ margin: '0.5rem 0', padding: '0.5rem' }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ margin: '0.5rem 0', padding: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={{ margin: '0.5rem 0', padding: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem', backgroundColor: 'green', color: 'white' }}>
          Update Course
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
