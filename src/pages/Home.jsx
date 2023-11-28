import React from 'react';

const styles = {
  container: {
    display: 'flax',
    minHeight: 'calc(100wh - 50px)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 600,
  },

  span: {
    fontWeight: 400,
    fontSize: 24,
    backgroundColor: '#2AA5A0',
    backgroundImage: 'linear-gradient(90deg, #E3535D, #2a41a5)',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
  },
  title: {
    color: 'rgb(11, 88, 114)',
    padding: 30,
  },
};
const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcom, users!</h1>
      <span style={styles.span}>
        Please, Sign up or Log in to have access to the Phonebook!
      </span>
    </div>
  );
};
export default Home;
