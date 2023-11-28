import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/authOperatioms';
import { getIsLoadind } from 'redux/auth/authSelectors';
import Loader from 'components/LoaderPhone/LoaderPhone';
import css from 'pages/register/Register.module.css';

export const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadind);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <container className={css.container}>
      {isLoading && <Loader />}
      <h1 className={css.title}> Register </h1>
      <p> Немає акаунту? / Зареєструйся тут</p>
      <form onSubmit={hendleSubmit} className={css.form}>
        <label className={css.label}>
          <p className={css.paragraf}>Name</p>
          <input
            className={css.input}
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </label>
        <label className={css.label}>
          <p className={css.paragraf}>Email</p>
          <input
            className={css.input}
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </label>
        <label className={css.label}>
          <p className={css.paragraf}>Passford</p>
          <input
            className={css.input}
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter passford"
          />
        </label>
        <button type="submit" className={css.btn}>
          Register now
        </button>
      </form>
    </container>
  );
};
export default Register;
