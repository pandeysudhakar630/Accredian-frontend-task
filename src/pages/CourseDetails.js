import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CourseDetails = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Course not found!</h2>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <Link to="/courses" style={{ textDecoration: 'none', color: 'white', background: '#007BFF', padding: '0.5rem 1rem', borderRadius: '8px' }}>
        Back to Courses
      </Link>
    </div>
  );
};

export default CourseDetails;
