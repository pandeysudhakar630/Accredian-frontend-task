import axios from 'axios';

// Backend URL
const BASE_URL = 'https://accredian-backend-task-pptk.onrender.com';

// Fetch all courses (GET request)
export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/courses`);
    return response.data;  // Return the courses data
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;  // Throw error if the request fails
  }
};

// Add a new course (POST request)
export const addCourse = async (course) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/courses`, course);
    return response.data;  // Return the newly added course data
  } catch (error) {
    console.error('Error adding course:', error);
    throw error;  // Throw error if the request fails
  }
};

// Update an existing course (PUT request)
export const updateCourse = async (id, course) => {
  try {
    const response = await axios.put(`${BASE_URL}/api/courses/${id}`, course);
    return response.data;  // Return the updated course data
  } catch (error) {
    console.error('Error updating course:', error);
    throw error;  // Throw error if the request fails
  }
};

// Delete a course (DELETE request)
export const deleteCourse = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/api/courses/${id}`);
    return id;  // Return the course ID that was deleted
  } catch (error) {
    console.error('Error deleting course:', error);
    throw error;  // Throw error if the request fails
  }
};
