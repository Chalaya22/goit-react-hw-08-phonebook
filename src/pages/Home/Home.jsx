import React from 'react';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcom, users!</h1>
      <span className={css.span}>
        Please, Sign up or Log in to have access to the Phonebook!
      </span>
    </div>
  );
};
export default Home;
