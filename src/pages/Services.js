import React, { useEffect, useState } from 'react';
import { fetchCourses } from './api';  // Import the fetchCourses function

const Services = () => {
  const [courses, setCourses] = useState([]);  // State to store fetched courses
  const [loading, setLoading] = useState(true);  // State to manage loading state
  const [error, setError] = useState(null);  // State to manage error

  // Fetch courses data when the component mounts
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const courseData = await fetchCourses();  // Call fetchCourses from api.js
        setCourses(courseData);  // Update state with fetched courses
      } catch (error) {
        setError('Failed to load courses');  // Handle error if fetching fails
      } finally {
        setLoading(false);  // Set loading state to false after fetching
      }
    };

    loadCourses();  // Call the function to load courses
  }, []);  // Empty dependency array to call only once when the component mounts

  // Show loading message while courses are being fetched
  if (loading) {
    return <div>Loading courses...</div>;
  }

  // Show error message if there is an issue fetching data
  if (error) {
    return <div>{error}</div>;
  }

  // Render the list of courses
  return (
    <div style={styles.container}>
      <h2>Our Courses</h2>
      <ul style={styles.list}>
        {courses.map(course => (
          <li key={course.id} style={styles.item}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Duration: {course.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    backgroundColor: '#f4f4f4',
    margin: '1rem auto',
    padding: '1rem',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '500px',
  },
};

export default Services;
