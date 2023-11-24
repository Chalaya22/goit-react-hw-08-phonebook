import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/authOperatioms';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export const Register = () => {
  const dispatch = useDispatch();
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
    <div>
      <h1>Page Register </h1>
      <form onSubmit={hendleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label style={styles.label}>
          Email
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label style={styles.label}>
          Password
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit"> Register now</button>
      </form>
    </div>
  );
};
export default Register;
