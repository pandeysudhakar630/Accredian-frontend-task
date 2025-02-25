import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CourseList from './components/CourseList';
import AddCourse from './pages/AddCourse';
import EditCourse from './pages/EditCourse';
import axios from 'axios';

const App = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const addCourse = async (course) => {
    try {
      await axios.post('http://localhost:5000/courses', course);
      fetchCourses(); // Fresh data fetch
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const updateCourse = async (updatedCourse) => {
    try {
      await axios.put(`http://localhost:5000/courses/${updatedCourse.id}`, updatedCourse);
      fetchCourses(); // Fresh data fetch
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/courses/${id}`);
      fetchCourses(); // Fresh data fetch
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseList courses={courses} onDeleteCourse={deleteCourse} />} />
        <Route path="/add-course" element={<AddCourse onAddCourse={addCourse} />} />
        <Route path="/edit-course/:id" element={<EditCourse courses={courses} onUpdateCourse={updateCourse} />} />
      </Routes>
    </Router>
  );
};

export default App;
