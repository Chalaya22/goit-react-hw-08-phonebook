import React from 'react';
const styles = {
  container: {
    display: 'flax',
    minHeight: 'calc(100wh - 50px)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
  },
  span: {
    fontWeight: 400,
    fontSize: 24,
    backgroundColor: '#2AA5A0',
    backgroundImage: 'linear-gradient(90deg, #E3535D, #2a41a5)',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
  },
};
const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcom❤️❤️❤️</h1>
      <span style={styles.span}>
        Please, Sign up or Log in to have access to the Phonebook!
      </span>
    </div>
  );
};
export default Home;
