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
    fontWeight: 500,
    fontSize: 24,
  },
};
const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcom❤️❤️❤️</h1>
      <span style={styles.span} role="img" aria-label="Иконка приветствия">
        🎅 Please, Sign up or Log in to have access to the Phonebook!
      </span>
    </div>
  );
};
export default Home;
