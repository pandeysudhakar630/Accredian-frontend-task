import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = ({ courses, onDeleteCourse }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>All Courses</h2>
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '50%' }}
      />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <li key={course.id} style={{ margin: '1rem 0', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link to={`/courses/${course.id}`} style={{ marginRight: '1rem' }}>View Details</Link>
              <Link to={`/edit-course/${course.id}`} style={{ marginRight: '1rem' }}>Edit</Link>
              <button onClick={() => onDeleteCourse(course.id)} style={{ background: 'red', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px' }}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </ul>
      <Link to="/add-course" style={{ textDecoration: 'none', background: '#007BFF', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px' }}>
        Add New Course
      </Link>
    </div>
  );
};

export default Courses;
