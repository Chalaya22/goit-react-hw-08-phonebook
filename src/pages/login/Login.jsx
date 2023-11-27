import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from 'redux/auth/authOperatioms';
import css from 'pages/login/login.module.css';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div className={css.container}>
      <h1 className={css.title}>Login </h1>
      <p>Логінся / Отримай доступ до книги контактів</p>
      <form className={css.form} onSubmit={hendleSubmit}>
        <label className={css.label}>
          <p className={css.paragraf}>Email</p>
          <input
            className={css.input}
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email: "
          />
        </label>
        <label className={css.label}>
          <p className={css.paragraf}>Password</p>
          <input
            className={css.input}
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password: "
          />
        </label>
        <button className={css.btn} type="submit">
          Login now
        </button>
      </form>
    </div>
  );
};
export default Login;
