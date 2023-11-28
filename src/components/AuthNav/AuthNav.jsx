import { NavLink } from 'react-router-dom';
import css from './AuthNaw.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        REGISTER
      </NavLink>
      <NavLink className={css.link} to="/login">
        LOGIN
      </NavLink>
    </div>
  );
};
