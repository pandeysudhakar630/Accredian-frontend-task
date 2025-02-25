import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.name && <p style={styles.error}>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        />
        {errors.message && <p style={styles.error}>{errors.message}</p>}

        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  input: {
    width: '80%',
    maxWidth: '400px',
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '80%',
    maxWidth: '400px',
    padding: '0.8rem',
    height: '100px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
  },
};

export default Contact;
