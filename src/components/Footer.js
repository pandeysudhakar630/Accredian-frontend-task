import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Accredian. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    marginTop: '2rem',
  },
};

export default Footer;
