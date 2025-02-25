import React from 'react';

const Services = () => {
  const services = [
    { id: 1, name: 'Web Development', description: 'Building responsive and modern web apps.' },
    { id: 2, name: 'UI/UX Design', description: 'Crafting beautiful and user-friendly interfaces.' },
    { id: 3, name: 'SEO Optimization', description: 'Helping your site rank higher in search results.' },
  ];

  return (
    <div style={styles.container}>
      <h2>Our Services</h2>
      <ul style={styles.list}>
        {services.map(service => (
          <li key={service.id} style={styles.item}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
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
