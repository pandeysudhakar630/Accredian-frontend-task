import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseList = ({ courses, onDeleteCourse }) => {
  const navigate = useNavigate();

  const handleAddCourse = () => {
    navigate('/add-course');
  };

  const handleEdit = (course) => {
    navigate(`/edit-course/${course.id}`, { state: { course } });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Course List</h2>
      <button
        onClick={handleAddCourse}
        style={{ display: 'block', margin: '1rem auto', padding: '0.5rem 1rem' }}
      >
        Add Course
      </button>
      {courses.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No courses available. Please add a course.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Duration</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{course.title}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{course.description}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{course.duration}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <button onClick={() => handleEdit(course)} style={{ marginRight: '8px' }}>
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteCourse(course.id)}
                    style={{ backgroundColor: 'red', color: 'white' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CourseList;
