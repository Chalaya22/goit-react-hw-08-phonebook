import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperatioms';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import avatar from '../../images/331.jpg';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { isName } = useAuth();

  return (
    <div className={css.container}>
      <img
        src={avatar}
        alt="Default Avatar"
        width="42"
        className={css.avatar}
      />
      <p className={css.userName}> WELCOME , {isName} !</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LOGOUT
      </button>
    </div>
  );
};
